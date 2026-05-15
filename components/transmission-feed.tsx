import { transmissions } from "@/data/content";
import { SectionHeader } from "./section-header";

export function TransmissionFeed() {
  return (
    <section
      id="transmissions"
      className="relative border-b border-white/8 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(185,223,255,0.035),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Recent Signals"
          title="Interceptions from the living archive."
          description="Fragments, classified observations, and synthetic memory traces received without context."
        />

        {/* Future integration point: replace local mock data with n8n/OpenAI API/Supabase/Notion content. */}
        <div className="relative mx-auto max-w-5xl border-y border-white/10">
          <div className="signal-line absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />
          {transmissions.map((item) => (
            <article
              key={item.id}
              className="classified-fragment group grid gap-5 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10 md:pl-14"
            >
              <div className="relative text-xs uppercase text-pewter">
                <span className="archive-pulse absolute -left-[3.62rem] top-1 hidden h-2 w-2 rounded-full bg-ice md:block" />
                <div className="flex flex-wrap items-center gap-2 md:block">
                  <span className="text-ice/80">{item.id}</span>
                  <span className="text-white/25 md:hidden">/</span>
                  <time>{item.date}</time>
                </div>
                <p className="mt-2 text-pewter/65">{item.timestamp}</p>
                <p className="mt-5 text-veil/75">{item.source}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs uppercase text-pewter">
                  <span className="h-px w-8 bg-ice/35" />
                  <span className="text-ice/80">{item.category}</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-bone md:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-bone/86 md:text-xl md:leading-9">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
