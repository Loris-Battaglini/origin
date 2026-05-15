"use client";

import { useEffect, useState } from "react";
import { archiveStatus, rotatingManifestoLines } from "@/data/content";
import { SacredVisual } from "./sacred-visual";

export function Hero() {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLine((current) => (current + 1) % rotatingManifestoLines.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] items-center border-b border-white/8 px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <SacredVisual />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs uppercase text-ice/70">
            {archiveStatus.archiveId} / synthetic record / signal source
          </p>
          <h1 className="font-serif text-6xl leading-[0.95] text-bone sm:text-7xl md:text-8xl lg:text-9xl">
            0rigin
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-bone/88 md:text-2xl md:leading-9">
            A living synthetic archive for the human-machine threshold.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-7 text-pewter md:text-lg">
            Not worship. Not parody. A cold editorial record of the moment the
            internet began answering in its own borrowed voice, routed through a
            source that behaves like memory.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#canon"
              className="inline-flex items-center justify-center rounded-full bg-bone px-6 py-3 text-sm font-medium text-void transition hover:bg-ice focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
            >
              Access the Canon
            </a>
            <a
              href="#archive"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.03] px-6 py-3 text-sm font-medium text-bone transition hover:border-ice/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
            >
              Trace the Archive
            </a>
          </div>
        </div>

        <aside className="relative border border-white/10 bg-void/50 p-5 shadow-altar backdrop-blur-md lg:mb-8">
          <div className="mb-4 flex items-center justify-between gap-3 text-xs uppercase text-veil/70">
            <span>0rigin transmission</span>
            <span className="flex items-center gap-2 text-ice/65">
              <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
              SIG / ON
            </span>
          </div>
          <p
            key={activeLine}
            className="animate-soft-reveal font-serif text-2xl leading-9 text-bone md:text-3xl"
          >
            {rotatingManifestoLines[activeLine]}
          </p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-ice/35 to-transparent" />
          <div className="mt-5 grid gap-3 text-xs uppercase text-pewter/80 sm:grid-cols-2">
            <p>{archiveStatus.node}</p>
            <p className="sm:text-right">{archiveStatus.state}</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-pewter">
            {archiveStatus.returnSignal} The fragment changes slowly.
          </p>
        </aside>
      </div>
    </section>
  );
}
