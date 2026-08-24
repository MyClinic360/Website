import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Stethoscope,
  Network,
  ClipboardCheck,
  MapPin,
  HeartPulse,
  Activity,
  Users,
  TrendingUp,
  ShieldCheck,
  Building2,
  GraduationCap,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/programa-hero.jpg";
import redeImage from "@/assets/programa-rede.jpg";

const problems = [
  "Incontinência urinária",
  "Dor pélvica crônica",
  "Disfunções sexuais",
  "Complicações pós-parto",
  "Sequelas pós-cirurgias",
];

const consequences = [
  { icon: Clock, text: "Longos períodos de espera" },
  { icon: Activity, text: "Agravamento dos sintomas" },
  { icon: HeartPulse, text: "Impacto na qualidade de vida" },
  { icon: TrendingUp, text: "Aumento de custos assistenciais" },
];

const solutionItems = [
  { title: "Triagem clínica digital", desc: "Avaliação inicial estruturada e baseada em evidências." },
  { title: "Encaminhamento inteligente", desc: "Match automático entre paciente e especialista certo." },
  { title: "Rede nacional certificada", desc: "Fisioterapeutas pélvicos qualificados em todas as regiões." },
  { title: "Monitoramento contínuo", desc: "Acompanhamento da evolução clínica do paciente." },
];

const steps = [
  { icon: Stethoscope, title: "Diagnóstico médico", description: "Paciente recebe diagnóstico em consulta especializada." },
  { icon: ClipboardCheck, title: "Encaminhamento digital", description: "Médico ou instituição libera acesso à plataforma." },
  { icon: Activity, title: "Triagem clínica", description: "Questionário breve classifica o tipo de disfunção." },
  { icon: MapPin, title: "Match regional", description: "Sistema identifica o especialista ideal próximo ao paciente." },
  { icon: HeartPulse, title: "Tratamento", description: "Início do acompanhamento com profissional capacitado." },
];

const benefits = [
  { icon: Users, title: "Ampliação do cuidado", description: "Continuidade terapêutica garantida após o diagnóstico." },
  { icon: ShieldCheck, title: "Rede qualificada", description: "Profissionais certificados em fisioterapia pélvica." },
  { icon: Network, title: "Encaminhamento simples", description: "Conexão direta entre paciente e especialista." },
  { icon: TrendingUp, title: "Monitoramento de resultados", description: "Acompanhamento da evolução clínica integrado." },
  { icon: HeartPulse, title: "Qualidade assistencial", description: "Melhor experiência e desfecho clínico." },
  { icon: GraduationCap, title: "Formação contínua", description: "Profissionais com certificação reconhecida pelo MEC." },
];

const impacts = [
  "Ampliar o acesso ao tratamento",
  "Reduzir filas e tempo de espera",
  "Melhorar desfechos clínicos",
  "Promover qualidade de vida",
];

const ProgramaReabilitacao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Programa Nacional de Reabilitação Pélvica | MyClinic360</title>
        <meta
          name="description"
          content="Plataforma que conecta pacientes diagnosticados a fisioterapeutas pélvicos certificados em todo o Brasil. Para hospitais, clínicas e médicos especialistas."
        />
        <link rel="canonical" href="https://www.myclinic360.com.br/programa-reabilitacao-pelvica" />
        <meta property="og:title" content="Programa Nacional de Reabilitação Pélvica | MyClinic360" />
        <meta
          property="og:description"
          content="Conectamos pacientes diagnosticados a especialistas em fisioterapia pélvica em todo o Brasil."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myclinic360.com.br/programa-reabilitacao-pelvica" />
      </Helmet>

      <Header />

      <main role="main">
        {/* HERO */}
        <section className="relative pt-24 pb-20 sm:py-28 lg:py-36 overflow-hidden bg-mesh">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 mb-6 lg:mb-8 bg-primary-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">Programa institucional</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                  Conectamos pacientes a{" "}
                  <span className="text-primary">especialistas</span> em todo o Brasil
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-6 leading-relaxed">
                  Plataforma digital que integra médicos, hospitais e fisioterapeutas
                  especializados para ampliar o acesso ao tratamento de disfunções do assoalho
                  pélvico.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button size="lg" className="group rounded-full px-7" asChild>
                    <a href="#parceria">
                      Conhecer o programa
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-7" asChild>
                    <Link to="/contato">Cadastrar instituição</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Cobertura nacional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Especialistas certificados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Baseado em evidências</span>
                  </div>
                </div>
              </div>

              <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/50">
                  <img
                    src={heroImage}
                    alt="Fisioterapeuta atendendo paciente em ambiente clínico moderno"
                    width={1280}
                    height={960}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-4 -right-4 sm:-right-6 z-20 bg-card rounded-2xl shadow-elevated border border-primary/20 p-4 animate-float-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <Network className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Rede</p>
                      <p className="font-bold text-foreground text-sm">Nacional</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 sm:-left-6 z-20 bg-card rounded-2xl shadow-elevated border border-primary/20 p-4 animate-float-subtle" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Profissionais</p>
                      <p className="font-bold text-foreground text-sm">Certificados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">O problema</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5">
                Uma lacuna crítica no cuidado do paciente
              </h2>
              <p className="text-lg text-muted-foreground">
                Disfunções do assoalho pélvico afetam milhões de brasileiros — incluindo:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto">
              {problems.map((p) => (
                <div
                  key={p}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary/40 hover:bg-accent/40 transition-colors"
                >
                  {p}
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl border border-border bg-gradient-to-br from-card to-muted/30">
              <p className="text-base sm:text-lg text-foreground/90 text-center leading-relaxed">
                Apesar de a fisioterapia pélvica ser amplamente reconhecida como tratamento de
                primeira linha, o acesso ainda é limitado em grande parte do sistema de saúde.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-8">
                Consequências comuns
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {consequences.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-foreground font-medium leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section className="py-20 sm:py-28 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-6 max-w-6xl relative">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-foreground mb-5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">A solução</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5">
                A maior rede de profissionais especializados
              </h2>
              <p className="text-lg text-muted-foreground">
                Plataforma digital que conecta instituições de saúde a fisioterapeutas
                qualificados em reabilitação pélvica.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {solutionItems.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 mb-5">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Como funciona</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Fluxo simples de encaminhamento
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {steps.map((step, i) => (
                  <div key={step.title} className="relative group">
                    <div className="relative w-14 h-14 mx-auto mb-5 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-soft transition-all">
                      <step.icon className="w-6 h-6 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-[11px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground mb-1.5">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-foreground mb-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Para médicos e hospitais</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Benefícios para instituições parceiras
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REDE */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 mb-5">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rede de especialistas</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                  Uma rede nacional em expansão contínua
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    O programa conta com fisioterapeutas pélvicos qualificados em todas as
                    regiões do país, com formação específica e atuação baseada em evidências.
                  </p>
                  <p>
                    A rede é continuamente expandida através de programas de formação e
                    certificação profissional reconhecidos pelo MEC.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Users, label: "Especialistas certificados" },
                    { icon: MapPin, label: "Cobertura nacional" },
                    { icon: GraduationCap, label: "Formação MEC" },
                    { icon: ShieldCheck, label: "Baseado em evidências" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="bg-card border border-border rounded-xl p-3 flex items-center gap-2.5 hover:border-primary/30 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <p className="text-xs font-medium text-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-elevated">
                  <img
                    src={redeImage}
                    alt="Rede nacional de fisioterapeutas pélvicos no Brasil"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACTO */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary-foreground mb-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Impacto em saúde</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5">
                Transformando o acesso à reabilitação pélvica
              </h2>
              <p className="text-lg text-muted-foreground">
                Conectando diagnóstico médico e reabilitação especializada para:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {impacts.map((item) => (
                <div
                  key={item}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm font-medium text-foreground leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARCERIA / CTA */}
        <section id="parceria" className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-accent/30 p-10 sm:p-16 text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5">
                  Torne-se uma instituição parceira
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Hospitais, clínicas e médicos especialistas integram uma rede que promove
                  acesso ampliado ao tratamento e contribui para a evolução do cuidado em saúde
                  pélvica no Brasil.
                </p>

                <Button asChild size="lg" className="group rounded-full px-8">
                  <Link to="/contato">
                    Quero integrar minha instituição
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramaReabilitacao;
