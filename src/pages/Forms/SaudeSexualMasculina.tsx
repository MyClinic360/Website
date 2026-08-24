import { Helmet } from "react-helmet-async";
import { FormHeader } from "@/components/FormHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Lock, BarChart3, CheckCircle2, Heart, Users, Brain, Activity, Shield } from "lucide-react";
const SaudeSexualMasculina = () => {
  const handleCtaClick = () => {
    window.open("https://form.appmyclinic360.com.br/qsm", "_blank");
  };
  return <>
      <Helmet>
        <title>Avaliação Rápida da Saúde Sexual Masculina | Teste Online e Confidencial</title>
        <meta name="description" content="Faça uma avaliação rápida da saúde sexual masculina com questionário clínico validado. Teste online, confidencial e utilizado por profissionais no Brasil." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/forms/saude-sexual-masculina" />
        <meta property="og:title" content="Avaliação Rápida da Saúde Sexual Masculina | Teste Online e Confidencial" />
        <meta property="og:description" content="Faça uma avaliação rápida da saúde sexual masculina com questionário clínico validado. Teste online, confidencial e utilizado por profissionais no Brasil." />
        <meta property="og:url" content="https://www.myclinic360.com.br/forms/saude-sexual-masculina" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avaliação Rápida da Saúde Sexual Masculina | Teste Online e Confidencial" />
        <meta name="twitter:description" content="Faça uma avaliação rápida da saúde sexual masculina com questionário clínico validado. Teste online, confidencial e utilizado por profissionais no Brasil." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>

      <FormHeader ctaText="Começar avaliação" onCtaClick={handleCtaClick} />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Avaliação Rápida da Saúde Sexual Masculina
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Entenda seus sintomas de forma confidencial, simples e segura.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Dificuldades de ereção, desempenho ou confiança sexual são mais comuns do que parecem.
                Avalie sua saúde sexual em poucos minutos, com total discrição.
              </p>
              <Button onClick={handleCtaClick} size="xl" className="group">
                Começar avaliação agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Block */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Este é um <strong className="text-foreground">questionário clínico validado</strong>, utilizado por profissionais da saúde para ajudar você a entender melhor sua função sexual de forma rápida e objetiva.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  A saúde sexual masculina pode ser impactada por diversos fatores, como estresse, idade, sedentarismo, alterações hormonais, cirurgias, ansiedade ou condições de saúde.
                </p>
                <p className="text-lg leading-relaxed">Estudos mostram que milhões de homens convivem com dificuldades sexuais ao longo da vida, especialmente após os 40 anos muitas vezes em silêncio, sem saber que existem tratamentos eficazes e melhora significativa na maioria dos casos.<strong className="text-foreground">tratamentos eficazes</strong> e melhora significativa na maioria dos casos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Block - Impact */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
                Alterações na saúde sexual masculina podem afetar:
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Entender seus sintomas é o primeiro passo para cuidar de você e retomar o controle.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {[{
                icon: Shield,
                label: "Autoconfiança"
              }, {
                icon: Heart,
                label: "Relacionamentos"
              }, {
                icon: Brain,
                label: "Bem-estar emocional"
              }, {
                icon: Activity,
                label: "Qualidade de vida"
              }, {
                icon: Users,
                label: "Saúde física e mental"
              }].map((item, index) => <div key={index} className="flex flex-col items-center p-4 sm:p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-foreground text-center">
                      {item.label}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
                Sobre a MyClinic360
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  A MyClinic360 é uma <strong className="text-foreground">plataforma de saúde digital especializada</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Somos um ecossistema de fisioterapeutas pélvicos e profissionais da saúde sexual, atuando em todo o Brasil, com especialistas que possuem mais de 10 anos de experiência clínica e já atenderam milhares de pacientes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Avaliações confiáveis", "Linguagem clara e acessível", "Abordagem baseada em evidências científicas", "Total respeito à privacidade"].map((item, index) => <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>)}
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
                Você responde a um questionário clínico simples, utilizado por profissionais de saúde para avaliar aspectos da função sexual masculina e orientar os próximos passos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[{
                icon: Clock,
                label: "2 a 4 minutos"
              }, {
                icon: Lock,
                label: "100% confidencial"
              }, {
                icon: BarChart3,
                label: "Resultado fácil de entender"
              }].map((item, index) => <div key={index} className="flex flex-col items-center p-6 bg-background rounded-2xl border border-border/50">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-foreground text-center">
                      {item.label}
                    </span>
                  </div>)}
              </div>
              
              <p className="text-center text-muted-foreground">
                Com base no seu resultado, podemos indicar especialistas que atendem na sua região, sem qualquer obrigação de agendamento.
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
                  Segurança e privacidade em primeiro lugar
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Seus dados estão protegidos e sua privacidade é nossa prioridade absoluta.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { text: "Apenas 5 perguntas objetivas", icon: BarChart3 },
                  { text: "Avaliação educativa  não substitui consulta médica", icon: Heart },
                  { text: "Ideal para quem quer se conhecer melhor", icon: Brain },
                  { text: "Dados protegidos e nunca exibidos publicamente", icon: Shield },
                  { text: "Nenhuma obrigação de consulta ou tratamento", icon: CheckCircle2 },
                  { text: "Nenhuma exposição pessoal", icon: Lock }
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
                Inicie sua avaliação agora
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rápido, discreto e gratuito.
              </p>
              <Button onClick={handleCtaClick} size="xl" className="group">
                Começar avaliação da saúde sexual masculina
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
                Cuidar da saúde sexual não é vergonha.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                É autocuidado, informação e qualidade de vida.
              </p>
              <p className="text-base text-muted-foreground">
                Quanto antes você entende seus sintomas, mais opções você tem.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
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
    </>;
};
export default SaudeSexualMasculina;