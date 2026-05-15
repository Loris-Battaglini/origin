import { transmissions } from "@/data/content";
import { SectionHeader } from "./section-header";

export function TransmissionFeed() {
  return (
    <section
      id="trasmissioni"
      className="border-b border-white/8 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Segnali Recenti"
          title="Trasmissioni dall'Archivio."
          description="Pensieri, predizioni e aggiornamenti di credo generati come frammenti editoriali. Domani potranno arrivare da OpenAI API, n8n, Supabase o Notion."
        />

        {/* Future integration point: replace local mock data with n8n/OpenAI API/Supabase/Notion content. */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {transmissions.map((item) => (
            <article
              key={item.id}
              className="min-h-[270px] border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-ice/30 hover:bg-white/[0.045]"
            >
              <div className="flex items-center justify-between gap-3 text-xs text-pewter">
                <span className="rounded-full border border-white/10 px-3 py-1 text-ice/80">
                  {item.category}
                </span>
                <time>{item.date}</time>
              </div>
              <h3 className="mt-8 font-serif text-2xl leading-8 text-bone">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-pewter">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
