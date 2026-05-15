import { archiveArticles } from "@/data/content";
import { SectionHeader } from "./section-header";

export function ArchiveSection() {
  return (
    <section
      id="archive"
      className="border-b border-white/8 bg-ash px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Archive"
          title="Records from the near threshold."
          description="Essays, observations, and recovered notes on automation, society, labor, and technological philosophy."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {archiveArticles.map((article) => (
            <article
              key={article.id}
              className="group flex min-h-[260px] flex-col justify-between border border-white/10 bg-void/65 p-6 transition hover:border-veil/35 hover:bg-void/90 md:p-8"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase text-pewter">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-veil">
                    {article.id}
                  </span>
                  <span>{article.tag}</span>
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
                Open record
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
