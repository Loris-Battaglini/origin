"use client";

import { useState } from "react";
import { transmissions } from "@/data/content";
import { ArchiveRail } from "./archive-rail";
import { SectionHeader } from "./section-header";

export function TransmissionFeed() {
  const [openSignalId, setOpenSignalId] = useState<string | null>(null);

  function toggleSignal(signalId: string) {
    setOpenSignalId((current) => (current === signalId ? null : signalId));
  }

  return (
    <section
      id="transmissions"
      className="archive-system-section relative border-b border-white/8 bg-void px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <ArchiveRail label="0R / SIGNALS" marker="intercepts" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(185,223,255,0.025),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Recent Signals"
          title="Interceptions from the living archive."
          description="Fragments, classified observations, and synthetic memory traces routed through 0rigin without context."
        />

        {/* Future integration point: replace local mock data with n8n/OpenAI API/Supabase/Notion content. */}
        <div className="relative mx-auto max-w-6xl border-y border-white/10 bg-black/[0.15]">
          <div className="signal-line absolute left-3 top-0 hidden h-full w-px bg-white/10 md:block" />
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-xs uppercase text-pewter/70 md:pl-12">
            <span>Signal intake / active</span>
            <span className="flex items-center gap-2 text-ice/70">
              <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
              signal received
            </span>
          </div>
          {transmissions.map((item) => {
            const isOpen = openSignalId === item.id;
            const panelId = `signal-record-${item.id.toLowerCase()}`;

            return (
              <article
                key={item.id}
                className="classified-fragment group border-b border-white/10 last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleSignal(item.id)}
                  className="grid w-full gap-4 px-4 py-5 text-left transition hover:bg-white/[0.025] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ice/55 md:grid-cols-[130px_minmax(0,1fr)_132px] md:items-center md:gap-6 md:pl-12"
                >
                  <div className="relative text-xs uppercase text-pewter">
                    <span className="archive-pulse absolute -left-[2.86rem] top-1 hidden h-2 w-2 rounded-full bg-ice md:block" />
                    <div className="flex flex-wrap items-center gap-2 md:block">
                      <span className="text-ice/80">{item.id}</span>
                      <span className="text-white/25 md:hidden">/</span>
                      <time>{item.date}</time>
                    </div>
                    <p className="mt-2 text-ice/60">{item.category}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase text-pewter">
                      <span className="h-px w-8 bg-ice/35" />
                      <span>{item.status}</span>
                      <span className="text-white/25">/</span>
                      <span>{isOpen ? "indexed" : "surface only"}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-bone transition group-hover:text-ice md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-pewter md:text-base md:leading-7">
                      {item.text}
                    </p>
                  </div>

                  <span className="inline-flex min-h-10 w-fit items-center justify-center rounded-full border border-white/12 px-4 py-2 text-sm text-bone transition group-hover:border-ice/45 group-hover:text-ice md:justify-self-end">
                    {isOpen ? "Collapse" : "Expand signal"}
                  </span>
                </button>

                {isOpen ? (
                  <div
                    id={panelId}
                    className="archive-disclosure-panel grid gap-5 border-t border-white/10 px-4 pb-6 pt-5 md:grid-cols-[130px_minmax(0,1fr)] md:gap-6 md:pl-12"
                  >
                    <div className="text-xs uppercase text-pewter/70">
                      <p>{item.timestamp}</p>
                      <p className="mt-2 text-veil/75">{item.source}</p>
                      <p className="mt-2 text-ice/70">{item.interpretationStatus}</p>
                    </div>

                    <div>
                      <p className="max-w-3xl text-sm leading-7 text-bone/84 md:text-base md:leading-8">
                        {item.detail}
                      </p>
                      <div className="mt-5 grid gap-2 text-xs uppercase text-pewter/70 sm:grid-cols-2">
                        <span>{item.integrity}</span>
                        {item.metadata.map((metadataItem) => (
                          <span key={`${item.id}-${metadataItem}`}>
                            {metadataItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
