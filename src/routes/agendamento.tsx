import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";

import { ArrowLeft, ChevronLeft, ChevronRight, Clock, Calendar, User, Phone, Scissors, Check, MapPin } from "lucide-react";

export const Route = createFileRoute("/agendamento")({
  component: AgendamentoPage,
  head: () => ({
    meta: [
      { title: "Agendamento — Salão do Pingo" },
      { name: "description", content: "Agende seu horário no Salão do Pingo. Escolha data, horário e serviço." },
    ],
  }),
});

export default function AgendamentoPage() {
  const [endereco, setEndereco] = useState(
    "Rua Osvaldo de Lorenzi, 372 - Jardim Nova Jordanésia, Cajamar - SP"
  );

const WHATSAPP_JORDANESIA = "5511972968723";
const WHATSAPP_POLVILHO = "5511974475555";

const LOCAL_SALAO = [
  "Salão do Pingo, Jordanésia",
  "Salão do Pingo, Polvilho"
];

const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const HORARIOS = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "13:00", "13:30", "14:00",
  "14:30", "15:00","15:30", "16:00",
  "16:30", "17:00", "17:30", "18:00", "18:30"
];

function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
}

function formatarData(date: Date) {
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const ano = date.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    // (XX) XXXX-XXXX
    return digits
      .replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, a, b, c) => {
        let out = "";
        if (a) out += `(${a}`;
        if (b) out += `) ${b}`;
        if (c) out += `-${c}`;
        return out;
      });
  }
  // (XX) XXXXX-XXXX
  return digits
    .replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (_, a, b, c) => {
      let out = "";
      if (a) out += `(${a}`;
      if (b) out += `) ${b}`;
      if (c) out += `-${c}`;
      return out;
    });
}


  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [localSalao, setLocalSalao] = useState("");
  const [localSelecionado, setLocalSelecionado] = useState(
  "Salão do Pingo, Jordanésia"
);
  const [popupAberto, setPopupAberto] = useState(true);

  const servicosDisponiveis =
  (localSalao || localSelecionado) === "Salão do Pingo, Jordanésia"
    ? [
        { nome: "Corte Clássico", preco: "R$ 45" },
        { nome: "Corte Pingo", preco: "R$ 50" },
        { nome: "Corte V", preco: "R$ 35" },
        { nome: "Barba", preco: "R$ 45" },
        { nome: "Barba Terapia", preco: "R$ 50" },
        { nome: "Barba V", preco: "R$ 35" },
        { nome: "Bigode", preco: "R$ 15" },
        { nome: "Depilação Nasal", preco: "R$ 15" },
        { nome: "Hidratação", preco: "R$ 20" },
        { nome: "Penteado", preco: "R$ 15" },
        { nome: "Pezinho", preco: "R$ 15" },
        { nome: "Progressiva", preco: "R$ 100" },
        { nome: "Sombrancelha", preco: "R$ 45" },
      ]
    : [
        { nome: "Corte", preco: "R$ 50" },
        { nome: "Barba Terapia", preco: "R$ 50" },
        { nome: "Hidratação", preco: "R$ 20" },
        { nome: "Sobrancelha", preco: "R$ 15" },
      ];

  const [enviado, setEnviado] = useState(false);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const days: { date: Date; day: number; disabled: boolean }[] = [];

    // Empty cells before the 1st
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ date: new Date(year, month, i - firstDayOfWeek + 1), day: 0, disabled: true });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dayOfWeek = date.getDay();
      // Disabled: Sunday (0), Monday (1), or past dates
      const disabled = dayOfWeek === 0 || dayOfWeek === 1 || date < today;
      days.push({ date, day: d, disabled });
    }

    // Fill remaining cells to complete the grid (up to 6 rows = 42 cells)
    while (days.length % 7 !== 0 || days.length < 42) {
      const last = days[days.length - 1];
      const nextDate = new Date(last.date);
      nextDate.setDate(last.date.getDate() + 1);
      days.push({ date: nextDate, day: nextDate.getDate(), disabled: true });
    }

    return days;
  }, [currentMonth, today]);

  // Gera slots de 30 minutos entre horários (inclusive)
  function generateSlots(startHour: number, startMinute: number, endHour: number, endMinute: number) {
    const slots: string[] = [];
    const cur = new Date();
    cur.setHours(startHour, startMinute, 0, 0);
    const end = new Date();
    end.setHours(endHour, endMinute, 0, 0);
    while (cur <= end) {
      const hh = String(cur.getHours()).padStart(2, "0");
      const mm = String(cur.getMinutes()).padStart(2, "0");
      slots.push(`${hh}:${mm}`);
      cur.setMinutes(cur.getMinutes() + 30);
    }
    return slots;
  }

  // Retorna horários disponíveis conforme o dia da semana
  function getTimesForDate(date: Date) {
    const dow = date.getDay(); // 0=Dom,1=Seg,...5=Sex,6=Sáb
    // Sexta: 10:00-12:00 e 13:00-20:00
    if (dow === 5) {
      return [
        ...generateSlots(10, 0, 12, 0),
        ...generateSlots(13, 0, 20, 0),
      ];
    }
    // Sábado: 09:00-12:00 e 13:00-18:30
    if (dow === 6) {
      return [
        ...generateSlots(9, 0, 12, 0),
        ...generateSlots(13, 0, 18, 30),
      ];
    }
    // Terça/Quarta/Quinta: começar às 10:00 (remover 09:00 e 09:30)
    if (dow === 2 || dow === 3 || dow === 4) {
      return [
        ...generateSlots(10, 0, 12, 0),
        ...generateSlots(13, 0, 18, 0),
        ];
      }
    // Dias restantes (por segurança): 09:00-18:30
    return generateSlots(9, 0, 18, 30);
  }

  // Horários disponíveis filtrados: se a data selecionada for hoje,
  // não mostramos horários que já passaram.
  const availableTimes = useMemo(() => {
    if (!selectedDate) return [];
    const all = getTimesForDate(selectedDate);
    const now = new Date();
    if (isSameDay(selectedDate, now)) {
      return all.filter((h) => {
        const [hh, mm] = h.split(":").map(Number);
        const slot = new Date(selectedDate);
        slot.setHours(hh, mm, 0, 0);
        return slot > now;
      });
    }
    return all;
  }, [selectedDate]);

  // Limpa `selectedTime` se ficar indisponível ao mudar a data
  useMemo(() => {
    if (selectedTime && !availableTimes.includes(selectedTime)) {
      setSelectedTime(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableTimes, selectedTime]);

  const goPrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime || !nome.trim() || !telefone.replace(/\D/g, "").trim() || !servico) {
      return;
    }

    const whatsappNumero =
  localSalao === "Salão do Pingo, Jordanésia"
    ? WHATSAPP_JORDANESIA
    : WHATSAPP_POLVILHO;

    const dataStr = formatarData(selectedDate);
    const msg = `Olá! Gostaria de agendar um horário no Salão do Pingo.\n\nNome: ${nome.trim()}\nServiço: ${servico}\nData: ${dataStr}\nHorário: ${selectedTime}\n\nAguardo confirmação, obrigado!`;

    const url = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setEnviado(true);
  };

  const isFormValid =
    selectedDate &&
    selectedTime &&
    nome.trim().length >= 3 &&
    telefone.replace(/\D/g, "").length >= 10 &&
    servico;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center gap-4">
          <Link style={{ position: 'absolute', left: '25px'}}
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Agendar <span className="text-primary">horário</span>
          </h1>
        </div>
      </header>

      {/* Pop-up Localização Salão */ }
      {popupAberto && (
  <div
    style={{
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 998,
    }}
  ></div>
)}   {/*Fundo do Pop-Up*/ }

      {popupAberto && (
  <div
    style={{
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      left: '50%',
      top: '50%',
      width: '300px',
      height: '500px',
      zIndex: 999,
    }}
    className="rounded-xl border border-border bg-card p-6"
  >
        <h2 className="text-lg font-semibold" >Selecione um Local</h2>
           <select
        value={localSelecionado}
        onChange={(e) => {
          const valor = e.target.value;

          setLocalSelecionado(valor);
          setServico("");

          if (valor === "Salão do Pingo, Jordanésia") {
            setEndereco(
              "Rua Osvaldo de Lorenzi, 372 - Jardim Nova Jordanésia, Cajamar - SP"
            );
          } else {
            setEndereco(
              "Av. das Acucenas - Guaturinho, Cajamar - SP"
            );
          }
        }}
        className="w-full rounded-lg border border-border bg-background pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
      >
  <option>Salão do Pingo, Jordanésia</option>
  <option>Salão do Pingo, Polvilho</option>
</select>

<p className="text-sm text-muted-foreground text-center">
  {endereco}
</p>

        <MapPin style={{
          position: 'absolute',
          left: '40px',
          top: '36%',
        }} className="w-4 h-4 text-primary" />
                <button
                  onClick={() => {
                    setLocalSalao(localSelecionado);
                    setPopupAberto(false);
                  }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            ><Check className="w-4 h-4" /> Confirmar</button>
      </div> )} {/* Pop-up */}

      <main className="mx-auto max-w-4xl px-4 py-10">
        {enviado ? (
          <div className="text-center py-20">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="w-8 h-8" />
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Redirecionando para o <span className="text-primary">WhatsApp</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Confirme o envio da mensagem no WhatsApp para finalizar seu agendamento. 
              O Salão do Pingo responderá em breve!
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Coluna esquerda: Calendário e Horários */}
            <div className="space-y-8">
              {/* Calendário */}
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between mb-5">
                  <button
                    onClick={goPrevMonth}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label="Mês anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {MESES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={goNextMonth}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label="Próximo mês"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {DIAS_SEMANA.map((d) => (
                    <div key={d} className="text-xs font-medium text-muted-foreground py-2">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((cell, idx) => {
                    const isSelected = selectedDate && cell.day !== 0 && isSameDay(cell.date, selectedDate);
                    return (
                      <button
                        key={idx}
                        disabled={cell.disabled}
                        onClick={() => {
                          if (!cell.disabled) {
                            setSelectedDate(cell.date);
                            setSelectedTime(null);
                          }
                        }}
                        className={`
                          aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                          ${cell.disabled
                            ? "text-muted-foreground/30 cursor-default"
                            : isSelected
                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                            : "text-foreground hover:bg-secondary hover:text-primary"
                          }
                        `}
                      >
                        {cell.day !== 0 ? cell.day : ""}
                      </button>
                    );
                  })}
                </div>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Aberto de terça a sábado
                </p>
              </div>

              {/* Horários */}
              {selectedDate && (
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <Clock className="w-5 h-5 text-primary" />
                    Horários disponíveis
                    <span className="text-sm font-normal text-muted-foreground">
                      ({formatarData(selectedDate)})
                    </span>
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {availableTimes.length > 0 ? (
                      availableTimes.map((h) => (
                        <button
                          key={h}
                          onClick={() => setSelectedTime(h)}
                          className={`
                            rounded-lg border px-3 py-2.5 text-sm font-medium transition-all
                            ${selectedTime === h
                              ? "border-primary bg-primary/10 text-primary shadow-sm"
                              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                            }
                          `}
                        >
                          {h}
                        </button>
                        
                      ))
                    ) : (
                      <div className="col-span-full text-sm text-muted-foreground text-center py-4">
                        Nenhum horário disponível para esta data.
                      </div>
                    )}
                  </div>
                  <h3 className="col-span-full text-sm text-muted-foreground text-center py-4">
                    Dependendo da demanda de clientes, o horário pode ser ajustado.
                  </h3>
                </div>
              )}
              
            </div>
            

            {/* Coluna direita: Formulário */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3
                  className="text-xl font-bold mb-6 flex items-center gap-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <User className="w-5 h-5 text-primary" />
                  Seus dados
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone / WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(maskPhone(e.target.value))}
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-lg border border-border bg-background pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Serviço
                    </label>
                    <div className="relative">
                      <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        value={servico}
                        onChange={(e) => setServico(e.target.value)}
                        className="w-full rounded-lg border border-border bg-background pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: "none" }}
                      >
                        <option value="">Selecione um serviço</option>
                        {servicosDisponiveis.map((s) => (
                          <option key={s.nome} value={s.nome}>
                            {s.nome} — {s.preco}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronRight className="w-4 h-4 text-muted-foreground rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumo e confirmação */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Resumo do agendamento
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span className="font-medium">{selectedDate ? formatarData(selectedDate) : "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Horário:</span>
                    <span className="font-medium">{selectedTime ?? "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Serviço:</span>
                    <span className="font-medium">{servico || "—"}</span>
                  </div>
                </div>

                <button
                  onClick={handleConfirm}
                  disabled={!isFormValid}
                  className={`
                    mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold transition-all
                    ${isFormValid
                      ? "bg-green-600 text-white hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                    }
                  `}
                >
                  <Phone className="w-5 h-5" />
                  Enviar agendamento pelo WhatsApp
                </button>

                <p className="mt-3 text-xs text-center text-muted-foreground">
                  Você será redirecionado para o WhatsApp com a mensagem pronta.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
