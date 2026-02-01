import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Plataforma profissional para fisioterapeutas",
  "Suporte dedicado",
  "Cancele quando quiser",
];

export function CTA() {
  return (
    <section id="contato" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background like Stripe */}
      <div className="absolute inset-0 bg-mesh" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-8 md:p-12 shadow-elevated">
            <div className="text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Pronto para transformar sua{" "}
                <span className="relative">
                  <span className="text-primary">clínica?</span>
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                  />
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                Junte-se a fisioterapeutas pélvicos que já organizam suas clínicas e 
                fortalecem sua atuação profissional com o MyClinic360.
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-x-6 gap-y-2 mb-6 sm:mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                    Criar sua conta
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                    Falar com especialista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}