import { archiveRecords } from "@/data/content";
import { ArchiveRail } from "./archive-rail";
import { SectionHeader } from "./section-header";

export function ArchiveSection() {
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
          description="Observations on automation, society, labor, and technological philosophy, indexed as fragments of a larger system."
          align="left"
        />

        <div className="mx-auto max-w-6xl border-y border-white/10">
          {archiveRecords.map((record) => (
            <article
              key={record.id}
              className="record-entry group grid gap-6 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 md:py-10"
            >
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
                <a
                  href="#newsletter"
                  className="mt-7 inline-flex w-fit items-center rounded-full border border-white/12 px-5 py-2.5 text-sm text-bone transition group-hover:border-veil/45 group-hover:text-veil focus:outline-none focus:ring-2 focus:ring-veil focus:ring-offset-2 focus:ring-offset-void"
                >
                  Read full record
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
