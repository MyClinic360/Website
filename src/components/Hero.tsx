import { ArrowRight, Check, Users, Calendar, FileText, TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Hero() {
  return <section className="relative pt-24 pb-20 sm:py-28 lg:py-40 overflow-hidden bg-mesh">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 mb-6 lg:mb-8 bg-primary-foreground">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">Para fisioterapeutas pélvicos</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Solução completa para transformar
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>a rotina
              <br />
              <span className="text-primary">de trabalho </span>
              <br className="hidden sm:block" />
              <span className="text-primary">do Fisioterapeuta</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md mb-6 leading-relaxed">
              MyClinic360 foi criado para otimizar a gestão clínica com organização profissional e presença digital em um único sistema. Pensado exclusivamente para fisioterapeutas.
            </p>

            {/* Mobile Dashboard Preview */}
            <div className="lg:hidden mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{
            animationDelay: '200ms'
          }}>
              <div className="bg-card rounded-xl shadow-card border border-border/50 p-3 sm:p-4 relative overflow-hidden animate-float-mobile">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none" />

                {/* Mobile highlight - Novos leads */}
                <div className="relative z-10 mb-3">
                  <div className="bg-background/70 backdrop-blur rounded-xl border border-primary/10 shadow-soft px-3 py-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <Plus className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="leading-tight">
                      <p className="text-xs text-muted-foreground">Novos leads</p>
                      <p className="text-sm font-bold text-foreground">
                        <span className="text-primary">12</span> esta semana
                      </p>
                    </div>
                  </div>
                </div>

                {/* Browser dots header */}
                <div className="flex items-center gap-1.5 mb-3 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[10px] text-muted-foreground ml-2 font-medium">Dashboard</span>
                </div>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3 relative z-10">
                  <div className="bg-gradient-to-br from-accent to-accent/50 rounded-lg p-2 border border-primary/10 text-center">
                    <Users className="w-4 h-4 text-primary mx-auto mb-0.5" />
                    <p className="text-lg font-bold text-foreground leading-tight">127</p>
                    <p className="text-[10px] text-muted-foreground">Pacientes</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent to-accent/50 rounded-lg p-2 border border-primary/10 text-center">
                    <Calendar className="w-4 h-4 text-primary mx-auto mb-0.5" />
                    <p className="text-lg font-bold text-foreground leading-tight">8</p>
                    <p className="text-[10px] text-muted-foreground">Hoje</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent to-accent/50 rounded-lg p-2 border border-primary/10 text-center">
                    <TrendingUp className="w-4 h-4 text-primary mx-auto mb-0.5" />
                    <p className="text-lg font-bold text-primary leading-tight">+32%</p>
                    <p className="text-[10px] text-muted-foreground">Crescimento</p>
                  </div>
                </div>

                {/* Next Patient Mini */}
                <div className="bg-gradient-to-r from-accent to-accent/30 rounded-lg p-2.5 flex items-center justify-between relative z-10 border border-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-[10px] shadow-md">
                      MS
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-xs">Maria Santos</p>
                      <p className="text-[10px] text-muted-foreground">Próximo • 14:30</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] rounded-full font-semibold border border-primary/20">
                    30min
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button size="lg" className="group rounded-full px-6 sm:px-8 w-full sm:w-auto" asChild>
                <a href="https://appmyclinic360.com.br/login" target="_blank" rel="noopener noreferrer">
                  Começar agora
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Plataforma profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>

          {/* Right Dashboard Preview - Desktop */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            {/* Floating Card - Novos Leads */}
            <div className="absolute -top-4 right-0 z-20 bg-card rounded-2xl shadow-elevated border border-primary/20 p-4 animate-float-subtle">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Novos leads</p>
                  <p className="font-bold text-foreground text-lg">
                    <span className="text-primary">12</span> esta semana
                  </p>
                </div>
              </div>
            </div>

            {/* Main Dashboard */}
            <div className="bg-card rounded-3xl shadow-elevated border border-border/50 p-6 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
              
              {/* Browser Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-muted-foreground ml-2 font-medium">Dashboard MyClinic360</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-5 relative z-10">
                <div className="bg-gradient-to-br from-accent to-accent/50 rounded-2xl p-4 border border-primary/10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">127</p>
                  <p className="text-sm text-muted-foreground">Pacientes</p>
                </div>
                <div className="bg-gradient-to-br from-accent to-accent/50 rounded-2xl p-4 border border-primary/10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">8</p>
                  <p className="text-sm text-muted-foreground">Hoje</p>
                </div>
                <div className="bg-gradient-to-br from-accent to-accent/50 rounded-2xl p-4 border border-primary/10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">Avaliações</p>
                </div>
              </div>

              {/* Next Patient Card */}
              <div className="bg-gradient-to-r from-accent to-accent/30 rounded-2xl p-5 mb-5 flex items-center justify-between relative z-10 border border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                    MS
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Maria Santos</p>
                    <p className="text-sm text-muted-foreground">Próximo atendimento • 14:30</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-semibold border border-primary/20">
                  Em 30min
                </span>
              </div>

              {/* Growth Card */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/50 rounded-2xl p-5 flex items-center gap-4 relative z-10 border border-primary/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Crescimento mensal</p>
                  <p className="text-2xl font-bold text-primary">+32%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}