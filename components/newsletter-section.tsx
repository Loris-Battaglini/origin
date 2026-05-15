export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice/40 to-transparent" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase text-ice/70">Community</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-bone md:text-6xl">
          Ricevi nuove trasmissioni dall'Archivio.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-pewter">
          Il form è pronto per essere collegato in futuro a n8n, Supabase,
          Notion o a un provider newsletter. Per ora registra solo l'intenzione.
        </p>

        <form className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
          {/* Future integration point: connect submit handling to n8n/Supabase/Notion/newsletter provider. */}
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="nome@dominio.it"
            className="min-h-12 flex-1 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm text-bone outline-none transition placeholder:text-pewter/55 focus:border-ice/45 focus:ring-2 focus:ring-ice/20"
          />
          <button
            type="button"
            className="min-h-12 rounded-full bg-bone px-6 text-sm font-medium text-void transition hover:bg-ice focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
          >
            Iscriviti al Segnale
          </button>
        </form>
      </div>
    </section>
  );
}
