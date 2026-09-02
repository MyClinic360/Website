import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const LEGAL_EMBED_READY_MESSAGE = "myclinic360-legal-embed-ready";

/** Modo embed para exibição em iframe (ex.: dialog do app). Oculta chrome do site. */
export function useEmbedMode(): boolean {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const embed = searchParams.get("embed");
    const explicitEmbed = embed === "1" || embed === "true";
    const inIframe =
      typeof window !== "undefined" && window.self !== window.top;

    return explicitEmbed || inIframe;
  }, [searchParams]);
}

/** Notifica o parent (app Flutter) que o conteúdo embed está pronto. */
export function useLegalEmbedReady(isEmbed: boolean) {
  useEffect(() => {
    if (!isEmbed) return;

    document.documentElement.classList.add("legal-embed");
    document.body.classList.add("legal-embed");

    return () => {
      document.documentElement.classList.remove("legal-embed");
      document.body.classList.remove("legal-embed");
    };
  }, [isEmbed]);

  useEffect(() => {
    if (!isEmbed || window.parent === window) return;

    window.parent.postMessage(
      LEGAL_EMBED_READY_MESSAGE,
      "*",
    );
  }, [isEmbed]);
}

/** Preserva o layout embed ao navegar entre páginas legais no iframe. */
export function embedPath(path: string, isEmbed: boolean): string {
  return isEmbed ? `${path}?embed=1` : path;
}
