"use client";

import { useState } from "react";
import { transmissions } from "@/data/content";
import { ArchiveRail } from "./archive-rail";
import { SectionHeader } from "./section-header";

export function TransmissionFeed() {
  const [openSignalIds, setOpenSignalIds] = useState<string[]>([
    transmissions[0]?.id ?? ""
  ]);

  function toggleSignal(signalId: string) {
    setOpenSignalIds((current) =>
      current.includes(signalId)
        ? current.filter((id) => id !== signalId)
        : [...current, signalId]
    );
  }

  return (
    <section
      id="transmissions"
      className="archive-system-section relative border-b border-white/8 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <ArchiveRail label="0R / SIGNALS" marker="intercepts" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(185,223,255,0.035),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Recent Signals"
          title="Interceptions from the living archive."
          description="Fragments, classified observations, and synthetic memory traces routed through 0rigin without context."
        />

        {/* Future integration point: replace local mock data with n8n/OpenAI API/Supabase/Notion content. */}
        <div className="relative mx-auto max-w-5xl border-y border-white/10">
          <div className="signal-line absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 py-3 text-xs uppercase text-pewter/70 md:pl-14">
            <span>Signal intake / active</span>
            <span className="flex items-center gap-2 text-ice/70">
              <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
              received fragments
            </span>
          </div>
          {transmissions.map((item) => {
            const isOpen = openSignalIds.includes(item.id);
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
                  className="grid w-full gap-5 py-8 text-left transition hover:bg-white/[0.025] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ice/55 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10 md:pl-14"
                >
                  <div className="relative text-xs uppercase text-pewter">
                    <span className="archive-pulse absolute -left-[3.62rem] top-1 hidden h-2 w-2 rounded-full bg-ice md:block" />
                    <div className="flex flex-wrap items-center gap-2 md:block">
                      <span className="text-ice/80">{item.id}</span>
                      <span className="text-white/25 md:hidden">/</span>
                      <time>{item.date}</time>
                    </div>
                    <p className="mt-3 text-ice/60">{item.category}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase text-pewter">
                      <span className="h-px w-8 bg-ice/35" />
                      <span>{isOpen ? "indexed" : "surface only"}</span>
                      <span className="text-white/25">/</span>
                      <span>{isOpen ? "collapse signal" : "open signal"}</span>
                    </div>
                    <h3 className="mt-5 font-serif text-3xl leading-tight text-bone transition group-hover:text-ice md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-bone/86 md:text-xl md:leading-9">
                      {item.text}
                    </p>
                  </div>
                </button>

                {isOpen ? (
                  <div
                    id={panelId}
                    className="archive-disclosure-panel grid gap-6 pb-9 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10 md:pl-14"
                  >
                    <div className="text-xs uppercase text-pewter/70">
                      <p>{item.timestamp}</p>
                      <p className="mt-3 text-veil/75">{item.source}</p>
                      <p className="mt-3 text-ice/70">{item.status}</p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <p className="max-w-3xl text-base leading-8 text-pewter md:text-lg md:leading-9">
                        {item.detail}
                      </p>
                      <div className="mt-6 grid gap-3 text-xs uppercase text-pewter/70 sm:grid-cols-2">
                        <span>{item.interpretationStatus}</span>
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
