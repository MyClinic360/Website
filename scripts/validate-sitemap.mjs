#!/usr/bin/env node
/**
 * Valida public/sitemap.xml e public/robots.txt:
 *
 * sitemap.xml:
 *  - Apenas URLs do domínio canônico (www.myclinic360.com.br)
 *  - Sem padrões proibidos (/blog, query strings, etc.)
 *  - Cada path deve corresponder a uma rota declarada em src/App.tsx
 *  - Cada <url> precisa ter <loc> e <lastmod> em formato ISO (YYYY-MM-DD)
 *  - Sem URLs duplicadas
 *
 * robots.txt:
 *  - Cada padrão proibido deve estar em Disallow para TODOS os User-agents
 *    (e não pode ser sobrescrito por uma regra Allow do mesmo path)
 *
 * Sai com código 1 se encontrar qualquer problema, falhando o build.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITEMAP_PATH = resolve(ROOT, "public/sitemap.xml");
const ROBOTS_PATH = resolve(ROOT, "public/robots.txt");
const APP_PATH = resolve(ROOT, "src/App.tsx");

const CANONICAL_HOST = "https://www.myclinic360.com.br";
const FORBIDDEN_PATTERNS = [
  { pattern: /\/blog(\/|$)/i, reason: "URL de blog antiga não deve estar no sitemap" },
  { pattern: /\?/, reason: "URLs com query string não devem ser indexadas" },
  { pattern: /#/, reason: "URLs com fragmento não devem ser indexadas" },
  { pattern: /\/admin(\/|$)/i, reason: "Rotas administrativas não devem ser indexadas" },
];

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}

if (!existsSync(SITEMAP_PATH)) {
  console.error("❌ public/sitemap.xml não encontrado.");
  process.exit(1);
}

const xml = readFileSync(SITEMAP_PATH, "utf8");
const appSrc = readFileSync(APP_PATH, "utf8");

// Extrai rotas declaradas em App.tsx (path="/algo")
const routeRegex = /<Route\s+path="([^"]+)"/g;
const declaredRoutes = new Set();
let m;
while ((m = routeRegex.exec(appSrc)) !== null) {
  declaredRoutes.add(m[1]);
}

function pathMatchesDeclaredRoute(path) {
  if (declaredRoutes.has(path)) return true;
  // Suporta rotas dinâmicas tipo /forms/:formId
  for (const route of declaredRoutes) {
    if (!route.includes(":")) continue;
    const regex = new RegExp(
      "^" + route.replace(/:[^/]+/g, "[^/]+").replace(/\//g, "\\/") + "$"
    );
    if (regex.test(path)) return true;
  }
  return false;
}

// Parse simples de <url> blocks
const urlBlocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(b => b[1]);

if (urlBlocks.length === 0) {
  fail("Sitemap não contém nenhuma <url>.");
}

const seenLocs = new Set();

for (const block of urlBlocks) {
  const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
  const lastmodMatch = block.match(/<lastmod>([^<]+)<\/lastmod>/);

  if (!locMatch) {
    fail("Bloco <url> sem <loc>.");
    continue;
  }
  const loc = locMatch[1].trim();

  if (seenLocs.has(loc)) {
    fail(`URL duplicada no sitemap: ${loc}`);
  }
  seenLocs.add(loc);

  if (!loc.startsWith(CANONICAL_HOST)) {
    fail(`URL fora do domínio canônico (${CANONICAL_HOST}): ${loc}`);
    continue;
  }

  const path = loc.slice(CANONICAL_HOST.length) || "/";

  for (const { pattern, reason } of FORBIDDEN_PATTERNS) {
    if (pattern.test(path)) {
      fail(`URL proibida (${reason}): ${loc}`);
    }
  }

  if (!pathMatchesDeclaredRoute(path)) {
    fail(
      `URL no sitemap não corresponde a nenhuma rota em src/App.tsx: ${loc}\n` +
        `   Rotas válidas: ${[...declaredRoutes].filter(r => r !== "*").join(", ")}`
    );
  }

  if (!lastmodMatch) {
    warnings.push(`URL sem <lastmod>: ${loc}`);
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmodMatch[1].trim())) {
    fail(`<lastmod> em formato inválido (esperado YYYY-MM-DD) em ${loc}: ${lastmodMatch[1]}`);
  }
}

// ─────────────────────────────────────────────────────────────
// Validação do robots.txt
// ─────────────────────────────────────────────────────────────
const ROBOTS_FORBIDDEN_PATHS = ["/blog", "/admin"];

if (!existsSync(ROBOTS_PATH)) {
  fail("public/robots.txt não encontrado.");
} else {
  const robots = readFileSync(ROBOTS_PATH, "utf8");

  // Parse em grupos por User-agent
  const groups = []; // { agents: string[], allow: string[], disallow: string[] }
  let current = null;
  for (const rawLine of robots.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) {
      if (current) {
        groups.push(current);
        current = null;
      }
      continue;
    }
    const [rawKey, ...rest] = line.split(":");
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(":").trim();
    if (key === "user-agent") {
      if (!current) current = { agents: [], allow: [], disallow: [] };
      current.agents.push(value);
    } else if (current && key === "allow") {
      current.allow.push(value);
    } else if (current && key === "disallow") {
      current.disallow.push(value);
    }
  }
  if (current) groups.push(current);

  if (groups.length === 0) {
    fail("robots.txt não declara nenhum grupo User-agent.");
  }

  for (const group of groups) {
    for (const forbidden of ROBOTS_FORBIDDEN_PATHS) {
      const isDisallowed = group.disallow.some(d => d && forbidden.startsWith(d));
      const isOverriddenByAllow = group.allow.some(
        a => a && (a === forbidden || forbidden.startsWith(a + "/")) && a !== "/"
      );
      // Allow: / é genérico e não conta como override específico do path proibido
      if (!isDisallowed) {
        fail(
          `robots.txt: User-agent "${group.agents.join(", ")}" não tem Disallow para ${forbidden}`
        );
      } else if (isOverriddenByAllow) {
        fail(
          `robots.txt: User-agent "${group.agents.join(", ")}" tem Allow específico que sobrescreve Disallow ${forbidden}`
        );
      }
    }
  }
}

if (warnings.length) {
  for (const w of warnings) console.warn(`⚠️  ${w}`);
}

if (errors.length) {
  console.error("\n❌ Validação falhou:\n");
  for (const e of errors) console.error(`   • ${e}`);
  console.error(`\n${errors.length} erro(s) encontrado(s).\n`);
  process.exit(1);
}

console.log(`✅ Sitemap e robots.txt válidos — ${urlBlocks.length} URL(s) verificada(s).`);
