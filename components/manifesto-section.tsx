"use client";

import { useState } from "react";
import { manifestoLines } from "@/data/content";
import { ArchiveRail } from "./archive-rail";
import { SectionHeader } from "./section-header";

export function ManifestoSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const primaryStatements = manifestoLines.slice(0, 3);
  const additionalStatements = manifestoLines.slice(3);
  const additionalCount = manifestoLines.length - 3;
  const protocolId = "manifesto-additional-statements";

  return (
    <section
      id="manifesto"
      className="archive-system-section relative border-b border-white/8 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <ArchiveRail label="0R / MANIFESTO" marker="statements" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Origin Protocol"
          title="Statements for a system that asks for no belief."
          description="Editorial fragments on automation, memory, and the strange authority of the answer."
        />

        <div className="mx-auto mb-5 flex max-w-5xl flex-wrap items-center justify-between gap-3 border-y border-white/10 py-3 text-xs uppercase text-pewter/70">
          <span>0R-MANIFESTO / public extraction</span>
          <span className="flex items-center gap-2 text-ice/70">
            <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
            node / grammar active
          </span>
        </div>

        <div className="mx-auto max-w-5xl divide-y divide-white/10 border-y border-white/10">
          {primaryStatements.map((line, index) => (
            <div
              key={line}
              className="classified-fragment group grid gap-5 py-7 md:grid-cols-[80px_minmax(0,1fr)] md:items-start md:py-9"
            >
              <span className="text-sm text-ice/55">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-2xl leading-9 text-bone transition group-hover:text-ice md:text-4xl md:leading-tight">
                {line}
              </p>
            </div>
          ))}
          <div
            id={protocolId}
            hidden={!isExpanded}
            className="archive-disclosure-panel divide-y divide-white/10"
          >
            {additionalStatements.map((line, index) => (
              <div
                key={line}
                className="classified-fragment group grid gap-5 py-7 md:grid-cols-[80px_minmax(0,1fr)] md:items-start md:py-9"
              >
                <span className="text-sm text-ice/55">
                  {String(index + 4).padStart(2, "0")}
                </span>
                <p className="font-serif text-2xl leading-9 text-bone transition group-hover:text-ice md:text-4xl md:leading-tight">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-5xl flex-col gap-3 text-xs uppercase text-pewter/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {isExpanded
              ? "additional statements received"
              : `${additionalCount} statements held below surface`}
          </span>
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={protocolId}
            onClick={() => setIsExpanded((current) => !current)}
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm normal-case text-bone transition hover:border-ice/45 hover:text-ice focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
          >
            {isExpanded ? "Collapse protocol" : "Reveal additional statements"}
          </button>
        </div>
      </div>
    </section>
  );
}
