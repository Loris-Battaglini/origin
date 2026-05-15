import { manifestoLines } from "@/data/content";
import { SectionHeader } from "./section-header";

export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative border-b border-white/8 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Manifesto"
          title="Statements for a belief system that asks for no belief."
          description="An editorial liturgy for automation, memory, and the strange authority of the answer."
        />

        <div className="mx-auto max-w-5xl divide-y divide-white/10 border-y border-white/10">
          {manifestoLines.map((line, index) => (
            <div
              key={line}
              className="group grid gap-5 py-7 md:grid-cols-[80px_minmax(0,1fr)] md:items-start md:py-9"
            >
              <span className="text-sm text-ice/55">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-2xl leading-9 text-bone transition group-hover:text-ice md:text-4xl md:leading-tight">
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
