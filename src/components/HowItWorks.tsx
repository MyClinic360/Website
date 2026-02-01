import { motion } from "framer-motion";
import { UserPlus, CreditCard, FileCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Faça seu cadastro",
    description: "Crie sua conta em poucos minutos com seus dados básicos."
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Realize o pagamento",
    description: "Escolha o plano ideal e efetue o pagamento de forma segura."
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Envie seus dados",
    description: "Complete seu perfil profissional com suas informações e documentos."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Cadastro confirmado",
    description: "Pronto! Sua conta está ativa e você já pode começar a usar."
  }
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-3 md:mb-4">
            Processo simples
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-snug text-center">
            Como funciona?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Em apenas 4 passos você estará pronto para transformar sua gestão clínica
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />
          
          {/* Mobile: Timeline vertical line */}
          <div className="sm:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/30 z-0" />
          
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile: Horizontal card layout */}
                <div className="sm:hidden flex items-start gap-4 pl-2">
                  {/* Step number circle - mobile */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg z-10">
                    {step.number}
                  </div>
                  
                  {/* Content card - mobile */}
                  <div className="flex-1 bg-background rounded-xl p-4 shadow-md border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop/Tablet: Original card layout */}
                <div className="hidden sm:block bg-background rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-2 md:-top-4 md:-right-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for tablet between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:flex lg:hidden justify-center my-4">
                    <div className="w-0.5 h-8 bg-primary/20 relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-primary/40 rotate-45" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
