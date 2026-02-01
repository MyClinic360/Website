import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Sparkles, ArrowRight, Zap, Shield, Clock, Headphones, Crown, ChevronDown, CreditCard, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const benefits = [{
  text: "Perfil profissional público",
  icon: Crown
}, {
  text: "Gerencie seus atendimentos",
  icon: Clock
}, {
  text: "Envio de formulários",
  icon: Check
}, {
  text: "Ambiente seguro e criptografado",
  icon: Shield
}, {
  text: "Leads de pacientes qualificados",
  icon: Zap
}, {
  text: "Indicação de pacientes na sua região",
  icon: Check
}, {
  text: "Notificações e alertas personalizados",
  icon: Check
}];
const plans = [{
  name: "Plano Mensal",
  description: "Ideal para começar",
  price: "109",
  cents: "00",
  period: "por usuário/mês",
  yearly: "R$ 1.308,00 ao ano",
  popular: false,
  gradient: "from-muted/50 via-muted/30 to-transparent",
  borderGradient: "from-border via-border/50 to-border",
  details: {
    subtitle: "Ideal para quem quer começar sem compromisso de longo prazo.",
    highlights: [
      { icon: CreditCard, text: "Cobrança automática mensal de R$ 109,00" },
      { icon: Clock, text: "Cancele quando quiser, sem multa ou burocracia" },
      { icon: Zap, text: "Pagamento recorrente mensal" },
      { icon: Check, text: "Flexibilidade total" },
      { icon: Shield, text: "Acesso completo à plataforma enquanto estiver ativo" }
    ]
  }
}, {
  name: "Plano Anual",
  description: "Melhor custo-benefício",
  price: "87",
  cents: "00",
  period: "por usuário/mês",
  yearly: "R$ 1.044,00 ao ano",
  savings: "Economia de R$ 264,00",
  popular: true,
  gradient: "from-primary/20 via-primary/10 to-transparent",
  borderGradient: "from-primary via-primary/50 to-primary",
  details: {
    subtitle: "A melhor escolha para quem quer economizar.",
    highlights: [
      { icon: CreditCard, text: "Pague R$ 1.044,00 e garanta 12 meses completos" },
      { icon: Calendar, text: "À vista no cartão ou Pix, ou parcele em até 12x" },
      { icon: Sparkles, text: "Economia de R$ 264,00 vs plano mensal" },
      { icon: Check, text: "Melhor custo-benefício" },
      { icon: Shield, text: "Acesso garantido por 12 meses sem renovação mensal" }
    ]
  }
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    x: -15
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25
    }
  }
};
const trustBadges = [{
  text: "Pagamento seguro",
  icon: Shield
}, {
  text: "Cancele quando quiser",
  icon: Clock
}, {
  text: "Suporte dedicado",
  icon: Headphones
}];
export function Pricing() {
  const [collapsedPlans, setCollapsedPlans] = useState<string[]>([]);

  const togglePlan = (planName: string) => {
    setCollapsedPlans(prev => 
      prev.includes(planName) 
        ? prev.filter(p => p !== planName) 
        : [...prev, planName]
    );
  };

  const isPlanExpanded = (planName: string) => !collapsedPlans.includes(planName);

  return <section id="pricing" className="py-12 sm:py-28 md:py-36 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Floating orbs - hidden on mobile */}
      <motion.div animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="hidden sm:block absolute top-1/4 -left-48 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[180px] pointer-events-none" />
      <motion.div animate={{
      y: [0, 30, 0],
      opacity: [0.2, 0.4, 0.2]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} className="hidden sm:block absolute bottom-1/4 -right-48 w-[450px] h-[450px] bg-accent/40 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="text-center mb-8 sm:mb-16 md:mb-20 px-2">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 200
        }} className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/25 text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm shadow-lg shadow-primary/5">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Investimento
          </motion.div>
          
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-6 leading-snug text-center">
            Seu espaço profissional
            <br />
            <span className="relative">
              <span className="text-primary">começa aqui.</span>
              <motion.span initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.6
            }} className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left" />
            </span>
          </h2>
          
          <p className="text-muted-foreground text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Escolha o plano que melhor se adapta ao seu momento e comece agora a
            transformar sua carreira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card border */}
              <div className={`absolute inset-0 rounded-[18px] sm:rounded-[26px] bg-gradient-to-b ${plan.borderGradient} p-[1px]`}>
                <div className="absolute inset-[1px] rounded-[17px] sm:rounded-[25px] bg-card" />
              </div>
              
              <div className={`relative h-full bg-card rounded-[16px] sm:rounded-[24px] ${plan.popular ? "shadow-lg shadow-primary/20" : "shadow-md"} p-5 sm:p-8 md:p-10 overflow-hidden`}>
                
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br ${plan.gradient} rounded-full blur-2xl sm:blur-3xl opacity-70`} />
                <div className={`absolute bottom-0 left-0 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-tr ${plan.gradient} rounded-full blur-xl sm:blur-2xl opacity-50`} />
                
                {plan.popular && <motion.div initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6,
              type: "spring"
            }} className="absolute -top-0 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-primary via-[#009390] to-[#006d6a] text-primary-foreground text-[10px] sm:text-xs font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-b-xl sm:rounded-b-2xl shadow-xl shadow-primary/30">
                      <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Mais popular
                    </span>
                  </motion.div>}

                <div className="relative z-10">
                  {/* Plan header */}
                  <div className="mb-5 sm:mb-8 pt-2">
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-0.5 sm:mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-5 sm:mb-8">
                    <div className="flex items-start gap-0.5 sm:gap-1">
                      <span className="text-muted-foreground text-base sm:text-xl mt-1 sm:mt-2">R$</span>
                      <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm sm:text-lg mt-1 sm:mt-2">,{plan.cents}</span>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2">
                      {plan.period}
                    </p>
                    <p className="text-muted-foreground/70 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{plan.yearly}</p>
                    
                    {plan.savings && <motion.div initial={{
                  scale: 0.8,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.9,
                  type: "spring"
                }} className="mt-3 sm:mt-4">
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-primary font-bold text-xs sm:text-sm bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 shadow-inner">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                          {plan.savings}
                        </span>
                      </motion.div>}
                  </div>

                  {/* CTA Button */}
                  <Button className={`w-full mb-3 sm:mb-4 rounded-xl sm:rounded-2xl h-11 sm:h-14 text-sm sm:text-base font-bold group/btn transition-all duration-300 ${plan.popular ? "bg-gradient-to-r from-primary via-[#009390] to-[#006d6a] hover:from-primary/90 hover:via-[#009390]/90 hover:to-[#006d6a]/90 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40" : "bg-foreground hover:bg-foreground/90 shadow-lg"}`} size="lg" asChild>
                    <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                      Assinar agora
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>

                  {/* Saiba mais expandable section */}
                  <button
                    onClick={() => togglePlan(plan.name)}
                    className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 mb-3 sm:mb-4"
                  >
                    <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{isPlanExpanded(plan.name) ? "Ocultar detalhes" : "Ver detalhes"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isPlanExpanded(plan.name) ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isPlanExpanded(plan.name) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-4 sm:mb-6 border border-border/50">
                          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                            {plan.details.subtitle}
                          </p>
                          <ul className="space-y-2 sm:space-y-3">
                            {plan.details.highlights.map((highlight, idx) => {
                              const HighlightIcon = highlight.icon;
                              return (
                                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <HighlightIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                                  </div>
                                  <span className="text-xs sm:text-sm text-foreground/90">
                                    {highlight.text}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Benefits */}
                  <div className="border-t border-border/50 pt-5 sm:pt-8">
                    <h4 className="font-semibold text-foreground mb-3 sm:mb-5 text-xs sm:text-sm flex items-center gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                      </div>
                      Recursos inclusos
                    </h4>
                    <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
                  once: true
                }} className="space-y-2 sm:space-y-3">
                      {benefits.map(benefit => {
                    const IconComponent = benefit.icon;
                    return <motion.li key={benefit.text} variants={item} className="flex items-center gap-2 sm:gap-3 group/item">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:from-primary/25 group-hover/item:to-primary/10 group-hover/item:scale-110 transition-all duration-300">
                              <IconComponent className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground text-xs sm:text-sm group-hover/item:text-foreground transition-colors duration-300">
                              {benefit.text}
                            </span>
                          </motion.li>;
                  })}
                    </motion.ul>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${plan.popular ? "from-primary/60 via-primary to-primary/60" : "from-transparent via-border/80 to-transparent"}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.5
      }} className="flex flex-wrap justify-center gap-4 sm:gap-10 mt-10 sm:mt-20">
          {trustBadges.map((badge, index) => {
          const IconComponent = badge.icon;
          return <motion.div key={badge.text} initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6 + index * 0.1
          }} className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors duration-300 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </div>
                <span className="font-medium">{badge.text}</span>
              </motion.div>;
        })}
        </motion.div>
      </div>
    </section>;
}