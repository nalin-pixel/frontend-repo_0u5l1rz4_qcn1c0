import { Flame, AlertTriangle, Link2, ActivitySquare } from "lucide-react";

const problems = [
  {
    icon: Flame,
    title: "Calo del desiderio",
    desc: "Quando l'attrazione si spegne o è intermittente.",
  },
  {
    icon: AlertTriangle,
    title: "Ansia da prestazione",
    desc: "Tensione, controllo, paura di fallire: il corpo frena.",
  },
  {
    icon: Link2,
    title: "Dipendenza affettiva",
    desc: "Aspettative, carenze, incastri che consumano la coppia.",
  },
  {
    icon: ActivitySquare,
    title: "Disfunzioni relazionali",
    desc: "Conflitti, distanza, incomprensioni che bloccano l'intimità.",
  },
];

export default function Problems() {
  return (
    <section id="problemi" className="bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Problemi che risolviamo</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Nominiamo ciò che non si dice. E lo trasformiamo in presenza, desiderio e connessione.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#e5aa59] to-[#c97a2b] text-black flex items-center justify-center">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
