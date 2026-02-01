import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  CalendarCheck,
  FileQuestion,
  Heart,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Module {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
}

const modules: Module[] = [
  {
    icon: ClipboardList,
    title: "Prontuário Digital",
    subtitle: "Organização clínica",
    description:
      "Histórico centralizado com evolução, anamnese e registros permanentes. Nada se perde.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    icon: Users,
    title: "Captação de Pacientes",
    subtitle: "Crescimento nacional",
    description:
      "Receba leads de todo o Brasil. Atenda presencialmente ou online e expanda sua base.",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  {
    icon: CalendarCheck,
    title: "Agenda Inteligente",
    subtitle: "Organização da rotina",
    description:
      "Visualização por dia ou semana, lembretes automáticos e redução de faltas.",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    icon: FileQuestion,
    title: "Questionários Online",
    subtitle: "Avaliações clínicas",
    description:
      "Protocolos validados cientificamente com envio fácil e armazenamento automático.",
    gradient: "from-violet-500/20 via-violet-500/10 to-transparent",
  },
  {
    icon: Heart,
    title: "Cadastro Clínico",
    subtitle: "Segurança da informação",
    description:
      "Medicamentos, alergias, doenças associadas. Tudo vinculado ao perfil do paciente.",
    gradient: "from-rose-500/20 via-rose-500/10 to-transparent",
  },
  {
    icon: Globe,
    title: "Perfil Público",
    subtitle: "Presença digital",
    description:
      "Página profissional com selo verificado MyClinic360 e botão inteligente de contato.",
    gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5,
    } 
  },
};

export function Modules() {
  return (
    <section id="modulos" className="py-16 sm:py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Modern grid background - smaller on mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Glowing orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16 md:mb-20 max-w-3xl mx-auto px-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />
            Como o MyClinic360 ajuda você
          </motion.div>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-6 leading-snug text-center">
            Tudo que o fisioterapeuta pélvico precisa
            <br />
            <span className="relative">
              <span className="text-gradient">em um só lugar</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa para organizar sua clínica, crescer sua base de
            pacientes e fortalecer sua presença digital.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
        >
          {modules.map((module) => (
            <motion.div
              key={module.title}
              variants={item}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glow effect on hover - hidden on mobile */}
              <div className={`hidden sm:block absolute -inset-0.5 bg-gradient-to-r ${module.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
              
              <div className="relative h-full bg-white rounded-xl sm:rounded-2xl border border-border/50 p-4 sm:p-6 md:p-8 hover:border-primary/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br ${module.gradient} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon with modern styling */}
                  <div className="relative mb-3 sm:mb-6">
                    <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <module.icon className="w-5 sm:w-7 h-5 sm:h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    {/* Floating badge - hidden on mobile */}
                    <div className="hidden sm:block absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/50 group-hover:bg-primary animate-pulse" />
                  </div>

                  {/* Content */}
                  <span className="hidden sm:inline-block text-[10px] sm:text-xs text-primary/80 font-semibold uppercase tracking-widest mb-1.5 sm:mb-2">
                    {module.subtitle}
                  </span>
                  <h3 className="font-heading text-sm sm:text-xl font-bold text-foreground mb-1.5 sm:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-0 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {module.description}
                  </p>

                  {/* Modern CTA - hidden on mobile */}
                  <a
                    href="#"
                    className="hidden sm:inline-flex items-center gap-2 text-primary font-medium text-xs sm:text-sm group/link"
                  >
                    <span className="relative">
                      Saiba mais
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
