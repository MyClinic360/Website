import { motion } from "framer-motion";
import { ClipboardList, Send, FileCheck, FolderOpen, Clock, Share2, Sparkles, CheckCircle2, Beaker } from "lucide-react";
const questionnaires = [{
  title: "Avaliação de Incontinência Urinária",
  questions: 4,
  time: "2-4 min",
  color: "from-primary/20 to-primary/10"
}, {
  title: "Índice Internacional de Disfunção Erétil - IIEF-5",
  questions: 5,
  time: "2-4 min",
  color: "from-accent to-accent/50"
}, {
  title: "Escala de Desconforto Sexual Feminino (DSF)",
  questions: 13,
  time: "2-4 min",
  color: "from-primary/20 to-primary/10"
}, {
  title: "Avaliação rápida da saúde sexual masculina",
  questions: 10,
  time: "2-4 min",
  color: "from-accent to-accent/50"
}];
const features = [{
  icon: Send,
  title: "Fáceis de enviar",
  description: "Envie para pacientes com um clique"
}, {
  icon: Beaker,
  title: "Validados cientificamente",
  description: "Protocolos com base em evidências"
}, {
  icon: FolderOpen,
  title: "Organizados automaticamente",
  description: "Resultados direto no prontuário"
}];
export function QuestionnairesSection() {
  return <section id="questionarios" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-40 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-52 sm:w-80 h-52 sm:h-80 bg-accent/10 rounded-full blur-3xl" />
      
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
            <ClipboardList className="w-3 sm:w-4 h-3 sm:h-4" />
            Avaliações digitais
          </motion.span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug mb-3 sm:mb-4 text-center">
            Questionários Online para
            <br />
            <span className="text-primary">Avaliação e Anamnese</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Avaliações clínicas digitais com base científica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Features */}
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
        }} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Utilize questionários:
              </h3>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -30
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

            {/* Use case */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} className="p-5 rounded-2xl bg-accent/30 border border-border/50">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-foreground">Ideal para:</span> avaliações iniciais, acompanhamento de evolução e padronização do atendimento.
              </p>
            </motion.div>

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
                    Mais <span className="text-primary font-medium">qualidade técnica</span>, padronização clínica e respaldo profissional.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Questionnaires Mockup */}
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
        }} className="relative order-first lg:order-last">
            {/* Browser Frame */}
            <div className="relative mx-auto max-w-sm sm:max-w-none">
              {/* Glow effect */}
              <motion.div animate={{
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.5, 0.3]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl" />
              
              {/* Browser window */}
              <div className="relative bg-card rounded-xl sm:rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                {/* Browser header */}
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-accent/50 border-b border-border/50">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-background/50 rounded-md sm:rounded-lg px-2 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs text-muted-foreground truncate">
                    myclinic360.com.br
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 bg-background">
                  {/* Title */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.3
                }} className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2">Questionários de Saúde</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Selecione o questionário que deseja responder.</p>
                  </motion.div>

                  {/* Questionnaire Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {questionnaires.map((q, index) => <motion.div key={index} initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.4 + index * 0.1
                  }} whileHover={{
                    scale: 1.02,
                    y: -2
                  }} className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        {/* Header */}
                        <div className="flex items-center sm:items-start justify-between gap-2 sm:mb-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${q.color} flex items-center justify-center flex-shrink-0`}>
                            <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <div className="flex-1 sm:hidden">
                            <h4 className="font-semibold text-foreground text-xs leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                              {q.title}
                            </h4>
                          </div>
                          <motion.div whileHover={{
                        scale: 1.1
                      }} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors flex-shrink-0">
                            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </motion.div>
                        </div>

                        {/* Title - Desktop only */}
                        <h4 className="hidden sm:block font-semibold text-foreground text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {q.title}
                        </h4>

                        {/* Meta */}
                        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mt-2 sm:mt-0">
                          <span className="flex items-center gap-1">
                            <FileCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {q.questions} perguntas
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {q.time}
                          </span>
                        </div>
                      </motion.div>)}
                  </div>

                  {/* Status indicator */}
                  <motion.div initial={{
                  opacity: 0
                }} whileInView={{
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.8
                }} className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                    Dados confidenciais e protegidos
                  </motion.div>
                </div>
              </div>

              {/* Floating elements - hidden on mobile */}
              <motion.div animate={{
              y: [0, -8, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="hidden sm:block absolute -top-4 -right-4 bg-card rounded-2xl p-3 shadow-xl border border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-foreground block">Validado</span>
                    <span className="text-[10px] text-muted-foreground">Cientificamente</span>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{
              y: [0, 8, 0]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }} className="hidden sm:block absolute -bottom-4 -left-4 bg-card rounded-2xl p-3 shadow-xl border border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-foreground block">+234</span>
                    <span className="text-[10px] text-muted-foreground">enviados este mês</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}