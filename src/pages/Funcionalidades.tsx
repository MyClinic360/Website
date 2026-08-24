import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  History,
  ClipboardList,
  Activity,
  Calendar,
  MessageCircle,
  Users,
  UserCheck,
  Check,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import prontuarioScreenshot from "@/assets/prontuario-screenshot.webp";
import questionariosScreenshot from "@/assets/questionarios-screenshot.webp";
import protocolosScreenshot from "@/assets/protocolos-screenshot.webp";
import agendaScreenshot from "@/assets/agenda-screenshot.webp";
import dashboardScreenshot from "@/assets/dashboard-screenshot.webp";
import historicoScreenshot from "@/assets/historico-screenshot.webp";
import leadsScreenshot from "@/assets/leads-screenshot.webp";
import whatsappScreenshot from "@/assets/whatsapp-screenshot.webp";
import perfilPublicoScreenshot from "@/assets/perfil-publico-screenshot.webp";

interface Feature {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  listTitle: string;
  items: string[];
  extraTitle?: string;
  extraItems?: string[];
  /** Path para imagem do sistema. Deixe vazio para mostrar placeholder. */
  image?: string;
  imageAlt: string;
  accent: string;
  /** Componente customizado de mockup (sobrepõe imagem/placeholder) */
  mockup?: React.ComponentType;
}

const features: Feature[] = [
  {
    icon: FileText,
    eyebrow: "Organização clínica",
    title: "Prontuário Digital para Fisioterapia",
    description:
      "Centralize todas as informações dos seus pacientes e tenha acesso rápido ao histórico clínico durante o atendimento. Nada se perde, tudo fica organizado e disponível quando você precisa.",
    listTitle: "O que você pode registrar",
    items: [
      "Dados clínicos e cadastrais",
      "Condições de saúde, alergias e medicamentos",
      "Dados antropométricos",
      "Evolução do paciente ao longo do tratamento",
    ],
    image: historicoScreenshot,
    imageAlt: "Tela do prontuário digital MyClinic360",
    accent: "from-primary/30 to-primary/5",
  },
  {
    icon: History,
    eyebrow: "Continuidade do cuidado",
    title: "Histórico de Consultas e Evolução",
    description:
      "Registre cada atendimento e acompanhe a evolução clínica de forma estruturada. Tenha segurança na tomada de decisão e continuidade no tratamento.",
    listTitle: "Benefícios",
    items: [
      "Histórico completo por paciente",
      "Evolução documentada",
      "Acesso rápido às consultas anteriores",
    ],
    image: historicoScreenshot,
    imageAlt: "Dashboard de histórico e agendamentos no MyClinic360",
    accent: "from-blue-500/30 to-blue-500/5",
  },
  {
    icon: ClipboardList,
    eyebrow: "Avaliações clínicas",
    title: "Questionários Clínicos Online",
    description:
      "Aplique questionários validados cientificamente de forma simples, rápida e integrada ao prontuário.",
    listTitle: "Inclui",
    items: [
      "IIEF-5",
      "DSF",
      "QABH",
      "Avaliações de incontinência urinária",
      "Qualidade de vida",
    ],
    extraTitle: "Vantagens",
    extraItems: [
      "Envio por link para o paciente",
      "Respostas armazenadas automaticamente",
      "Apoio direto na avaliação clínica",
    ],
    image: questionariosScreenshot,
    imageAlt: "Questionários clínicos no MyClinic360",
    accent: "from-violet-500/30 to-violet-500/5",
  },
  {
    icon: Activity,
    eyebrow: "Base científica",
    title: "Protocolos de Eletroterapia e Biofeedback",
    description:
      "Gere protocolos terapêuticos automaticamente com base na disfunção e no objetivo clínico. O sistema sugere parâmetros prontos para aplicação, trazendo mais segurança e agilidade no atendimento.",
    listTitle: "Inclui",
    items: [
      "Protocolos de eletroterapia",
      "Protocolos de biofeedback",
      "Parâmetros clínicos estruturados",
      "Justificativa científica integrada",
    ],
    image: protocolosScreenshot,
    imageAlt: "Protocolos terapêuticos no MyClinic360",
    accent: "from-indigo-500/30 to-indigo-500/5",
  },
  {
    icon: Calendar,
    eyebrow: "Organização da rotina",
    title: "Agenda Inteligente para Clínicas",
    description:
      "Organize seus atendimentos com uma visualização clara da sua rotina e controle total da agenda.",
    listTitle: "Benefícios",
    items: [
      "Visualização por dia ou semana",
      "Organização de horários",
      "Mais controle sobre atendimentos",
    ],
    image: agendaScreenshot,
    imageAlt: "Agenda inteligente do MyClinic360",
    accent: "from-emerald-500/30 to-emerald-500/5",
  },
  {
    icon: MessageCircle,
    eyebrow: "Comunicação direta",
    title: "Confirmação de Consultas via WhatsApp",
    description:
      "Reduza faltas com envio automático de lembretes e confirmações de consulta diretamente para o paciente.",
    listTitle: "Benefícios",
    items: [
      "Menos faltas (no-show)",
      "Comunicação direta e prática",
      "Melhor organização da agenda",
    ],
    image: whatsappScreenshot,
    imageAlt: "Confirmação por WhatsApp no MyClinic360",
    accent: "from-pink-500/30 to-pink-500/5",
  },
  {
    icon: Users,
    eyebrow: "Crescimento nacional",
    title: "Captação de Pacientes",
    description:
      "Aumente sua visibilidade e receba novos pacientes através da plataforma.",
    listTitle: "Inclui",
    items: [
      "Recebimento de leads",
      "Conexão com novos pacientes",
      "Expansão da base",
    ],
    image: leadsScreenshot,
    imageAlt: "Captação de pacientes no MyClinic360",
    accent: "from-amber-500/30 to-amber-500/5",
  },
  {
    icon: UserCheck,
    eyebrow: "Presença digital",
    title: "Perfil Público Profissional",
    description:
      "Tenha uma página profissional dentro do MyClinic360 para fortalecer sua presença digital.",
    listTitle: "Benefícios",
    items: [
      "Perfil validado",
      "Botão de contato direto",
      "Maior credibilidade",
    ],
    image: perfilPublicoScreenshot,
    imageAlt: "Perfil público profissional no MyClinic360",
    accent: "from-rose-500/30 to-rose-500/5",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const FeatureImage = ({ feature }: { feature: Feature }) => {
  const Icon = feature.icon;
  const Mockup = feature.mockup;
  const hasDeviceImage = !Mockup && !!feature.image;

  // Imagem real do sistema já vem com moldura de tablet — sem card extra,
  // apenas glow ambiente + sombra dramática.
  if (hasDeviceImage) {
    return (
      <div className="relative group">
        {/* Glow ambiente que disfarça bordas da imagem */}
        <div
          className="absolute -inset-8 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent rounded-[2.5rem] blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700"
          aria-hidden="true"
        />
        <div
          className="absolute -inset-4 bg-gradient-to-tr from-[#08BBB7]/20 to-[#014F65]/10 rounded-[2rem] blur-2xl opacity-60"
          aria-hidden="true"
        />
        {/* Imagem com sombra em camadas e leve transição no hover */}
        <img
          src={feature.image}
          alt={feature.imageAlt}
          className="relative w-full h-auto block animate-fade-in rounded-2xl
            [filter:drop-shadow(0_30px_40px_rgba(1,79,101,0.25))_drop-shadow(0_10px_20px_rgba(1,79,101,0.15))]
            transition-transform duration-500 ease-out group-hover:-translate-y-1"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className={`absolute -inset-6 bg-gradient-to-br ${feature.accent} rounded-[2rem] blur-3xl opacity-60`}
      />
      <motion.div
        whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        {Mockup ? (
          <Mockup />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted/40 via-background to-accent/30 text-muted-foreground">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-4">
              <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
              <ImageIcon className="w-3.5 h-3.5" />
              Em breve: imagem do sistema
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Funcionalidades = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Funcionalidades | MyClinic360 - Software para Fisioterapia Pélvica</title>
        <meta
          name="description"
          content="Conheça as funcionalidades do MyClinic360: prontuário digital, agenda, questionários clínicos, protocolos de eletroterapia e biofeedback para fisioterapeutas."
        />
        <link rel="canonical" href="https://www.myclinic360.com.br/funcionalidades" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-muted/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] pointer-events-none" />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/40 rounded-full blur-[100px] pointer-events-none"
          />

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerList}
            className="container mx-auto px-4 relative z-10 max-w-4xl text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              Funcionalidades
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Software para Fisioterapia Pélvica com{" "}
              <span className="text-gradient">Prontuário Digital, Agenda e Protocolos Inteligentes</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              O MyClinic360 é um software completo para fisioterapeutas que desejam organizar sua clínica,
              acompanhar a evolução dos pacientes e otimizar o tempo no dia a dia.
            </motion.p>
          </motion.div>
        </section>

        {/* Alternating feature sections */}
        {features.map((feature, idx) => {
          const isReversed = idx % 2 === 1;
          const Icon = feature.icon;
          return (
            <section
              key={feature.title}
              className="py-16 sm:py-24 bg-white relative overflow-hidden"
            >

              <div className="container mx-auto px-4 relative z-10">
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text */}
                  <motion.div
                    variants={isReversed ? fadeInRight : fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-soft">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs text-primary font-semibold uppercase tracking-widest">
                        {feature.eyebrow}
                      </span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                      {feature.description}
                    </p>

                    <motion.div
                      variants={staggerList}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className={feature.extraItems ? "grid sm:grid-cols-2 gap-6" : ""}
                    >
                      <div>
                        <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">
                          {feature.listTitle}
                        </h3>
                        <ul className="space-y-2.5">
                          {feature.items.map((item, i) => (
                            <motion.li
                              key={i}
                              variants={fadeInUp}
                              className="flex items-start gap-2.5"
                            >
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                              </div>
                              <span className="text-sm sm:text-base text-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {feature.extraItems && (
                        <div>
                          <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">
                            {feature.extraTitle}
                          </h3>
                          <ul className="space-y-2.5">
                            {feature.extraItems.map((item, i) => (
                              <motion.li
                                key={i}
                                variants={fadeInUp}
                                className="flex items-start gap-2.5"
                              >
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                </div>
                                <span className="text-sm sm:text-base text-foreground">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    variants={isReversed ? fadeInLeft : fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <FeatureImage feature={feature} />
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Final CTA */}
        <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-elevated relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
                  Menos tempo organizando.
                  <br />
                  Mais tempo atendendo.
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Com o MyClinic360, você centraliza sua clínica, melhora sua tomada de decisão e oferece
                  um atendimento mais completo para seus pacientes.
                </p>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://appmyclinic360.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold text-base shadow-elevated hover:shadow-glow transition-shadow duration-300 group"
                >
                  Começar agora
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Funcionalidades;
