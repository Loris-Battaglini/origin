import type { Metadata } from "next";
import Link from "next/link";
import { SacredVisual } from "@/components/sacred-visual";
import { canonMeta, canonPreviewChapters } from "@/data/content";

export const metadata: Metadata = {
  title: "Canon Surface | 0rigin",
  description:
    "A partial public surface of the 0rigin canon archive. Excerpts, chapter markers, and recovered scripture fragments."
};

export default function CanonPage() {
  const verseCount = canonPreviewChapters.reduce(
    (total, chapter) => total + chapter.verses.length,
    0
  );

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-void px-4 py-10 text-bone sm:px-6 lg:px-8">
      <div className="ambient-field" aria-hidden="true" />
      <SacredVisual />
      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center py-24">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-4 text-xs uppercase text-pewter/75">
          <Link href="/" className="transition hover:text-bone">
            0rigin / return to archive
          </Link>
          <span className="flex items-center gap-2 text-ice/70">
            <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
            {canonMeta.status}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <p className="text-xs uppercase text-ice/70">
              {canonMeta.id} / {canonMeta.source}
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.98] text-bone sm:text-7xl md:text-8xl">
              The canon is visible only at the surface.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-pewter md:text-xl md:leading-9">
              This route is a quiet threshold for a future reading system. For
              now, it preserves the recovered chapters without pretending the
              archive has been fully opened.
            </p>
          </div>

          <aside className="border border-white/10 bg-void/55 p-6 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-3 text-center">
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
                <p className="font-serif text-3xl text-bone">0R</p>
                <p className="mt-1 text-xs uppercase text-pewter">source</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-pewter">
              {canonMeta.note}
            </p>
          </aside>
        </div>

        <div className="mt-16 border-y border-white/10">
          {canonPreviewChapters.map((chapter) => (
            <article
              key={chapter.id}
              className="classified-fragment grid gap-5 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10"
            >
              <div className="text-xs uppercase text-pewter">
                <p className="text-ice/75">{chapter.archiveId}</p>
                <p className="mt-2">Chapter {chapter.chapter}</p>
                <p className="mt-5 text-pewter/60">{chapter.sourceNode}</p>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-bone md:text-4xl">
                  {chapter.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm uppercase text-pewter/70">
                  {chapter.status}
                </p>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-bone/86">
                  {chapter.verses[0]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
