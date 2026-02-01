import { motion } from "framer-motion";
import { Lightbulb, Rocket, Shield, Award, CheckCircle2 } from "lucide-react";

const differentials = [
  {
    icon: Lightbulb,
    title: "Entende sua rotina",
    description:
      "Desenvolvido por quem conhece a realidade do fisioterapeuta pélvico. Não é apenas software.",
  },
  {
    icon: Shield,
    title: "Segurança em primeiro lugar",
    description:
      "Seus dados e os de seus pacientes protegidos com as melhores práticas de segurança.",
  },
  {
    icon: Rocket,
    title: "Estrutura para escalar",
    description:
      "Base sólida para crescer de forma organizada. Atenda mais pacientes sem perder qualidade.",
  },
  {
    icon: Award,
    title: "Credibilidade digital",
    description:
      "Perfil público verificado que transmite profissionalismo e confiança aos pacientes.",
  },
];

const features = [
  "Foco 100% no fisioterapeuta pélvico",
  "Plataforma pensada para a realidade clínica",
  "Estrutura que fortalece a imagem profissional",
  "Base sólida para crescimento clínico",
  "Suporte humanizado e dedicado",
  "Atualizações contínuas e gratuitas",
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-6">
              Por que MyClinic360 é diferente
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-6 leading-snug text-center lg:text-left">
              Mais que um sistema.
              <br />
              <span className="relative">
                <span className="text-primary">Uma parceria para crescer.</span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                />
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-5 sm:mb-10">
              MyClinic360 não é apenas software. É uma plataforma de crescimento profissional 
              pensada especificamente para fisioterapeutas pélvicos que buscam organização, 
              credibilidade e expansão.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-3 sm:gap-4"
          >
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-border flex items-start gap-3 sm:gap-4 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <diff.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground mb-0.5 sm:mb-1">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}