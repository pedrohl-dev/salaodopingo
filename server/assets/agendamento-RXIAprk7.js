import { P as reactExports, H as jsxRuntimeExports } from "./server-BFQdHGwN.js";
import { L as Link } from "./router-5oU2Rvhb.js";
import { c as createLucideIcon, C as ChevronRight, a as Clock, P as Phone, S as Scissors } from "./scissors-BJzQXvd-.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$3);
const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const WHATSAPP_NUMERO = "5511911223424";
const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const SERVICOS = [{
  nome: "Corte Clássico",
  preco: "R$ 45"
}, {
  nome: "Corte Pingo",
  preco: "R$ 50"
}, {
  nome: "Corte V",
  preco: "R$ 35"
}, {
  nome: "Combo Corte + Barba",
  preco: "R$ 65"
}, {
  nome: "Barba",
  preco: "R$ 45"
}, {
  nome: "Barba Terapia",
  preco: "R$ 50"
}, {
  nome: "Barba V",
  preco: "R$ 35"
}, {
  nome: "Depilação Nasal",
  preco: "R$ 10"
}, {
  nome: "Hidratação",
  preco: "R$ 20"
}, {
  nome: "Penteado",
  preco: "R$ 15"
}, {
  nome: "Progressiva",
  preco: "R$ 100"
}, {
  nome: "Sobrancelha",
  preco: "R$ 15"
}];
function isSameDay(d1, d2) {
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}
function formatarData(date) {
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const ano = date.getFullYear();
  return `${dia}/${mes}/${ano}`;
}
function maskPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, a, b, c) => {
      let out = "";
      if (a) out += `(${a}`;
      if (b) out += `) ${b}`;
      if (c) out += `-${c}`;
      return out;
    });
  }
  return digits.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (_, a, b, c) => {
    let out = "";
    if (a) out += `(${a}`;
    if (b) out += `) ${b}`;
    if (c) out += `-${c}`;
    return out;
  });
}
function AgendamentoPage() {
  const [currentMonth, setCurrentMonth] = reactExports.useState(/* @__PURE__ */ new Date());
  const [selectedDate, setSelectedDate] = reactExports.useState(null);
  const [selectedTime, setSelectedTime] = reactExports.useState(null);
  const [nome, setNome] = reactExports.useState("");
  const [telefone, setTelefone] = reactExports.useState("");
  const [servico, setServico] = reactExports.useState("");
  const [enviado, setEnviado] = reactExports.useState(false);
  const today = reactExports.useMemo(() => {
    const d = /* @__PURE__ */ new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const calendarDays = reactExports.useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({
        date: new Date(year, month, i - firstDayOfWeek + 1),
        day: 0,
        disabled: true
      });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dayOfWeek = date.getDay();
      const disabled = dayOfWeek === 0 || dayOfWeek === 1 || date < today;
      days.push({
        date,
        day: d,
        disabled
      });
    }
    while (days.length % 7 !== 0 || days.length < 42) {
      const last = days[days.length - 1];
      const nextDate = new Date(last.date);
      nextDate.setDate(last.date.getDate() + 1);
      days.push({
        date: nextDate,
        day: nextDate.getDate(),
        disabled: true
      });
    }
    return days;
  }, [currentMonth, today]);
  function generateSlots(startHour, startMinute, endHour, endMinute) {
    const slots = [];
    const cur = /* @__PURE__ */ new Date();
    cur.setHours(startHour, startMinute, 0, 0);
    const end = /* @__PURE__ */ new Date();
    end.setHours(endHour, endMinute, 0, 0);
    while (cur <= end) {
      const hh = String(cur.getHours()).padStart(2, "0");
      const mm = String(cur.getMinutes()).padStart(2, "0");
      slots.push(`${hh}:${mm}`);
      cur.setMinutes(cur.getMinutes() + 30);
    }
    return slots;
  }
  function getTimesForDate(date) {
    const dow = date.getDay();
    if (dow === 5) {
      return [...generateSlots(10, 0, 12, 0), ...generateSlots(13, 0, 20, 0)];
    }
    if (dow === 6) {
      return [...generateSlots(9, 0, 12, 0), ...generateSlots(13, 0, 18, 30)];
    }
    if (dow === 2 || dow === 3 || dow === 4) {
      return [...generateSlots(10, 0, 12, 0), ...generateSlots(13, 0, 18, 0)];
    }
    return generateSlots(9, 0, 18, 30);
  }
  const availableTimes = reactExports.useMemo(() => {
    if (!selectedDate) return [];
    const all = getTimesForDate(selectedDate);
    const now = /* @__PURE__ */ new Date();
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
  reactExports.useMemo(() => {
    if (selectedTime && !availableTimes.includes(selectedTime)) {
      setSelectedTime(null);
    }
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
    const dataStr = formatarData(selectedDate);
    const msg = `Olá! Gostaria de agendar um horário no Salão do Pingo.

Nome: ${nome.trim()}
Serviço: ${servico}
Data: ${dataStr}
Horário: ${selectedTime}

Aguardo confirmação, obrigado!`;
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setEnviado(true);
  };
  const isFormValid = selectedDate && selectedTime && nome.trim().length >= 3 && telefone.replace(/\D/g, "").length >= 10 && servico;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }, className: "border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 py-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { style: {
        position: "absolute",
        left: "25px"
      }, to: "/", className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
        "Voltar"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl md:text-2xl font-bold", style: {
        fontFamily: "'Playfair Display', serif"
      }, children: [
        "Agendar ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "horário" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto max-w-4xl px-4 py-10", children: enviado ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-8 h-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold", style: {
        fontFamily: "'Playfair Display', serif"
      }, children: [
        "Redirecionando para o ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md mx-auto", children: "Confirme o envio da mensagem no WhatsApp para finalizar seu agendamento. O Salão do Pingo responderá em breve!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
        "Voltar para home"
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: goPrevMonth, className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", "aria-label": "Mês anterior", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold", style: {
              fontFamily: "'Playfair Display', serif"
            }, children: [
              MESES[currentMonth.getMonth()],
              " ",
              currentMonth.getFullYear()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: goNextMonth, className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", "aria-label": "Próximo mês", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 text-center mb-2", children: DIAS_SEMANA.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-muted-foreground py-2", children: d }, d)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: calendarDays.map((cell, idx) => {
            const isSelected = selectedDate && cell.day !== 0 && isSameDay(cell.date, selectedDate);
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: cell.disabled, onClick: () => {
              if (!cell.disabled) {
                setSelectedDate(cell.date);
                setSelectedTime(null);
              }
            }, className: `
                          aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                          ${cell.disabled ? "text-muted-foreground/30 cursor-default" : isSelected ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-foreground hover:bg-secondary hover:text-primary"}
                        `, children: cell.day !== 0 ? cell.day : "" }, idx);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground text-center", children: "Aberto de terça a sábado" })
        ] }),
        selectedDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", style: {
            fontFamily: "'Playfair Display', serif"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }),
            "Horários disponíveis",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-muted-foreground", children: [
              "(",
              formatarData(selectedDate),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-2", children: availableTimes.length > 0 ? availableTimes.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedTime(h), className: `
                            rounded-lg border px-3 py-2.5 text-sm font-medium transition-all
                            ${selectedTime === h ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}
                          `, children: h }, h)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-sm text-muted-foreground text-center py-4", children: "Nenhum horário disponível para esta data." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "col-span-full text-sm text-muted-foreground text-center py-4", children: "Dependendo da demanda de clientes, o horário pode ser ajustado." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-2", style: {
            fontFamily: "'Playfair Display', serif"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-primary" }),
            "Seus dados"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Nome completo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: nome, onChange: (e) => setNome(e.target.value), placeholder: "Seu nome", className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Telefone / WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: telefone, onChange: (e) => setTelefone(maskPhone(e.target.value)), placeholder: "(11) 99999-9999", className: "w-full rounded-lg border border-border bg-background pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Serviço" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: servico, onChange: (e) => setServico(e.target.value), className: "w-full rounded-lg border border-border bg-background pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer", style: {
                  backgroundImage: "none"
                }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione um serviço" }),
                  SERVICOS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: s.nome, children: [
                    s.nome,
                    " — ",
                    s.preco
                  ] }, s.nome))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground rotate-90" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", style: {
            fontFamily: "'Playfair Display', serif"
          }, children: "Resumo do agendamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Data:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: selectedDate ? formatarData(selectedDate) : "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Horário:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: selectedTime ?? "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Serviço:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: servico || "—" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleConfirm, disabled: !isFormValid, className: `
                    mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold transition-all
                    ${isFormValid ? "bg-green-600 text-white hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5" : "bg-muted text-muted-foreground cursor-not-allowed"}
                  `, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            "Enviar agendamento pelo WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-center text-muted-foreground", children: "Você será redirecionado para o WhatsApp com a mensagem pronta." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AgendamentoPage as component
};
