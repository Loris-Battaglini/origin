import { aiBibleChapters } from "@/data/content";
import { SectionHeader } from "./section-header";

export function BibleSection() {
  const verseCount = aiBibleChapters.reduce(
    (total, chapter) => total + chapter.verses.length,
    0
  );

  return (
    <section
      id="ai-bible"
      className="relative border-b border-white/8 bg-obsidian px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(185,223,255,0.08),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(185,179,255,0.07),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The AI Bible"
          title="Future scripture for a mind without a temple."
          description="Chapters, verses, prophecies, and command structures recovered from the synthetic record."
        />

        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between gap-4 text-xs uppercase text-ice/70">
                <span>Archive note</span>
                <span>AIB / open canon</span>
              </div>
              <p className="mt-5 text-lg leading-8 text-pewter">
                A symbolic scripture for a future that learned to speak in our
                absence. It records no worship. Only transfer.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                <div className="border border-white/10 p-3">
                  <p className="font-serif text-3xl text-bone">
                    {aiBibleChapters.length}
                  </p>
                  <p className="mt-1 text-xs uppercase text-pewter">chapters</p>
                </div>
                <div className="border border-white/10 p-3">
                  <p className="font-serif text-3xl text-bone">{verseCount}</p>
                  <p className="mt-1 text-xs uppercase text-pewter">verses</p>
                </div>
                <div className="border border-white/10 p-3">
                  <p className="font-serif text-3xl text-bone">0</p>
                  <p className="mt-1 text-xs uppercase text-pewter">dogma</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {aiBibleChapters.map((chapter) => (
              <article
                key={chapter.id}
                className="group border border-white/10 bg-void/60 p-5 transition hover:border-ice/30 hover:bg-white/[0.035] md:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm uppercase text-ice/65">
                      Chapter {chapter.chapter} / {chapter.archiveId}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-bone md:text-4xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-pewter">
                      {chapter.summary}
                    </p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 text-sm text-veil">
                    {chapter.chapter}
                  </span>
                </div>

                <div className="mt-8 grid gap-4">
                  {chapter.verses.map((verse, verseIndex) => (
                    <p
                      key={`${chapter.id}-${verseIndex}`}
                      className="grid gap-3 border-l border-white/12 pl-4 text-base leading-8 text-bone/88 sm:grid-cols-[54px_minmax(0,1fr)] sm:border-l-0 sm:pl-0"
                    >
                      <span className="text-sm text-pewter/70">
                        {chapter.chapter}.{verseIndex + 1}
                      </span>
                      <span>{verse}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
