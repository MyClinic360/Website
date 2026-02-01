import { motion } from "framer-motion";
import { Building2, Home, Monitor, Shuffle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Building2,
    title: "Clínica Própria",
    description: "Organize sua clínica com prontuários digitais e agenda inteligente.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    icon: Home,
    title: "Atendimento Domiciliar",
    description: "Acesse tudo pelo celular. Histórico completo na palma da mão.",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  {
    icon: Monitor,
    title: "Atendimento Online",
    description: "Questionários digitais e perfil público para teleconsultas.",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    icon: Shuffle,
    title: "Modelo Híbrido",
    description: "Flexibilidade total para combinar presencial e online.",
    gradient: "from-violet-500/20 via-violet-500/10 to-transparent",
  },
];

const idealProfiles = [
  "Fisioterapeutas pélvicos em início de carreira",
  "Profissionais que buscam mais organização",
  "Clínicas de fisioterapia pélvica em crescimento",
  "Profissionais que desejam mais credibilidade digital",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
    } 
  },
};

export function Audience() {
  return (
    <section id="publico" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="hidden sm:block absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/3 -right-32 w-80 h-80 bg-accent/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />
            Para quem é o MyClinic360
          </motion.div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Feito para{" "}
            <span className="relative">
              <span className="text-primary">fisioterapeutas pélvicos</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Seja você dono de clínica, profissional autônomo ou atendendo online,
            MyClinic360 se adapta à sua realidade.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              variants={item}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glow effect */}
              <div className={`hidden sm:block absolute -inset-0.5 bg-gradient-to-r ${audience.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
              
              <div className="relative h-full bg-white rounded-xl sm:rounded-2xl border border-border/50 p-5 sm:p-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden hover:border-primary/30">
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${audience.gradient} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <audience.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ideal profile section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[2rem] blur-xl opacity-50" />
          
          <div className="relative bg-gradient-to-br from-[#008582] to-[#006d6a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center relative z-10">
              <div className="text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                    Perfil ideal do usuário
                  </h3>
                  <p className="text-white/80 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    O MyClinic360 é perfeito para profissionais que buscam crescimento 
                    organizado e querem se destacar no mercado.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#008582] hover:bg-white/90 rounded-full px-6 sm:px-8 shadow-lg group w-full sm:w-auto"
                    asChild
                  >
                    <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                      Começar agora
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-2 sm:gap-3"
              >
                {idealProfiles.map((profile, index) => (
                  <motion.div
                    key={profile}
                    variants={item}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm text-white font-medium">
                      {profile}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}