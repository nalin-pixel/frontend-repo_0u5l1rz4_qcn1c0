import { Rocket, WhatsApp, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c97a2b]" />
              DrViP • Psicologia, Sessuologia, Medicina Integrata
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
              Il desiderio non è un lusso.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5aa59] to-[#c97a2b]">È un linguaggio</span> che non hai ancora ascoltato.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Sono il Dr Vincenzo Paparella (DrViP): psicologo clinico, psicoterapeuta e sessuologo. Unisco mente, corpo ed energia per riaccendere il desiderio e restituire intimità autentica.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contatto"
                className="inline-flex items-center gap-2 rounded-lg bg-[#c97a2b] px-5 py-3 text-black font-medium shadow-lg shadow-[#c97a2b]/30 hover:brightness-110 transition"
              >
                <Rocket className="w-5 h-5" /> Prenota il tuo colloquio gratuito
              </a>
              <a
                href="#problemi"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition"
              >
                <PlayCircle className="w-5 h-5" /> Scopri cosa ti blocca
              </a>
              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/20 bg-[#25D366]/10 px-5 py-3 text-[#25D366] hover:bg-[#25D366]/20 transition"
              >
                <WhatsApp className="w-5 h-5" /> WhatsApp diretto
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Uomini, donne e coppie hanno riacceso il desiderio e ritrovato intimità.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 overflow-hidden">
              <div className="absolute inset-0 opacity-90" style={{background:"radial-gradient(80% 80% at 70% 30%, rgba(201,122,43,0.25) 0%, rgba(201,122,43,0.08) 45%, transparent 70%)"}} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#e5aa59] to-[#c97a2b] blur-2xl opacity-40" />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-4 text-white/90 max-w-sm">
                  <p className="text-sm">
                    Approccio integrato: psicologia clinica, sessuologia, MTC, PNEI e biorisonanza. Scienza, esperienza e presenza umana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
