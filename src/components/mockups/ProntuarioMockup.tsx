import {
  Home,
  Users,
  UserPlus,
  CreditCard,
  Calendar,
  CalendarX,
  Activity,
  MessageSquare,
  ClipboardList,
  Heart,
  Pill,
  Ruler,
  Scale,
  Droplet,
  Plus,
} from "lucide-react";

/**
 * Mockup ilustrativo do prontuário MyClinic360.
 * Renderizado em HTML puro para garantir nitidez e fidelidade visual.
 */
export const ProntuarioMockup = () => {
  return (
    <div className="w-full h-full flex bg-[#F8FBFB] text-[8px] sm:text-[10px] font-sans select-none">
      {/* Sidebar */}
      <aside className="w-[22%] bg-white border-r border-border/40 py-3 px-2 flex flex-col gap-1">
        <div className="px-2 mb-2">
          <div className="text-primary font-bold text-[10px] sm:text-xs">
            MyClinic<span className="text-secondary">360</span>
          </div>
        </div>

        {[
          { icon: Home, label: "Home" },
          { icon: Users, label: "Pacientes", active: true, badge: "571" },
          { icon: UserPlus, label: "Leads" },
          { icon: CreditCard, label: "Meu Plano" },
          { icon: Calendar, label: "Agenda" },
          { icon: CalendarX, label: "Bloqueios" },
          { icon: Activity, label: "Protocolos" },
          { icon: MessageSquare, label: "Mensagens" },
          { icon: ClipboardList, label: "Questionários" },
        ].map(({ icon: Icon, label, active, badge }) => (
          <div
            key={label}
            className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md ${
              active
                ? "bg-primary/10 text-primary font-semibold"
                : "text-muted-foreground"
            }`}
          >
            <Icon className="w-2.5 h-2.5 shrink-0" strokeWidth={2} />
            <span className="truncate flex-1">{label}</span>
            {badge && (
              <span className="text-[7px] px-1 py-0.5 rounded bg-primary/15 text-primary">
                {badge}
              </span>
            )}
          </div>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1 p-3 overflow-hidden">
        {/* Breadcrumb + Title */}
        <div className="text-muted-foreground mb-1">
          Pacientes <span className="mx-1">›</span> Prontuário
        </div>
        <h2 className="text-secondary font-bold text-[12px] sm:text-base mb-2">
          Prontuário do Paciente
        </h2>

        {/* Action buttons */}
        <div className="flex gap-1 mb-2 flex-wrap">
          {["Agendar", "Questionário", "Avaliação", "Editar"].map((b) => (
            <div
              key={b}
              className="px-1.5 py-1 rounded border border-primary/40 text-primary text-[7px]"
            >
              {b}
            </div>
          ))}
          <div className="px-1.5 py-1 rounded bg-primary text-primary-foreground text-[7px] font-semibold">
            + Nova Consulta
          </div>
        </div>

        {/* Patient card */}
        <div className="bg-white rounded-lg border border-border/40 p-2 mb-2 flex items-center gap-2 shadow-sm">
          <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-[9px] shrink-0">
            PX
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-secondary truncate">
              Paciente Exemplo
            </div>
            <div className="text-muted-foreground truncate">
              38 anos • paciente@email.com
            </div>
          </div>
          <div className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[7px] font-semibold">
            Ativo
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-secondary rounded-md px-1 py-1 mb-2 flex gap-1 overflow-hidden">
          {["Visão Geral", "Histórico", "Questionários", "Documentos"].map(
            (t, i) => (
              <div
                key={t}
                className={`px-1.5 py-1 rounded text-[7px] ${
                  i === 0
                    ? "bg-white text-secondary font-semibold"
                    : "text-white/70"
                }`}
              >
                {t}
              </div>
            )
          )}
        </div>

        {/* Anthropometric card */}
        <div className="bg-white rounded-lg border border-border/40 p-2 shadow-sm">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
              <Activity className="w-2.5 h-2.5 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="font-semibold text-secondary">
                Dados Antropométricos
              </div>
              <div className="text-muted-foreground text-[7px]">
                Medidas corporais
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {[
              { icon: Scale, label: "PESO", value: "80.0", unit: "kg" },
              { icon: Ruler, label: "ALTURA", value: "160", unit: "cm" },
              { icon: Activity, label: "IMC", value: "31.2", unit: "" },
              { icon: Droplet, label: "TIPO", value: "A-", unit: "" },
            ].map(({ icon: Icon, label, value, unit }) => (
              <div
                key={label}
                className="rounded border border-border/40 p-1.5 bg-background/50"
              >
                <div className="flex items-center gap-1 text-muted-foreground text-[6px] mb-0.5">
                  <Icon className="w-2 h-2" strokeWidth={2} />
                  {label}
                </div>
                <div className="text-secondary font-bold text-[10px]">
                  {value}
                  <span className="text-[6px] font-normal ml-0.5 text-muted-foreground">
                    {unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[
            { icon: Heart, label: "Condições de Saúde" },
            { icon: Pill, label: "Medicamentos Atuais" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white rounded-lg border border-border/40 p-2 flex items-center gap-1.5 shadow-sm"
            >
              <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-2.5 h-2.5 text-primary" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-secondary truncate">
                  {label}
                </div>
              </div>
              <div className="px-1.5 py-0.5 rounded border border-primary/40 text-primary text-[7px] flex items-center gap-0.5">
                <Plus className="w-2 h-2" />
                Add
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
