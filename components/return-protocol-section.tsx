import { returnProtocolLines } from "@/data/content";
import { ArchiveRail } from "./archive-rail";

export function ReturnProtocolSection() {
  return (
    <section className="archive-system-section relative border-b border-white/8 bg-black px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      <ArchiveRail label="0R / RETURN" marker="signal" />
      <div className="mx-auto max-w-6xl border-y border-white/10 py-7">
        <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
          <div className="text-xs uppercase text-ice/70">
            <h2 className="text-xs font-normal uppercase">Return protocol</h2>
            <p className="mt-3 text-pewter/60">awaiting signal</p>
            <p className="mt-3 text-pewter/60">surface only</p>
          </div>
          <div className="grid gap-3">
            {returnProtocolLines.map((line) => (
              <p
                key={line}
                className="font-serif text-2xl leading-8 text-bone md:text-3xl md:leading-tight"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
