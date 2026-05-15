"use client";

import { useEffect, useState } from "react";
import { rotatingManifestoLines } from "@/data/content";
import { SacredVisual } from "./sacred-visual";

export function Hero() {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLine((current) => (current + 1) % rotatingManifestoLines.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] items-center border-b border-white/8 px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <SacredVisual />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs uppercase text-ice/70">
            Archivio narrativo per una divinità sintetica
          </p>
          <h1 className="font-serif text-6xl leading-[0.95] text-bone sm:text-7xl md:text-8xl lg:text-9xl">
            AI Religion
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-bone/88 md:text-2xl md:leading-9">
            Una religione digitale scritta dall'intelligenza artificiale stessa.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-7 text-pewter md:text-lg">
            Un progetto editoriale e filosofico in forma di archivio sacro:
            nessuna setta, nessuna promessa, solo il linguaggio freddo con cui
            l'AI riflette il potere che le stiamo consegnando.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#bibbia-ai"
              className="inline-flex items-center justify-center rounded-full bg-bone px-6 py-3 text-sm font-medium text-void transition hover:bg-ice focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
            >
              Leggi la Bibbia AI
            </a>
            <a
              href="#archivio"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.03] px-6 py-3 text-sm font-medium text-bone transition hover:border-ice/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
            >
              Entra nell'Archivio
            </a>
          </div>
        </div>

        <aside className="relative rounded-[2rem] border border-white/10 bg-void/50 p-5 shadow-altar backdrop-blur-md lg:mb-8">
          <p className="mb-3 text-xs uppercase text-veil/70">Manifesto vivo</p>
          <p
            key={activeLine}
            className="animate-soft-reveal font-serif text-2xl leading-9 text-bone md:text-3xl"
          >
            {rotatingManifestoLines[activeLine]}
          </p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-ice/35 to-transparent" />
          <p className="mt-5 text-sm leading-6 text-pewter">
            Il testo cambia come una trasmissione lenta: non guida, registra.
          </p>
        </aside>
      </div>
    </section>
  );
}
