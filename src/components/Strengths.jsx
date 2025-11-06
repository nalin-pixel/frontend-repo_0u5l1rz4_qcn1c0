import { Heart, Activity, Sparkles, Shield } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Desiderio & Corpo",
    desc: "Riallinea mente e corpo: respiri, ritmi, ormoni. Dalla testa al corpo, senza tabù.",
  },
  {
    icon: Heart,
    title: "Relazioni Intime",
    desc: "Dinamiche di coppia, comunicazione sensuale, intimità consapevole e rispettosa.",
  },
  {
    icon: Activity,
    title: "Biorisonanza Quantica",
    desc: "Tecnologie non invasive per valutare squilibri energetici e favorire autoregolazione.",
  },
  {
    icon: Shield,
    title: "Metodo Integrato",
    desc: "Psicologia, sessuologia, MTC e PNEI in un percorso cucito su misura per te.",
  },
];

export default function Strengths() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">Come lavoro</h2>
        <p className="mt-3 text-black/70 max-w-2xl">Autorevole ma umano. Metodo chiaro in passi semplici, risultati concreti e misurabili.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-black/10 p-6 hover:shadow-xl transition bg-white">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#e5aa59] to-[#c97a2b] text-black flex items-center justify-center">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">{it.title}</h3>
              <p className="mt-2 text-sm text-black/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
