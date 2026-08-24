import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft, Headphones } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.svg";

export default function Support() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if Supabase is configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
        throw new Error('Supabase não configurado. Configure as variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY.');
      }

      const { data, error } = await supabase.functions.invoke("send-support-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Chamado aberto com sucesso!",
        description: "Nossa equipe de suporte entrará em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        description: "",
      });
    } catch (error: any) {
      console.error("Error sending support request:", error);
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Suporte — MyClinic360</title>
        <meta
          name="description"
          content="Precisa de ajuda? Abra um chamado de suporte e nossa equipe irá atendê-lo o mais rápido possível."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/suporte" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Suporte — MyClinic360" />
        <meta property="og:description" content="Precisa de ajuda? Abra um chamado de suporte." />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta property="og:url" content="https://www.myclinic360.com.br/suporte" />
        <meta property="og:site_name" content="MyClinic360" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suporte — MyClinic360" />
        <meta name="twitter:description" content="Precisa de ajuda? Abra um chamado de suporte." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <header className="relative z-10 py-6">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="MyClinic360" className="h-10 md:h-12" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 py-12 md:py-20" role="main">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                  <Headphones className="w-4 h-4" />
                  Suporte ao Cliente
                </div>

                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Como podemos <span className="text-gradient">ajudar?</span>
                </h1>

                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 rounded-3xl blur-xl opacity-50" />

                  <form
                    onSubmit={handleSubmit}
                    className="relative bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-10 space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email usado no sistema
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Ex: Ajuda com acesso"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-foreground">
                        Descrição do problema
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Fale um pouco sobre o que você precisa…"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl text-base font-semibold group"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Abrir chamado
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você concorda com nossa{" "}
                      <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </Link>
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
