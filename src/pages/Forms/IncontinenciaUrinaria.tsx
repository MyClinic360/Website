import { Helmet } from "react-helmet-async";
import { FormHeader } from "@/components/FormHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Lock, BarChart3, CheckCircle2, Heart, Users, Brain, Shield, Moon, Sparkles } from "lucide-react";

const IncontinenciaUrinaria = () => {
  const handleCtaClick = () => {
    window.open("https://form.appmyclinic360.com.br/iciq", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Avaliação de Incontinência Urinária | Questionário Clínico no Brasil</title>
        <meta name="description" content="Perdas urinárias são mais comuns do que você imagina e têm tratamento. Avalie seus sintomas com questionário clínico validado, confidencial e gratuito." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/forms/incontinencia-urinaria" />
        <meta property="og:title" content="Avaliação de Incontinência Urinária | Questionário Clínico no Brasil" />
        <meta property="og:description" content="Perdas urinárias são mais comuns do que você imagina e têm tratamento. Avalie seus sintomas com questionário clínico validado, confidencial e gratuito." />
        <meta property="og:url" content="https://www.myclinic360.com.br/forms/incontinencia-urinaria" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avaliação de Incontinência Urinária | Questionário Clínico no Brasil" />
        <meta name="twitter:description" content="Perdas urinárias são mais comuns do que você imagina e têm tratamento. Avalie seus sintomas com questionário clínico validado, confidencial e gratuito." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>

      <FormHeader ctaText="Iniciar avaliação" onCtaClick={handleCtaClick} />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Incontinência Urinária em Homens e Mulheres
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                Entenda seus sintomas. Retome o controle. Cuide da sua qualidade de vida.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Perdas urinárias são mais comuns do que você imagina — e têm tratamento.
                Avalie seus sintomas de forma confidencial, rápida e segura, com um questionário clínico validado usado por profissionais de saúde.
              </p>
              <Button onClick={handleCtaClick} size="xl" className="group">
                Iniciar avaliação agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Block */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Avaliação clínica rápida da saúde urinária
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Resultados em menos de 2 minutos</span>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Este é um <strong className="text-foreground">questionário clínico validado</strong>, desenvolvido para ajudar você a compreender melhor sua saúde urinária de forma simples, objetiva e respeitosa.
                </p>
                <p className="text-lg leading-relaxed">
                  A incontinência urinária afeta milhões de pessoas no Brasil e no mundo, homens e mulheres, em diferentes fases da vida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Block */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
                O que os estudos mostram
              </h2>

              <div className="space-y-4 max-w-3xl mx-auto mb-12">
                {[
                  "Até 1 em cada 4 mulheres pode apresentar algum grau de perda urinária ao longo da vida",
                  "Entre os homens, o problema é mais comum após os 40 anos ou após cirurgias urológicas",
                  "Mesmo assim, muitas pessoas convivem com o desconforto em silêncio, sem saber que existe tratamento e melhora significativa na maioria dos casos",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-4">
                A incontinência urinária pode impactar diretamente:
              </h3>
              <p className="text-center text-muted-foreground mb-10">
                Entender seus sintomas é o primeiro passo para retomar o controle.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { icon: Sparkles, label: "Qualidade de vida" },
                  { icon: Shield, label: "Autoconfiança" },
                  { icon: Users, label: "Vida social e profissional" },
                  { icon: Moon, label: "Sono e bem-estar emocional" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-4 sm:p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-foreground text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
                Sobre a MyClinic360
              </h2>
              <p className="text-center text-primary font-medium mb-8">
                Saúde pélvica com base científica, respeito e privacidade
              </p>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  A MyClinic360 é uma <strong className="text-foreground">plataforma de saúde digital especializada em fisioterapia pélvica</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Somos um ecossistema de fisioterapeutas pélvicos atuando em todo o Brasil, com profissionais que possuem mais de 10 anos de experiência clínica e já acompanharam milhares de pacientes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Avaliações confiáveis",
                  "Linguagem clara e acessível",
                  "Abordagem baseada em evidências",
                  "Total respeito à sua privacidade",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
                Como funciona a avaliação
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Você responde a um questionário clínico simples e objetivo, utilizado por profissionais de saúde para avaliar sintomas urinários e orientar os próximos passos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Clock, label: "2 a 4 minutos" },
                  { icon: Lock, label: "100% confidencial" },
                  { icon: BarChart3, label: "Resultados fáceis de entender" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-6 bg-background rounded-2xl border border-border/50">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-foreground text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground">
                Com base no seu resultado, podemos indicar fisioterapeutas pélvicos que atendem na sua região, sem qualquer obrigação de agendamento.
              </p>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Segurança, privacidade e transparência
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { text: "Apenas 5 perguntas objetivas", icon: BarChart3 },
                  { text: "Ferramenta de clareza  não diagnóstico médico", icon: Heart },
                  { text: "Ideal para quem quer se conhecer melhor e cuidar da própria saúde", icon: Brain },
                  { text: "Dados protegidos e nunca exibidos publicamente", icon: Shield },
                  { text: "Não há obrigação de consulta ou tratamento", icon: CheckCircle2 },
                  { text: "Nenhuma exposição pessoal", icon: Lock },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-5 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base leading-relaxed pt-2">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Comece agora
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rápido, discreto e gratuito.
              </p>
              <Button onClick={handleCtaClick} size="xl" className="group">
                Iniciar avaliação agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                Cuidar da saúde urinária não é vergonha.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                É autocuidado, informação e qualidade de vida.
              </p>
              <p className="text-base text-muted-foreground">
                Quanto antes você entende seus sintomas, mais opções você tem.
                Informação é o primeiro passo para viver com mais conforto, segurança e bem-estar.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MyClinic360. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="/politica-de-privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IncontinenciaUrinaria;
