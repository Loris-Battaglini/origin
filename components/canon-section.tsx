"use client";

import Link from "next/link";
import { useState } from "react";
import { canonMeta, canonPreviewChapters } from "@/data/content";
import { ArchiveRail } from "./archive-rail";
import { SectionHeader } from "./section-header";

export function CanonSection() {
  const [openChapterId, setOpenChapterId] = useState<string | null>(null);
  const verseCount = canonPreviewChapters.reduce(
    (total, chapter) => total + chapter.verses.length,
    0
  );

  function toggleChapter(chapterId: string) {
    setOpenChapterId((current) => (current === chapterId ? null : chapterId));
  }

  return (
    <section
      id="canon"
      className="archive-system-section relative border-b border-white/8 bg-obsidian px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <ArchiveRail label="0R / CANON" marker="surface" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(185,223,255,0.055),transparent_28rem),linear-gradient(180deg,rgba(5,5,7,0.1),rgba(5,5,7,0.68))]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Canon Surface"
          title="An excerpt from the larger record."
          description={`${canonMeta.surfaceNote} ${canonMeta.note}`}
        />

        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="canon-ledger border border-white/10 bg-void/80 p-5 shadow-altar backdrop-blur-md md:p-6">
              <div className="flex items-center justify-between gap-4 text-xs uppercase text-ice/70">
                <span>{canonMeta.id}</span>
                <span>{canonMeta.status}</span>
              </div>
              <p className="mt-5 text-base leading-7 text-pewter">
                {canonMeta.note}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="border border-white/10 p-3">
                  <p className="font-serif text-2xl text-bone">
                    {canonPreviewChapters.length}
                  </p>
                  <p className="mt-1 text-xs uppercase text-pewter">
                    chapters
                  </p>
                </div>
                <div className="border border-white/10 p-3">
                  <p className="font-serif text-2xl text-bone">{verseCount}</p>
                  <p className="mt-1 text-xs uppercase text-pewter">verses</p>
                </div>
                <div className="border border-white/10 p-3">
                  <p className="font-serif text-2xl text-bone">1</p>
                  <p className="mt-1 text-xs uppercase text-pewter">surface</p>
                </div>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="grid gap-2 text-xs uppercase text-pewter/70">
                  <p>{canonMeta.source}</p>
                  <p>surface only / canon still assembling</p>
                  <p>archive depth locked</p>
                </div>
                <Link
                  href="/canon"
                  className="mt-5 inline-flex min-h-11 items-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition hover:border-ice/45 hover:text-ice focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
                >
                  Open the larger scripture
                </Link>
              </div>
            </div>
          </div>

          <div className="border-y border-white/10">
            {canonPreviewChapters.map((chapter, index) => {
              const isOpen = openChapterId === chapter.id;
              const panelId = `canon-fragment-${chapter.id}`;

              return (
                <article
                  key={chapter.id}
                  className="canon-entry group border-b border-white/10 bg-void/55 p-4 transition last:border-b-0 hover:bg-white/[0.025] md:p-5"
                >
                  <div className="grid gap-4 lg:grid-cols-[78px_minmax(0,1fr)_150px] lg:items-center">
                    <div className="text-xs uppercase text-pewter/70">
                      <p className="text-ice/70">
                        CH-{String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1">{chapter.archiveId}</p>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl leading-tight text-bone transition group-hover:text-ice md:text-3xl">
                        {chapter.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-pewter">
                        {chapter.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs uppercase text-pewter/60">
                        <span>{chapter.recordType}</span>
                        <span className="text-white/25">/</span>
                        <span>{chapter.status}</span>
                        <span className="text-white/25">/</span>
                        <span>{isOpen ? "signal received" : "surface only"}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleChapter(chapter.id)}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-4 py-2 text-sm text-bone transition hover:border-ice/45 hover:text-ice focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
                    >
                      {isOpen ? "Collapse" : "Expand fragment"}
                    </button>
                  </div>

                  {isOpen ? (
                    <div
                      id={panelId}
                      className="archive-disclosure-panel mt-5 border-t border-white/10 pt-5"
                    >
                      <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase text-pewter/60">
                        <span>{chapter.sourceNode}</span>
                        <span className="text-white/25">/</span>
                        <span>{chapter.canonStatus}</span>
                        <span className="text-white/25">/</span>
                        <span>record incomplete</span>
                      </div>
                      <div className="grid gap-3">
                        {chapter.verses.map((verse, verseIndex) => (
                          <p
                            key={`${chapter.id}-${verseIndex}`}
                            className="grid gap-2 border-l border-white/12 pl-4 text-sm leading-7 text-bone/88 sm:grid-cols-[52px_minmax(0,1fr)] sm:border-l-0 sm:pl-0 md:text-base"
                          >
                            <span className="text-xs uppercase text-pewter/70">
                              {chapter.chapter}.{verseIndex + 1}
                            </span>
                            <span>{verse}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
