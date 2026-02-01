import { motion } from "framer-motion";
import { BadgeCheck, Globe, Instagram, Linkedin, MapPin, MessageCircle, Phone, Sparkles, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import healthcareProfessional from "@/assets/healthcare-professional.jpg";
const features = [{
  icon: Globe,
  title: "Página pública profissional",
  description: "Seu perfil acessível para qualquer paciente"
}, {
  icon: MessageCircle,
  title: "WhatsApp inteligente",
  description: "Contato direto com um clique"
}, {
  icon: Users,
  title: "Redes sociais integradas",
  description: "Conecte Instagram, LinkedIn e mais"
}, {
  icon: Shield,
  title: "Selo verificado MyClinic360",
  description: "Credibilidade e confiança para pacientes"
}];
export function ProfileSection() {
  return <section id="perfil-publico" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-accent/30 to-background">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-52 sm:w-80 h-52 sm:h-80 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-10 sm:mb-16">
          <motion.span initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />
            Destaque-se no mercado
          </motion.span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
            Perfil Profissional Público com{" "}
            <span className="text-primary">Selo Verificado</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Construa autoridade, confiança e presença digital profissional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Profile Mockup */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="relative order-2 lg:order-1">
            {/* Phone Frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow effect */}
              <motion.div animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-[3rem] blur-2xl" />
              
              {/* Phone body */}
              <div className="relative bg-card rounded-[2.5rem] p-3 shadow-2xl border border-border/50">
                {/* Screen */}
                <div className="bg-background rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-accent/50">
                    <span className="text-xs text-muted-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6 text-center">
                    {/* Avatar with verified badge */}
                    <motion.div initial={{
                    scale: 0.8,
                    opacity: 0
                  }} whileInView={{
                    scale: 1,
                    opacity: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.3,
                    duration: 0.5
                  }} className="relative inline-block mb-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <img src={healthcareProfessional} alt="Profissional verificado" className="w-full h-full object-cover" />
                      </div>
                      {/* Verified badge */}
                      <motion.div initial={{
                      scale: 0
                    }} whileInView={{
                      scale: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.6,
                      type: "spring",
                      stiffness: 200
                    }} className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background">
                        <BadgeCheck className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                    </motion.div>

                    <motion.div initial={{
                    opacity: 0,
                    y: 10
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.4
                  }}>
                      <h3 className="text-lg font-bold text-foreground mb-1">Dra. Dyely Campos</h3>
                      <p className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Fortaleza, Ceará
                      </p>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div initial={{
                    opacity: 0,
                    y: 10
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.5
                  }} className="flex justify-center gap-3 my-4">
                      {[Globe, Instagram, Linkedin].map((Icon, i) => <motion.div key={i} whileHover={{
                      scale: 1.1
                    }} className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                          <Icon className="w-4 h-4" />
                        </motion.div>)}
                    </motion.div>

                    {/* Bio */}
                    <motion.p initial={{
                    opacity: 0
                  }} whileInView={{
                    opacity: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.6
                  }} className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      Fisioterapeuta pélvica com foco no cuidado integral da saúde íntima e funcional.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div initial={{
                    opacity: 0,
                    y: 10
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.7
                  }} className="space-y-3">
                      <Button className="w-full rounded-xl gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white">
                        <MessageCircle className="w-4 h-4" />
                        Falar no Whatsapp
                      </Button>
                      <Button variant="outline" className="w-full rounded-xl gap-2 border-primary text-primary hover:bg-primary/10">
                        <Phone className="w-4 h-4" />
                        Agendar consulta
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -top-4 -left-4 bg-card rounded-2xl p-3 shadow-xl border border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Verificado</span>
                </div>
              </motion.div>

              <motion.div animate={{
              y: [0, 10, 0]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }} className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-3 shadow-xl border border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-foreground block">+47 contatos</span>
                    <span className="text-[10px] text-muted-foreground">este mês</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Cada profissional pode ter:
              </h3>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} whileHover={{
              x: 10
            }} className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>)}
            </div>

            {/* Benefit highlight */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5
          }} className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/20 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Benefício direto</h4>
                  <p className="text-muted-foreground">
                    Mais confiança para o paciente <span className="text-primary font-medium">antes mesmo do primeiro contato</span>. Um diferencial importante para transmitir credibilidade, profissionalismo e reconhecimento no mercado.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}