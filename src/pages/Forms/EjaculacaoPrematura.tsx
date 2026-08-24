import { Helmet } from "react-helmet-async";
import { FormHeader } from "@/components/FormHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Lock, BarChart3, CheckCircle2, Heart, Users, Brain, Shield, Sparkles, AlertCircle } from "lucide-react";
const EjaculacaoPrematura = () => {
  const handleCtaClick = () => {
    window.open("https://form.appmyclinic360.com.br/ipe", "_blank");
  };
  return <>
      <Helmet>
        <title>Ejaculação Prematura: Avaliação Online, Confidencial e Gratuita</title>
        <meta name="description" content="Descubra se seus sintomas indicam ejaculação precoce. Avaliação online, rápida, sigilosa e gratuita usada por profissionais de saúde." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/forms/ejaculacao-prematura" />
        <meta property="og:title" content="Ejaculação Prematura: Avaliação Online, Confidencial e Gratuita" />
        <meta property="og:description" content="Descubra se seus sintomas indicam ejaculação precoce. Avaliação online, rápida, sigilosa e gratuita usada por profissionais de saúde." />
        <meta property="og:url" content="https://www.myclinic360.com.br/forms/ejaculacao-prematura" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ejaculação Prematura: Avaliação Online, Confidencial e Gratuita" />
        <meta name="twitter:description" content="Descubra se seus sintomas indicam ejaculação precoce. Avaliação online, rápida, sigilosa e gratuita usada por profissionais de saúde." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>

      <FormHeader ctaText="Iniciar avaliação" onCtaClick={handleCtaClick} />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Avaliação clínica de ejaculação prematura
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Resultado em menos de 4 minutos</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Ejaculação Prematura: Avaliação Online, Confidencial e Gratuita
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                Descubra se seus sintomas indicam ejaculação precoce e veja quais são os próximos passos.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Dificuldade para controlar o tempo da ejaculação é mais comum do que parece e tem solução. Faça agora uma avaliação online, rápida e sigilosa, usada por profissionais de saúde para entender melhor seus sintomas.
              </p>
              <Button onClick={handleCtaClick} size="xl" className="group">
                Iniciar avaliação agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* What is it */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-6">
                O que é ejaculação prematura?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  A ejaculação prematura (ou ejaculação precoce) acontece quando o homem tem pouco controle sobre o momento da ejaculação, causando frustração, ansiedade ou impacto na vida sexual e emocional.
                </p>
                <p className="text-lg leading-relaxed mb-6">Ela pode surgir:</p>
              </div>

              <div className="space-y-4 mb-8">
                {["Desde as primeiras relações", "Após períodos de estresse ou ansiedade", "Em fases específicas da vida adulta"].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>)}
              </div>

              <p className="text-center text-muted-foreground italic">
                👉 E não tem relação direta com masculinidade, idade ou "falta de experiência".
              </p>
            </div>
          </div>
        </section>

        {/* Is it common */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
                Ejaculação prematura é comum?
              </h2>
              <p className="text-center text-lg text-primary font-medium mb-6">Sim e muito mais do que se imagina.</p>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                A ejaculação prematura é uma das disfunções sexuais masculinas mais frequentes no Brasil, afetando homens jovens e adultos de todas as idades. Mesmo assim, muitos evitam procurar ajuda por:
              </p>

              <div className="space-y-4 max-w-3xl mx-auto mb-10">
                {["Vergonha de falar sobre o assunto", "Medo de julgamento", "Falta de informação confiável", "Achar que \"isso é normal\" ou \"não tem tratamento\""].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>)}
              </div>

              <p className="text-center text-foreground font-medium text-lg">
                A verdade é: na maioria dos casos, existe melhora significativa com o cuidado certo.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
                Como a ejaculação prematura pode afetar sua vida?
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                Quando o problema persiste, ele pode impactar:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-10">
                {[{
                icon: Shield,
                label: "Autoconfiança"
              }, {
                icon: Heart,
                label: "Relação com o parceiro(a)"
              }, {
                icon: Sparkles,
                label: "Prazer sexual"
              }, {
                icon: Brain,
                label: "Ansiedade de desempenho"
              }, {
                icon: Users,
                label: "Qualidade de vida"
              }].map((item, index) => <div key={index} className="flex flex-col items-center p-4 sm:p-6 bg-muted/50 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-foreground text-center">
                      {item.label}
                    </span>
                  </div>)}
              </div>

              <p className="text-center text-muted-foreground">
                Se isso está te incomodando, já é motivo suficiente para buscar clareza.
              </p>
            </div>
          </div>
        </section>

        {/* Online Assessment */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Rápida, segura e sem exposição
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-6">
                Avaliação online de ejaculação prematura
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center mb-10">
                <p className="text-lg leading-relaxed">
                  Aqui você pode fazer um questionário clínico simples, utilizado por profissionais de saúde para avaliar sintomas de ejaculação prematura.
                </p>
              </div>

              <p className="text-center text-foreground font-medium mb-6">A avaliação ajuda a entender:</p>

              <div className="space-y-4 max-w-2xl mx-auto mb-10">
                {["Se o controle ejaculatório pode estar alterado", "Se existe impacto emocional associado", "Se vale a pena buscar acompanhamento especializado"].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>)}
              </div>

              <p className="text-center text-muted-foreground italic">
                Tudo de forma discreta, respeitosa e sem julgamentos.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
                Como funciona o teste de ejaculação prematura?
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Você responde a um questionário rápido, com perguntas objetivas sobre sua experiência sexual recente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[{
                icon: Clock,
                label: "2 a 4 minutos"
              }, {
                icon: Lock,
                label: "Totalmente confidencial"
              }, {
                icon: BarChart3,
                label: "Resultado fácil de entender"
              }].map((item, index) => <div key={index} className="flex flex-col items-center p-6 bg-muted/50 rounded-2xl border border-border/50">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-foreground text-center">
                      {item.label}
                    </span>
                  </div>)}
              </div>

              <p className="text-center text-muted-foreground">
                Com base no resultado, você pode entender quais profissionais procurar e quais opções de cuidado existem.
              </p>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
                Ejaculação prematura tem tratamento?
              </h2>
              <p className="text-center text-lg text-primary font-medium mb-8">
                Na maioria dos casos, sim.
              </p>
              <p className="text-center text-muted-foreground mb-8">O cuidado pode incluir:</p>

              <div className="space-y-4 max-w-2xl mx-auto mb-8">
                {["Orientação especializada", "Técnicas corporais e comportamentais", "Abordagens baseadas em evidências científicas"].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>)}
              </div>

              <p className="text-center text-muted-foreground">
                Cada pessoa é diferente — por isso, avaliar corretamente faz toda a diferença.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
                Sobre a MyClinic360
              </h2>
              <p className="text-center text-primary font-medium mb-8">
                Informação confiável sobre saúde sexual masculina
              </p>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  A MyClinic360 é uma <strong className="text-foreground">plataforma de saúde digital</strong> que conecta avaliação clínica, informação de qualidade e profissionais especializados.
                </p>
                <p className="text-lg leading-relaxed">
                  Nosso objetivo é ajudar você a entender seu corpo e tomar decisões mais seguras sobre sua saúde sexual.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Linguagem clara e acessível", "Abordagem baseada em evidências", "Respeito total à privacidade", "Cuidado sem julgamento"].map((item, index) => <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>)}
              </div>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[{
                text: "Questionário clínico usado por profissionais de saúde",
                icon: BarChart3
              }, {
                text: "Ferramenta de avaliação, não diagnóstico médico",
                icon: Heart
              }, {
                text: "Ideal para quem quer entender os sintomas antes de procurar ajuda",
                icon: Brain
              }, {
                text: "Nenhuma informação é exibida publicamente",
                icon: Shield
              }, {
                text: "Nenhuma obrigação de consulta",
                icon: CheckCircle2
              }, {
                text: "Nenhuma exposição pessoal",
                icon: Lock
              }].map((item, index) => <div key={index} className="group flex items-start gap-4 p-5 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base leading-relaxed pt-2">{item.text}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Faça sua avaliação agora
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rápido, discreto e gratuito.
              </p>
              <Button onClick={handleCtaClick} size="xl" className="group">
                Iniciar avaliação de ejaculação prematura agora
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
                Informação é o primeiro passo para melhorar sua vida sexual
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Buscar clareza sobre seus sintomas não é vergonha. É autocuidado, maturidade e responsabilidade com sua saúde.
              </p>
              <p className="text-base text-muted-foreground">
                Quanto antes você entende o que está acontecendo, mais opções você tem.
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
    </>;
};
export default EjaculacaoPrematura;