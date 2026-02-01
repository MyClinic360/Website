import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  MessageSquare,
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Monitor,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Receber leads de pacientes interessados",
    description: "Pacientes de todo o Brasil podem encontrar você através da plataforma",
  },
  {
    icon: MessageSquare,
    title: "Centralizar todas as solicitações de contato",
    description: "Gerencie todos os leads em um único lugar organizado e eficiente",
  },
  {
    icon: Globe,
    title: "Expandir sua presença para todo o Brasil",
    description: "Atenda pacientes de qualquer região, presencialmente ou online",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function LeadCaptureSection() {
  return (
    <section
      id="captacao"
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="hidden sm:block absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm"
            >
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
              Expansão Nacional
            </motion.div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 sm:mb-6 leading-snug">
              Captação e cadastro de leads de pacientes
              <br />
              em <span className="text-primary">todo o Brasil</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Agora você não precisa depender apenas de indicações.
            </p>

            <p className="text-sm sm:text-base text-foreground font-medium mb-6 sm:mb-8">
              Com o MyClinic360, você pode:
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-5 mb-8 sm:mb-10"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={item}
                  whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-border/50 hover:border-primary/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Button size="lg" className="group rounded-full px-6 sm:px-8 w-full sm:w-auto" asChild>
              <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                Começar a captar leads
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>

          {/* Right Content - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-card rounded-2xl sm:rounded-3xl shadow-elevated border border-border/50 p-4 sm:p-6 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Leads de Pacientes</p>
                    <h3 className="font-heading font-bold text-foreground text-lg sm:text-xl">Novos Contatos</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full">
                      +12 esta semana
                    </span>
                  </div>
                </div>

                {/* Table mockup */}
                <div className="bg-accent/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 relative z-10">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 pb-2 border-b border-border/50">
                    <span className="font-medium">Nome</span>
                    <div className="flex gap-4 sm:gap-8">
                      <span className="hidden sm:inline">Idade</span>
                      <span>Gênero</span>
                      <span>Recebido em</span>
                    </div>
                  </div>

                  {/* Lead rows */}
                  {[
                    { name: "Ana Carolina", age: "35 anos", gender: "Mulher", date: "Hoje, 14:30" },
                    { name: "João Mariano", age: "40 anos", gender: "Homem", date: "Ontem, 22:01" },
                    { name: "Mariana Silva", age: "28 anos", gender: "Mulher", date: "18/12/2025" },
                  ].map((lead, index) => (
                    <motion.div
                      key={lead.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between py-2 sm:py-3 border-b border-border/30 last:border-0"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-semibold text-xs">
                          {lead.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="font-medium text-foreground text-xs sm:text-sm">{lead.name}</span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-8 text-xs text-muted-foreground">
                        <span className="hidden sm:inline">{lead.age}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium ${
                            lead.gender === "Mulher" ? "bg-pink-500/10 text-pink-600" : "bg-blue-500/10 text-blue-600"
                          }`}
                        >
                          {lead.gender}
                        </span>
                        <span className="text-[10px] sm:text-xs">{lead.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating card - Presencial & Online */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 z-20 bg-card rounded-xl sm:rounded-2xl shadow-elevated border border-primary/20 p-3 sm:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-1">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                      <Building className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                    </div>
                    <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                      <Monitor className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Atendimentos</p>
                    <p className="font-semibold text-foreground text-xs sm:text-sm">Presencial & Online</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - Brasil */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 z-20 bg-card rounded-xl sm:rounded-2xl shadow-elevated border border-primary/20 p-2 sm:p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-xs sm:text-sm">Todo Brasil</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">27 estados</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom info cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-border/50 rounded-xl p-3 sm:p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">Para quem é ideal</span>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                  Profissionais que atuam com atendimentos presenciais e online
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-border/50 rounded-xl p-3 sm:p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">Benefício direto</span>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                  Visibilidade nacional e novas oportunidades de atendimento
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
