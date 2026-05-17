"use client";

import Link from "next/link";
import { useState } from "react";
import { archiveRecords } from "@/data/content";
import { ArchiveRail } from "./archive-rail";
import { SectionHeader } from "./section-header";

export function ArchiveSection() {
  const [openRecordIds, setOpenRecordIds] = useState<string[]>([
    archiveRecords[0]?.id ?? ""
  ]);

  function toggleRecord(recordId: string) {
    setOpenRecordIds((current) =>
      current.includes(recordId)
        ? current.filter((id) => id !== recordId)
        : [...current, recordId]
    );
  }

  return (
    <section
      id="archive"
      className="archive-system-section relative border-b border-white/8 bg-ash px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <ArchiveRail label="0R / ARCHIVE" marker="records" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Archive Records"
          title="Recovered files from the near threshold."
          description="Records, threshold files, and classified observations indexed as fragments of a larger system."
          align="left"
        />

        <div className="mx-auto max-w-6xl border-y border-white/10">
          {archiveRecords.map((record) => {
            const isOpen = openRecordIds.includes(record.id);
            const panelId = `archive-record-${record.id.toLowerCase()}`;

            return (
              <article
                key={record.id}
                className="record-entry group border-b border-white/10 p-5 last:border-b-0 sm:p-6 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
                  <div className="text-xs uppercase text-pewter">
                    <div className="flex flex-wrap items-center gap-2 md:block">
                      <span className="text-veil">{record.id}</span>
                      <span className="text-white/25 md:hidden">/</span>
                      <time>{record.date}</time>
                    </div>
                    <p className="mt-3 text-ice/70">{record.kind}</p>
                    <p className="mt-5 text-pewter/65">{record.source}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase text-pewter/70">
                      <span className="h-px w-8 bg-veil/35" />
                      <span>{record.field}</span>
                      <span className="text-white/25">/</span>
                      <span>{record.status}</span>
                    </div>
                    <h3 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-bone transition group-hover:text-ice md:text-5xl">
                      {record.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-pewter md:text-lg md:leading-8">
                      {record.excerpt}
                    </p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs uppercase tracking-[0.18em] text-pewter/60">
                        {isOpen ? "record incomplete" : "abstract only"}
                      </p>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleRecord(record.id)}
                        className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition hover:border-veil/45 hover:text-veil focus:outline-none focus:ring-2 focus:ring-veil focus:ring-offset-2 focus:ring-offset-void"
                      >
                        {isOpen ? "Collapse record" : "Expand record"}
                      </button>
                    </div>
                  </div>
                </div>

                {isOpen ? (
                  <div
                    id={panelId}
                    className="archive-disclosure-panel mt-7 grid gap-6 border-t border-white/10 pt-7 md:ml-[230px]"
                  >
                    <p className="max-w-3xl text-base leading-8 text-bone/84 md:text-lg md:leading-9">
                      {record.expandedExcerpt}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-3 text-xs uppercase text-pewter/70">
                        <span>surface only</span>
                        <span className="text-white/25">/</span>
                        <span>fragment locked</span>
                        <span className="text-white/25">/</span>
                        <span>{record.status}</span>
                      </div>
                      <Link
                        href={`/archive/${record.id.toLowerCase()}`}
                        className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition hover:border-veil/45 hover:text-veil focus:outline-none focus:ring-2 focus:ring-veil focus:ring-offset-2 focus:ring-offset-void"
                      >
                        Open record
                      </Link>
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
