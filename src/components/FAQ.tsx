import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o MyClinic360?",
    answer:
      "O MyClinic360 é uma plataforma digital completa de gestão clínica, criada exclusivamente para fisioterapeutas. Ela centraliza pacientes, formulários clínicos, organização do atendimento e presença digital em um único sistema profissional, seguro e fácil de usar.",
  },
  {
    question: "O MyClinic360 é apenas um site?",
    answer:
      "Não. O site do MyClinic360 é a porta de entrada para apresentar a solução e gerar leads. O produto principal é o sistema (web app), onde o fisioterapeuta acessa sua conta, gerencia pacientes, aplica formulários clínicos, acompanha dados e organiza sua rotina profissional.",
  },
  {
    question: "Para quem o MyClinic360 foi criado?",
    answer:
      "O MyClinic360 foi desenvolvido exclusivamente para fisioterapeutas, com foco especial em fisioterapia pélvica. Toda a estrutura, linguagem e funcionalidades foram pensadas para a realidade clínica desse profissional.",
  },
  {
    question: "O MyClinic360 é gratuito?",
    answer:
      "Não. O MyClinic360 é um sistema pago por assinatura, pois envolve infraestrutura, segurança de dados, evolução contínua e suporte profissional. O investimento garante mais organização, credibilidade e crescimento para a clínica.",
  },
  {
    question: "Quais funcionalidades o sistema oferece?",
    answer:
      "Entre as principais funcionalidades estão: Cadastro completo de pacientes, Histórico clínico organizado e centralizado, Aplicação de formulários clínicos validados, Evolução de atendimentos ao longo do tempo, Organização da rotina clínica em um ambiente profissional e seguro. Tudo em um único lugar, sem planilhas ou ferramentas soltas.",
  },
  {
    question: "Preciso instalar algo para usar o MyClinic360?",
    answer:
      "Não. O MyClinic360 funciona 100% online. Basta acessar pelo navegador, fazer login e começar a usar. Não é necessário instalar aplicativos ou softwares adicionais.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto px-2"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-accent text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <HelpCircle className="w-3 sm:w-4 h-3 sm:h-4" />
            Tire suas dúvidas
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-snug text-center">
            Perguntas
            <br />
            <span className="relative">
              <span className="text-primary">Frequentes</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Tudo o que você precisa saber sobre o MyClinic360 antes de começar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl sm:rounded-2xl border border-border/50 px-4 sm:px-6 overflow-hidden data-[state=open]:shadow-elevated data-[state=open]:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-4 sm:py-5 text-sm sm:text-base [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-sm sm:text-base text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="mailto:contato@myclinic360.com"
              className="text-primary font-semibold hover:underline"
            >
              Entre em contato conosco
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
