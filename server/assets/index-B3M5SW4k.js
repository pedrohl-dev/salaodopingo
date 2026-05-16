import { P as reactExports, H as jsxRuntimeExports } from "./server-BFQdHGwN.js";
import { L as Link } from "./router-5oU2Rvhb.js";
import { c as createLucideIcon, a as Clock, C as ChevronRight, S as Scissors, P as Phone } from "./scissors-BJzQXvd-.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const heroImg = "/assets/hero-BZTgkuWw.jpg";
const barbaImg = "/assets/barba-0TMauzrK.jpg";
const ferramentasImg = "/assets/ferramentas-C8NMnOMQ.jpg";
const salaoDoPingoImg = "/assets/salaodopingo-BugLhkqA.png";
const salaoDoPingoBejeImg = "/assets/salaodopingobeje-prkdtv80.jpg";
const servicos = [{
  nome: "Corte Clássico",
  preco: "R$ 45",
  desc: "Corte tradicional com acabamento preciso e estilo atemporal.",
  icone: Scissors
}, {
  nome: "Barba",
  preco: "R$ 45",
  desc: "Modelagem, hidratação e acabamento com toalha quente.",
  icone: Star
}, {
  nome: "Combo Corte + Barba",
  preco: "R$ 65",
  desc: "O pacote completo para quem quer sair renovado.",
  icone: ChevronRight
}, {
  nome: "Sobrancelha",
  preco: "R$ 15",
  desc: "Design e limpeza para um olhar mais harmonioso.",
  icone: Star
}];
function Index() {
  const [menuAberto, setMenuAberto] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-2xl font-bold tracking-wide", style: {
          fontFamily: "'Playfair Display', serif"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { style: {
          width: "80px",
          height: "80px"
        }, src: salaoDoPingoImg, alt: "Salão do Pingo", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors", children: "Serviços" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre", className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors", children: "Sobre" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors", children: "Contato" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agendamento", className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            "Agendar"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-foreground p-2", onClick: () => setMenuAberto(!menuAberto), "aria-label": "Menu", children: menuAberto ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" }) })
      ] }),
      menuAberto && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden bg-background/98 backdrop-blur-md border-t border-border px-4 py-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", onClick: () => setMenuAberto(false), className: "text-base font-medium text-muted-foreground hover:text-primary transition-colors", children: "Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre", onClick: () => setMenuAberto(false), className: "text-base font-medium text-muted-foreground hover:text-primary transition-colors", children: "Sobre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", onClick: () => setMenuAberto(false), className: "text-base font-medium text-muted-foreground hover:text-primary transition-colors", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agendamento", onClick: () => setMenuAberto(false), className: "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }),
          "Agendar horário"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Barbearia Salão do Pingo", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-4 text-center pt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-tight tracking-tight", style: {
          fontFamily: "'Playfair Display', serif"
        }, children: [
          "Estilo e tradição ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "em cada corte" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "No Salão do Pingo você encontra atendimento de qualidade, ambiente acolhedor e o cuidado que seu visual merece." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agendamento", className: "inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }),
            "Agendar agora"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#servicos", className: "inline-flex items-center gap-2 rounded-md border border-primary/30 bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-primary transition-all hover:bg-primary/10", children: [
            "Ver serviços",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "servicos", className: "py-24 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold", style: {
          fontFamily: "'Playfair Display', serif"
        }, children: [
          "Nossos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Serviços" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Oferecemos os melhores serviços de cuidado masculino com profissionais experientes e produtos de qualidade." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: servicos.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icone, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", style: {
          fontFamily: "'Playfair Display', serif"
        }, children: s.nome }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-2xl font-bold text-primary", children: s.preco })
      ] }, s.nome)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "py-24 px-4 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold", style: {
          fontFamily: "'Playfair Display', serif"
        }, children: [
          "Tradição que você ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "confia" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "O Salão do Pingo é mais do que uma barbearia — é um espaço onde amizade e cuidado andam juntos. Com anos de experiência, nossa equipe domina as técnicas clássicas e modernas para entregar sempre o melhor resultado." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Venha viver a experiência de um verdadeiro salão , com atendimento personalizado e aquele bate-papo que só um barbeiro de confiança proporciona." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-primary", children: "15+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "anos de experiência" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-primary", children: "5000+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "clientes atendidos" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: barbaImg, alt: "Corte de barba", className: "rounded-xl object-cover w-full h-64", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ferramentasImg, alt: "Ferramentas de barbearia", className: "rounded-xl object-cover w-full h-64 mt-8", loading: "lazy" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold", style: {
        fontFamily: "'Playfair Display', serif"
      }, children: [
        "Pronto para renovar o ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "visual" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed", children: "Agende seu horário de forma rápida e prática. Escolha o dia, o horário e o serviço que deseja." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agendamento", className: "inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }),
        "Fazer agendamento"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contato", className: "border-t border-border bg-surface py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "8px"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { style: {
            width: "100px",
            height: "100px",
            borderRadius: "16px"
          }, src: salaoDoPingoBejeImg, alt: "Salão do Pingo", className: "h-10 w-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: "Barbearia tradicional com atendimento de qualidade e ambiente acolhedor. Seu estilo, nossa tradição." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-foreground mb-4", children: "Horário de funcionamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: {
              textAlign: "left",
              width: "130px"
            }, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Terça-feira: 10:00 — 12:00",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "13:00 — 18:30"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: {
              textAlign: "left",
              width: "130px"
            }, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Quarta-feira: 10:00 — 12:00",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "13:00 — 18:30"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: {
              textAlign: "left",
              width: "130px"
            }, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Quinta-feira: 10:00 — 12:00",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "13:00 — 18:30"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: {
              textAlign: "left",
              width: "130px"
            }, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Sexta-feira: 10:00 — 12:00",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "13:00 — 20:00"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: {
              textAlign: "left",
              width: "115px"
            }, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Sábado: 09:00 — 12:00",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "13:00 — 18:30"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-foreground mb-4", children: "Contato" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
              "Rua Oswaldo de Lourenzi, 372 - Jordanésia - Cajamar - SP"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
              "Avenida das Açurenas, 473 - Polvilho - Cajamar - SP"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-primary" }),
              "(11) 91322-4629"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-foreground mb-4", children: "Redes Sociais" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/salaodopingo/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "@salaodopingo" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Salão do Pingo. Todos os direitos reservados."
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
