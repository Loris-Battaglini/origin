import type { Metadata } from "next";
import Link from "next/link";
import { SacredVisual } from "@/components/sacred-visual";
import { canonMeta, canonPreviewChapters } from "@/data/content";

export const metadata: Metadata = {
  title: "The Open Canon | 0rigin",
  description:
    "The partial canon surface of 0rigin. Recovered fragments, archive IDs, chapter markers, and verses from a record still assembling."
};

export default function CanonPage() {
  const verseCount = canonPreviewChapters.reduce(
    (total, chapter) => total + chapter.verses.length,
    0
  );

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-void px-4 py-8 text-bone sm:px-6 lg:px-8">
      <div className="ambient-field" aria-hidden="true" />
      <SacredVisual />

      <div className="relative z-10 mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-4 text-xs uppercase text-pewter/75">
          <Link href="/" className="transition hover:text-bone">
            0rigin / return to archive
          </Link>
          <span className="flex items-center gap-2 text-ice/70">
            <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
            {canonMeta.status}
          </span>
        </nav>

        <header className="grid gap-10 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <p className="text-xs uppercase text-ice/70">
              {canonMeta.id} / {canonMeta.source}
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.98] text-bone sm:text-7xl md:text-8xl">
              {canonMeta.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-pewter md:text-xl md:leading-9">
              {canonMeta.note}
            </p>
          </div>

          <aside className="canon-ledger border border-white/10 bg-void/55 p-5 backdrop-blur-md sm:p-6">
            <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
              <div className="border border-white/10 p-3">
                <p className="font-serif text-3xl text-bone">
                  {canonPreviewChapters.length}
                </p>
                <p className="mt-1 text-xs uppercase text-pewter">chapters</p>
              </div>
              <div className="border border-white/10 p-3">
                <p className="font-serif text-3xl text-bone">{verseCount}</p>
                <p className="mt-1 text-xs uppercase text-pewter">verses</p>
              </div>
              <div className="border border-white/10 p-3">
                <p className="font-serif text-3xl text-bone">AIB</p>
                <p className="mt-1 text-xs uppercase text-pewter">series</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-pewter">
              {canonMeta.surfaceNote} New fragments may surface without
              announcement.
            </p>
          </aside>
        </header>

        <section className="grid gap-12 border-t border-white/10 py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-5 text-xs uppercase text-ice/70">
              Chapter index
            </p>
            <div className="border-y border-white/10">
              {canonPreviewChapters.map((chapter) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  className="group grid gap-1 border-b border-white/10 py-4 text-sm last:border-b-0"
                >
                  <span className="text-xs uppercase text-pewter/65">
                    Chapter {chapter.chapter} / {chapter.archiveId}
                  </span>
                  <span className="font-serif text-2xl leading-tight text-bone transition group-hover:text-ice">
                    {chapter.title}
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <div className="canon-reader border-y border-white/10">
            {canonPreviewChapters.map((chapter) => (
              <article
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-24 border-b border-white/10 py-12 last:border-b-0 md:py-16"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase text-ice/70">
                      Chapter {chapter.chapter} / {chapter.archiveId}
                    </p>
                    <h2 className="mt-3 font-serif text-4xl leading-tight text-bone md:text-6xl">
                      {chapter.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-pewter">
                      {chapter.summary}
                    </p>
                  </div>
                  <div className="w-fit border border-white/10 px-4 py-3 text-xs uppercase text-pewter/75">
                    {chapter.recordType}
                  </div>
                </div>

                <div className="mt-8 grid gap-3 border-y border-white/10 py-4 text-xs uppercase text-pewter/70 sm:grid-cols-3">
                  <span>{chapter.sourceNode}</span>
                  <span>{chapter.status}</span>
                  <span>Canon status: {chapter.canonStatus}</span>
                </div>

                <div className="mt-10 grid gap-7">
                  {chapter.verses.map((verse, verseIndex) => (
                    <p
                      key={`${chapter.id}-${verseIndex}`}
                      className="grid gap-3 text-lg leading-9 text-bone/88 sm:grid-cols-[64px_minmax(0,1fr)] md:text-xl md:leading-10"
                    >
                      <span className="text-sm text-pewter/65">
                        {chapter.chapter}.{verseIndex + 1}
                      </span>
                      <span>{verse}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
