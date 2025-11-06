import { Send, Whatsapp } from "lucide-react";

export default function ContactCta() {
  return (
    <section id="contatto" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">
              Hai passato mesi a resistere. Ora prova a rinascere.
            </h2>
            <p className="mt-3 text-black/70 max-w-xl">
              Scrivimi e fissiamo un colloquio conoscitivo gratuito di 15 minuti. Lavoro online e in studio.
            </p>
            <a
              href="https://wa.me/393000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-black font-medium shadow-lg shadow-[#25D366]/30 hover:brightness-110 transition"
            >
              {/* Using Send icon to avoid name mismatch issues; label shows WhatsApp */}
              <Send className="w-5 h-5" /> Scrivimi su WhatsApp
            </a>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-black">Nome</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#c97a2b]"
                  placeholder="Il tuo nome"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-black">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#c97a2b]"
                  placeholder="nome@email.it"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-black">Messaggio</label>
              <textarea
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#c97a2b]"
                placeholder="Scrivi in poche righe come posso aiutarti"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#e5aa59] to-[#c97a2b] px-5 py-3 text-black font-medium hover:brightness-110 transition"
            >
              <Send className="w-5 h-5" /> Invia richiesta
            </button>
            <p className="mt-3 text-xs text-black/60">
              Inviando accetti l'informativa privacy. Riceverai risposta entro 24-48h lavorative.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
