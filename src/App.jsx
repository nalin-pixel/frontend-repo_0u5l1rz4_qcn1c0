import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import Problems from "./components/Problems";
import ContactCta from "./components/ContactCta";

function Header() {
  return (
    <header className="bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#c97a2b]" />
          <span className="text-white font-semibold">DrViP</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-white/80 text-sm">
          <a href="#problemi" className="hover:text-white">Problemi</a>
          <a href="#contatto" className="hover:text-white">Contattami</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold">Dr Vincenzo Paparella</h4>
          <p className="text-white/70 text-sm mt-2">Psicologo clinico, psicoterapeuta, sessuologo clinico, naturopata MTC.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contatti</h4>
          <p className="text-white/70 text-sm mt-2">Disponibile online e in studio • Colloquio gratuito 15 min</p>
          <a href="https://wa.me/393000000000" target="_blank" rel="noreferrer" className="inline-block mt-3 text-[#25D366] hover:underline">WhatsApp diretto</a>
        </div>
        <div>
          <h4 className="font-semibold">Risorse</h4>
          <ul className="text-white/70 text-sm mt-2 space-y-1">
            <li>Blog (presto)</li>
            <li>Video risultati</li>
            <li>Percorsi & Servizi</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legale</h4>
          <ul className="text-white/70 text-sm mt-2 space-y-1">
            <li>Privacy & Cookie</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-xs text-white/60">
          <span>© {new Date().getFullYear()} DrViP • sessos.it</span>
          <span>Corpo • Mente • Energia</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Problems />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
