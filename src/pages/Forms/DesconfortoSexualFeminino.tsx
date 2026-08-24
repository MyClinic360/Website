import { Helmet } from "react-helmet-async";
import { FormHeader } from "@/components/FormHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Lock, BarChart3, CheckCircle2, Heart, Users, Brain, Shield, Sparkles } from "lucide-react";
const DesconfortoSexualFeminino = () => {
  const handleCtaClick = () => {
    window.open("https://form.appmyclinic360.com.br/fsds", "_blank");
  };
  return <>
      <Helmet>
        <title>Avaliação do Desconforto Sexual Feminino | Questionário Clínico Validado</title>
        <meta name="description" content="Sentir desconforto na vida sexual é mais comum do que parece. Avalie seus sintomas com questionário clínico validado, confidencial e gratuito." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myclinic360.com.br/forms/desconforto-sexual-feminino" />
        <meta property="og:title" content="Avaliação do Desconforto Sexual Feminino | Questionário Clínico Validado" />
        <meta property="og:description" content="Sentir desconforto na vida sexual é mais comum do que parece. Avalie seus sintomas com questionário clínico validado, confidencial e gratuito." />
        <meta property="og:url" content="https://www.myclinic360.com.br/forms/desconforto-sexual-feminino" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avaliação do Desconforto Sexual Feminino | Questionário Clínico Validado" />
        <meta name="twitter:description" content="Sentir desconforto na vida sexual é mais comum do que parece. Avalie seus sintomas com questionário clínico validado, confidencial e gratuito." />
        <meta name="twitter:image" content="https://www.myclinic360.com.br/og-myclinic360.jpg?v=3" />
      </Helmet>

      <FormHeader ctaText="Iniciar avaliação" onCtaClick={handleCtaClick} />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Desconforto Sexual Feminino
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                Quando a vida sexual gera sofrimento, seu corpo está pedindo atenção.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">Sentir desconforto, angústia ou frustração em relação à vida sexual é mais comum do que parece e não deve ser ignorado. Avalie seus sintomas de forma confidencial, rápida e segura, com um questionário clínico validado usado por profissionais de saúde.</p>
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
                  Avaliação clínica do desconforto sexual feminino
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Clareza em menos de 2 minutos</span>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Este é um <strong className="text-foreground">questionário clínico validado</strong> que avalia o sofrimento emocional e psicológico relacionado à vida sexual feminina, considerando as últimas 4 semanas.
                </p>
                <p className="text-lg leading-relaxed">
                  Ele ajuda você a entender melhor como sua vida sexual tem impactado seu bem-estar, de forma objetiva, respeitosa e sem julgamentos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What many women don't know */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
                O que muitas mulheres não sabem
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                O desconforto sexual feminino pode estar presente mesmo quando não há dor física ou quando "tudo parece normal".
                Estudos mostram que muitas mulheres convivem com:
              </p>

              <div className="space-y-4 max-w-3xl mx-auto mb-12">
                {["Angústia após ou antes das relações", "Frustração com a vida sexual", "Evitação do contato íntimo", "Sentimentos de inadequação ou culpa"].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>)}
              </div>

              <p className="text-center text-foreground font-medium mb-10">Tudo isso pode gerar sofrimento real e existe cuidado especializado para isso.</p>

              <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-4">
                O desconforto sexual pode afetar:
              </h3>
              <p className="text-center text-muted-foreground mb-10">
                Sentir sofrimento não é exagero. É um sinal.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {[{
                icon: Brain,
                label: "Bem-estar emocional"
              }, {
                icon: Shield,
                label: "Autoestima e autoconfiança"
              }, {
                icon: Heart,
                label: "Relacionamentos afetivos"
              }, {
                icon: Sparkles,
                label: "Qualidade de vida"
              }, {
                icon: Users,
                label: "Conexão com o próprio corpo"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
                Sobre a MyClinic360
              </h2>
              <p className="text-center text-primary font-medium mb-8">
                Cuidado em saúde íntima com ciência, respeito e privacidade
              </p>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  A MyClinic360 é uma <strong className="text-foreground">plataforma de saúde digital especializada em fisioterapia pélvica</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Somos um ecossistema de fisioterapeutas pélvicas atuando em todo o Brasil, com profissionais com mais de 10 anos de experiência clínica, que já acompanharam milhares de mulheres.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Avaliações clínicas confiáveis", "Linguagem clara e acolhedora", "Abordagem baseada em evidências", "Total respeito à sua história e privacidade"].map((item, index) => <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
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
                Você responde a um questionário clínico simples e objetivo, utilizado por profissionais de saúde para identificar o nível de sofrimento relacionado à vida sexual e orientar os próximos passos de cuidado.
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
                label: "Resultados fáceis de interpretar"
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
                Com base no seu resultado, podemos indicar fisioterapeutas pélvicas especializadas, sem qualquer obrigação de consulta.
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
                {[{
                text: "Questionário clínico validado internacionalmente",
                icon: BarChart3
              }, {
                text: "Ferramenta de avaliação  não diagnóstico médico",
                icon: Heart
              }, {
                text: "Ideal para quem quer se conhecer melhor e cuidar da saúde íntima",
                icon: Brain
              }, {
                text: "Dados protegidos e nunca exibidos publicamente",
                icon: Shield
              }, {
                text: "Nenhuma obrigação de consulta ou tratamento",
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
                Falar sobre desconforto sexual não é fraqueza.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                É autocuidado, consciência e saúde.
              </p>
              <p className="text-base text-muted-foreground">
                Você não está sozinha.
                Entender seus sentimentos é o primeiro passo para recuperar conforto, conexão e qualidade de vida.
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
export default DesconfortoSexualFeminino;