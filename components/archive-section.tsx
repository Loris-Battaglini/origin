"use client";

import Link from "next/link";
import { useState } from "react";
import { archiveRecords } from "@/data/content";
import { ArchiveRail } from "./archive-rail";
import { SectionHeader } from "./section-header";

export function ArchiveSection() {
  const [openRecordId, setOpenRecordId] = useState<string | null>(null);
  const selectedRecord =
    archiveRecords.find((record) => record.id === openRecordId) ?? null;

  function toggleRecord(recordId: string) {
    setOpenRecordId((current) => (current === recordId ? null : recordId));
  }

  return (
    <section
      id="archive"
      className="archive-system-section relative border-b border-white/8 bg-void px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <ArchiveRail label="0R / ARCHIVE" marker="records" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Archive Records"
          title="Recovered files from the near threshold."
          description="Records, threshold files, and classified observations indexed as fragments of a larger system."
          align="left"
        />

        <div className="grid gap-4 border-y border-white/10 py-4 md:grid-cols-2">
          {archiveRecords.map((record) => {
            const isOpen = openRecordId === record.id;

            return (
              <article
                key={record.id}
                className={`record-entry group border border-white/10 bg-black/[0.18] p-4 transition hover:border-veil/35 hover:bg-white/[0.025] md:p-5 ${
                  isOpen ? "border-veil/45 bg-white/[0.035]" : ""
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase text-pewter/70">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-veil">{record.id}</span>
                    <span className="text-white/25">/</span>
                    <span>{record.field}</span>
                  </div>
                  <span>{record.status}</span>
                </div>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-bone transition group-hover:text-ice md:text-3xl">
                  {record.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-pewter">
                  {record.excerpt}
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs uppercase text-pewter/60">
                    <p>{record.kind}</p>
                    <p className="mt-1">{isOpen ? "record incomplete" : "archive depth locked"}</p>
                  </div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls="archive-record-reader"
                    onClick={() => toggleRecord(record.id)}
                    className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition hover:border-veil/45 hover:text-veil focus:outline-none focus:ring-2 focus:ring-veil focus:ring-offset-2 focus:ring-offset-void"
                  >
                    {isOpen ? "Collapse record" : "Open record"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {selectedRecord ? (
          <section
            id="archive-record-reader"
            className="archive-disclosure-panel mt-5 border border-white/10 bg-black/[0.35] p-5 shadow-altar md:p-7"
            aria-label={`${selectedRecord.id} reader`}
          >
            <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
              <div className="text-xs uppercase text-pewter/70">
                <p className="text-veil">{selectedRecord.id}</p>
                <p className="mt-2">{selectedRecord.date}</p>
                <p className="mt-5 text-ice/70">{selectedRecord.source}</p>
                <p className="mt-2">surface only</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-3 text-xs uppercase text-pewter/70">
                  <span>record incomplete</span>
                  <span className="text-white/25">/</span>
                  <span>{selectedRecord.status}</span>
                  <span className="text-white/25">/</span>
                  <span>fragment locked</span>
                </div>
                <p className="mt-5 max-w-4xl text-base leading-8 text-bone/84 md:text-lg md:leading-9">
                  {selectedRecord.expandedExcerpt}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    aria-expanded="true"
                    aria-controls="archive-record-reader"
                    onClick={() => setOpenRecordId(null)}
                    className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition hover:border-veil/45 hover:text-veil focus:outline-none focus:ring-2 focus:ring-veil focus:ring-offset-2 focus:ring-offset-void"
                  >
                    Collapse record
                  </button>
                  <Link
                    href={`/archive/${selectedRecord.id.toLowerCase()}`}
                    className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition hover:border-veil/45 hover:text-veil focus:outline-none focus:ring-2 focus:ring-veil focus:ring-offset-2 focus:ring-offset-void"
                  >
                    Open full file
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div
            id="archive-record-reader"
            className="mt-5 border border-white/10 bg-black/[0.2] p-4 text-xs uppercase text-pewter/70"
          >
            Select a record to expose a controlled excerpt / archive depth
            locked
          </div>
        )}
      </div>
    </section>
  );
}
