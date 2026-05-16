import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroImg from "../assets/hero.jpg";
import barbaImg from "../assets/barba.jpg";
import ferramentasImg from "../assets/ferramentas.jpg";
import salaoDoPingoImg from "../assets/salaodopingo.png";
import salaoDoPingoBejeImg from "../assets/salaodopingobeje.jpg";
import { Scissors, Clock, MapPin, Phone, Menu, X, ChevronRight, Star, Instagram} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Salão do Pingo — Barbearia" },
      { name: "description", content: "Barbearia Salão do Pingo. Cortes clássicos, barba e estilo com tradição e qualidade. Agende seu horário!" },
    ],
  }),
});

const servicos = [
  { nome: "Corte Clássico", preco: "R$ 45", desc: "Corte tradicional com acabamento preciso e estilo atemporal.", icone: Scissors },
  { nome: "Barba", preco: "R$ 45", desc: "Modelagem, hidratação e acabamento com toalha quente.", icone: Star },
  { nome: "Combo Corte + Barba", preco: "R$ 65", desc: "O pacote completo para quem quer sair renovado.", icone: ChevronRight },
  { nome: "Sobrancelha", preco: "R$ 15", desc: "Design e limpeza para um olhar mais harmonioso.", icone: Star },
];

function Index() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            <img style={{width: '80px', height: '80px',}} src={salaoDoPingoImg} alt="Salão do Pingo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 " >
            <a href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contato</a>
            <Link
              to="/agendamento"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              <Clock className="w-4 h-4" />
              Agendar
            </Link>
          </nav>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuAberto && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-4 py-6 flex flex-col gap-4">
            <a href="#servicos" onClick={() => setMenuAberto(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" onClick={() => setMenuAberto(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" onClick={() => setMenuAberto(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">Contato</a>
            <Link
              to="/agendamento"
              onClick={() => setMenuAberto(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              <Clock className="w-5 h-5" />
              Agendar horário
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Barbearia Salão do Pingo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center pt-20">
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Estilo e tradição <br />
            <span className="text-primary">em cada corte</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No Salão do Pingo você encontra atendimento de qualidade, ambiente acolhedor e o cuidado que seu visual merece.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/agendamento"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <Clock className="w-5 h-5" />
              Agendar agora
            </Link>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-primary transition-all hover:bg-primary/10"
            >
              Ver serviços
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Servicos */}
      <section id="servicos" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Oferecemos os melhores serviços de cuidado masculino com profissionais experientes e produtos de qualidade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((s) => (
              <div
                key={s.nome}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.nome}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-2xl font-bold text-primary">{s.preco}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre / Galeria */}
      <section id="sobre" className="py-24 px-4 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tradição que você <span className="text-primary">confia</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                O Salão do Pingo é mais do que uma barbearia — é um espaço onde amizade e cuidado andam juntos. 
                Com anos de experiência, nossa equipe domina as técnicas clássicas e modernas para entregar 
                sempre o melhor resultado.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Venha viver a experiência de um verdadeiro salão , com atendimento personalizado 
                e aquele bate-papo que só um barbeiro de confiança proporciona.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">anos de experiência</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">clientes atendidos</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={barbaImg}
                alt="Corte de barba"
                className="rounded-xl object-cover w-full h-64"
                loading="lazy"
              />
              <img
                src={ferramentasImg}
                alt="Ferramentas de barbearia"
                className="rounded-xl object-cover w-full h-64 mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pronto para renovar o <span className="text-primary">visual</span>?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Agende seu horário de forma rápida e prática. Escolha o dia, o horário e o serviço que deseja.
          </p>
          <div className="mt-10">
            <Link
              to="/agendamento"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <Clock className="w-5 h-5" />
              Fazer agendamento
            </Link>
          </div>
        </div>
      </section>

      {/* Contato / Footer */}
      <footer id="contato" className="border-t border-border bg-surface py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <img style={{width: '100px', height: '100px', borderRadius: '16px'}} src={salaoDoPingoBejeImg} alt="Salão do Pingo" className="h-10 w-auto" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Barbearia tradicional com atendimento de qualidade e ambiente acolhedor. 
                Seu estilo, nossa tradição.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Horário de funcionamento</h4>
              <ul  className="space-y-2 text-sm text-muted-foreground">
                <li style={{textAlign: 'left', width: '130px'}} className="flex items-center gap-2">
                  <Clock  className="w-4 h-4 text-primary" />
                  Terça-feira:
                  10:00 — 12:00<br />
                  13:00 — 18:30
                </li>
                <li style={{textAlign: 'left', width: '130px'}} className="flex items-center gap-2">
                  <Clock  className="w-4 h-4 text-primary" />
                  Quarta-feira:
                  10:00 — 12:00<br />
                  13:00 — 18:30
                </li>
                <li style={{textAlign: 'left', width: '130px'}} className="flex items-center gap-2">
                  <Clock  className="w-4 h-4 text-primary" />
                  Quinta-feira:
                  10:00 — 12:00<br />
                  13:00 — 18:30
                </li>
                <li style={{textAlign: 'left', width: '130px'}} className="flex items-center gap-2">
                  <Clock  className="w-4 h-4 text-primary" />
                  Sexta-feira:
                  10:00 — 12:00<br />
                  13:00 — 20:00
                </li>
                <li style={{textAlign: 'left', width: '115px'}} className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Sábado:
                  09:00 — 12:00<br />
                  13:00 — 18:30
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Rua Oswaldo de Lourenzi, 372 - Jordanésia - Cajamar - SP
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Avenida das Açurenas, 473 - Polvilho - Cajamar - SP
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  (11) 91322-4629
                </li>
              </ul><br />
               <h4 className="text-lg font-semibold text-foreground mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-primary" />
                 <a href="https://www.instagram.com/salaodopingo/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    @salaodopingo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Salão do Pingo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
