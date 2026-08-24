import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SupportEmailRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
}

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  if (!text) return "";
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple rate limiting using in-memory store (resets on function restart)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.warn(`[send-support-email] Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Muitas solicitações. Tente novamente mais tarde." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, phone, subject, description }: SupportEmailRequest =
      await req.json();

    // Validate required fields
    if (!name || !email || !subject || !description) {
      return new Response(
        JSON.stringify({
          error: "Nome, email, assunto e descrição são obrigatórios",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Formato de email inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate input lengths to prevent abuse
    if (name.length > 100 || email.length > 255 || subject.length > 200 || description.length > 5000 || (phone && phone.length > 20)) {
      return new Response(
        JSON.stringify({ error: "Dados excedem o tamanho máximo permitido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape user inputs for safe HTML embedding
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Não informado");
    const safeSubject = escapeHtml(subject);
    const safeDescription = escapeHtml(description);

    // Send notification email to the support team
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MyClinic360 Suporte <onboarding@resend.dev>",
        to: ["suporte@myclinic360.com.br"],
        subject: `[Suporte] ${safeSubject} - ${safeName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00BFA6;">Novo Chamado de Suporte</h2>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Nome:</strong> ${safeName}</p>
            <p><strong>Email do sistema:</strong> ${safeEmail}</p>
            <p><strong>Telefone:</strong> ${safePhone}</p>
            <p><strong>Assunto:</strong> ${safeSubject}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Descrição:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 10px;">
              <p style="white-space: pre-wrap;">${safeDescription}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      console.error("Failed to send notification email:", error);
    }

    // Send confirmation email to the user
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MyClinic360 Suporte <onboarding@resend.dev>",
        to: [email],
        subject: "Recebemos seu chamado de suporte - MyClinic360",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00BFA6;">Olá, ${safeName}!</h1>
            <p>Recebemos seu chamado de suporte e nossa equipe já está analisando.</p>
            <p>Entraremos em contato o mais breve possível.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #666; font-size: 14px;">
              <strong>Assunto:</strong> ${safeSubject}<br /><br />
              <strong>Descrição:</strong><br />
              ${safeDescription}
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #888; font-size: 12px;">
              Atenciosamente,<br />
              Equipe de Suporte MyClinic360
            </p>
          </div>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const error = await confirmationRes.text();
      console.error("Failed to send confirmation email:", error);
    }

    console.log(`[send-support-email] Support emails sent successfully from IP: ${clientIP}`);

    return new Response(
      JSON.stringify({ success: true, message: "Chamado aberto com sucesso" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    // Log detailed error server-side only
    console.error("[send-support-email] Error:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    // Return generic error message to client
    return new Response(
      JSON.stringify({ 
        error: "Não foi possível abrir o chamado. Tente novamente mais tarde." 
      }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
