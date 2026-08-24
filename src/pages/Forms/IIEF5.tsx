// IIEF-5 Lead Capture Page
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Lock, Heart, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { FormHeader } from "@/components/FormHeader";
import logo from "@/assets/logo.svg";

const IIEF5 = () => {
  const handleStartAssessment = () => {
    window.open("https://form.appmyclinic360.com.br/iief5", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Avaliação IIEF-5 - Questionário de Saúde Masculina | MyClinic360</title>
        <meta
          name="description"
          content="Avalie sua saúde masculina de forma confidencial com o questionário IIEF-5. Reconhecido mundialmente por profissionais de saúde. Resultados em 2-4 minutos."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/forms/iief-5" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Avaliação IIEF-5 - Questionário de Saúde Masculina | MyClinic360" />
        <meta property="og:description" content="Avalie sua saúde masculina de forma confidencial com o questionário IIEF-5. Reconhecido mundialmente por profissionais de saúde." />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta property="og:url" content="https://www.myclinic360.com.br/forms/iief-5" />
        <meta property="og:site_name" content="MyClinic360" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avaliação IIEF-5 - Questionário de Saúde Masculina | MyClinic360" />
        <meta name="twitter:description" content="Avalie sua saúde masculina de forma confidencial com o questionário IIEF-5." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <FormHeader onCtaClick={handleStartAssessment} />

        {/* Hero Section */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Índice Internacional de Disfunção Erétil - IIEF-5
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Avalie sua saúde de forma{" "}
                <span className="text-primary">confidencial, rápida e segura</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Um questionário clínico internacionalmente validado para entender sua saúde em apenas 2 a 4 minutos.
              </p>

              <Button
                onClick={handleStartAssessment}
                size="xl"
                variant="hero"
                className="group"
              >
                Iniciar avaliação gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Estatísticas / Problema */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Dificuldades de ereção afetam mais homens do que você imagina
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estudos mostram que cerca de <strong className="text-foreground">1 em cada 3 homens</strong> com mais de 40 anos enfrenta algum grau de disfunção erétil no Brasil e no mundo.*
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Sparkles, label: "Autoestima" },
                { icon: Heart, label: "Vida sexual" },
                { icon: Users, label: "Relacionamentos" },
                { icon: Shield, label: "Saúde geral" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 text-center shadow-soft border border-border/50"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              *Fonte: estudos epidemiológicos internacionais sobre saúde masculina
            </p>
          </div>
        </section>

        {/* Sobre MyClinic360 */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 sm:p-10 border border-border/50"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
                MyClinic360 é uma plataforma de saúde digital
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Somos um ecossistema de fisioterapeutas pélvicos atuando em todo o Brasil. Nossa equipe tem especialistas com <strong className="text-foreground">mais de 10 anos de experiência</strong>, que já atenderam milhares de pacientes com ética e abordagem baseada em evidências.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
                Como isso funciona
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                Você responde um questionário rápido com 5 perguntas clínicas, baseadas no IIEF-5, uma avaliação reconhecida mundialmente por profissionais de saúde para identificar sinais que mereçam atenção e cuidado.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Clock, label: "2 a 4 minutos" },
                  { icon: Lock, label: "100% confidencial" },
                  { icon: CheckCircle2, label: "Resultados fáceis de interpretar" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-soft border border-border/50"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-muted-foreground">
                O resultado pode orientar a indicação de profissionais próximos a você, <strong className="text-foreground">sem compromisso</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Segurança & Privacidade */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Segurança & Privacidade
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Apenas 5 perguntas objetivas",
                  "Feito para dar clareza, não diagnóstico",
                  "Ideal para quem quer se conhecer melhor",
                  "Seus dados são protegidos e nunca exibidos publicamente",
                  "Nenhuma obrigação de consulta ou tratamento",
                  "Nenhuma exposição pessoal",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Principal */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Comece agora sua avaliação
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rápido, seguro e sem julgamentos.
              </p>
              <Button
                onClick={handleStartAssessment}
                size="xl"
                variant="hero"
                className="group"
              >
                Iniciar avaliação gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-3xl p-8 sm:p-10 border border-border/50 shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Você não está sozinho
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Milhares de homens já usaram esta avaliação para entender melhor sua saúde com discrição e apoio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer simples */}
        <footer className="py-8 px-4 sm:px-6 border-t border-border/50">
          <div className="container mx-auto text-center">
            <img src={logo} alt="MyClinic360" className="h-6 mx-auto mb-4 opacity-60" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MyClinic360. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IIEF5;
