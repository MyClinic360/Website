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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, description }: SupportEmailRequest =
      await req.json();

    // Validate input
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

    // Send notification email to the support team
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MyClinic360 Suporte <onboarding@resend.dev>",
        to: ["myclinic360.mkt@gmail.com"],
        subject: `[Suporte] ${subject} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00BFA6;">Novo Chamado de Suporte</h2>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email do sistema:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
            <p><strong>Assunto:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Descrição:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 10px;">
              <p style="white-space: pre-wrap;">${description}</p>
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
            <h1 style="color: #00BFA6;">Olá, ${name}!</h1>
            <p>Recebemos seu chamado de suporte e nossa equipe já está analisando.</p>
            <p>Entraremos em contato o mais breve possível.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #666; font-size: 14px;">
              <strong>Assunto:</strong> ${subject}<br /><br />
              <strong>Descrição:</strong><br />
              ${description}
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

    console.log("Support emails sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Chamado aberto com sucesso" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-support-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
