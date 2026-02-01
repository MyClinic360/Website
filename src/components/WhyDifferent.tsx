import { motion } from "framer-motion";
import { CheckCircle2, Heart, TrendingUp, Users, Shield } from "lucide-react";
import healthcareProfessional from "@/assets/healthcare-professional.jpg";

const benefits = [
  {
    icon: Heart,
    text: "Entende a realidade do fisioterapeuta e dos pacientes",
  },
  {
    icon: Users,
    text: "Ajuda a organizar os atendimentos da clínica de ponta a ponta",
  },
  {
    icon: Shield,
    text: "Fortalece sua imagem profissional",
  },
  {
    icon: TrendingUp,
    text: "Ajuda sua atuação clínica a crescer com melhor estrutura",
  },
];

export const WhyDifferent = () => {
  return (
    <section id="porque-diferente" className="py-12 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="hidden sm:block absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image Column - Hidden on mobile, shown after content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative frame - smaller on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-xl"
              />
              
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  src={healthcareProfessional}
                  alt="Fisioterapeuta profissional usando MyClinic360"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge - positioned differently on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                animate={{ y: [0, -10, 0] }}
                className="absolute -bottom-3 right-2 sm:-bottom-6 sm:-right-6 bg-card backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl border border-primary/20"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-foreground">+500</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Profissionais confiam</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column - First on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 sm:space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs sm:text-sm font-semibold border border-primary/20 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Por que somos diferentes?
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              >
                <span className="block mb-2 sm:mb-4">
                  Porque o{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">MyClinic360</span>
                    <motion.span 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full origin-left"
                    />
                  </span>
                </span>
                <span className="block">é a melhor opção?</span>
              </motion.h2>
              
              <div className="space-y-2 pt-2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  Você não está contratando apenas um sistema.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base sm:text-lg md:text-xl text-foreground font-semibold"
                >
                  Você está adotando uma plataforma que:
                </motion.p>
              </div>
            </div>

            {/* Benefits list - More compact on mobile */}
            <div className="space-y-2 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 flex-shrink-0">
                    <benefit.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium flex-1">{benefit.text}</p>
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
