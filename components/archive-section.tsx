import { archiveArticles } from "@/data/content";
import { SectionHeader } from "./section-header";

export function ArchiveSection() {
  return (
    <section
      id="archivio"
      className="border-b border-white/8 bg-ash px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Blog / Archivio"
          title="Saggi brevi dal futuro prossimo."
          description="Un archivio editoriale pronto a ospitare articoli su automazione, società AI, produttività e filosofia tecnologica."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {archiveArticles.map((article) => (
            <article
              key={article.id}
              className="group flex min-h-[260px] flex-col justify-between border border-white/10 bg-void/65 p-6 transition hover:border-veil/35 hover:bg-void/90 md:p-8"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-pewter">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-veil">
                    {article.tag}
                  </span>
                  <time>{article.date}</time>
                </div>
                <h3 className="mt-7 max-w-2xl font-serif text-3xl leading-tight text-bone md:text-4xl">
                  {article.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-7 text-pewter">
                  {article.excerpt}
                </p>
              </div>
              <a
                href="#newsletter"
                className="mt-8 inline-flex w-fit items-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition group-hover:border-veil/45 group-hover:text-veil"
              >
                Leggi
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-white/10 bg-white/[0.03] p-6 text-center md:p-8">
          <p className="font-serif text-2xl text-bone md:text-3xl">
            Oggetti fisici dell'Archivio arriveranno in una fase successiva.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-pewter">
            Nessuno shop ora: solo un segnale per la futura estensione del
            brand in edizioni, stampe e reliquie editoriali.
          </p>
        </div>
      </div>
    </section>
  );
}
