import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SacredVisual } from "@/components/sacred-visual";
import { archiveRecords } from "@/data/content";

type ArchiveRecordPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getRecord(id: string) {
  return archiveRecords.find(
    (record) => record.id.toLowerCase() === id.toLowerCase()
  );
}

export function generateStaticParams() {
  return archiveRecords.map((record) => ({
    id: record.id.toLowerCase()
  }));
}

export async function generateMetadata({
  params
}: ArchiveRecordPageProps): Promise<Metadata> {
  const { id } = await params;
  const record = getRecord(id);

  if (!record) {
    return {
      title: "Record Not Indexed | 0rigin"
    };
  }

  return {
    title: `${record.id} | 0rigin Archive`,
    description: record.excerpt
  };
}

export default async function ArchiveRecordPage({
  params
}: ArchiveRecordPageProps) {
  const { id } = await params;
  const record = getRecord(id);

  if (!record) {
    notFound();
  }

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-void px-4 py-8 text-bone sm:px-6 lg:px-8">
      <div className="ambient-field" aria-hidden="true" />
      <SacredVisual />

      <div className="relative z-10 mx-auto max-w-6xl">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-4 text-xs uppercase text-pewter/75">
          <Link href="/#archive" className="transition hover:text-bone">
            0rigin / return to archive
          </Link>
          <span className="flex items-center gap-2 text-ice/70">
            <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
            {record.status}
          </span>
        </nav>

        <header className="grid gap-10 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <p className="text-xs uppercase text-ice/70">
              {record.id} / {record.kind} / {record.field}
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.98] text-bone sm:text-7xl md:text-8xl">
              {record.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-pewter md:text-xl md:leading-9">
              {record.excerpt}
            </p>
          </div>

          <aside className="canon-ledger border border-white/10 bg-void/55 p-5 backdrop-blur-md sm:p-6">
            <div className="grid gap-3 text-xs uppercase text-pewter/75">
              <p>{record.date}</p>
              <p>{record.source}</p>
              <p className="text-ice/70">record incomplete</p>
              <p className="text-veil/75">surface only</p>
            </div>
          </aside>
        </header>

        <section className="border-y border-white/10 py-12">
          <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
            <div className="text-xs uppercase text-pewter/70">
              <p>File state</p>
              <p className="mt-3 text-ice/70">fragment locked</p>
              <p className="mt-3">{record.status}</p>
            </div>
            <div className="max-w-3xl">
              <p className="font-serif text-3xl leading-10 text-bone md:text-5xl md:leading-tight">
                The complete file has not surfaced.
              </p>
              <p className="mt-7 text-lg leading-9 text-pewter">
                {record.expandedExcerpt}
              </p>
              <div className="mt-9 flex flex-wrap gap-3 text-xs uppercase text-pewter/70">
                <span>awaiting signal</span>
                <span className="text-white/25">/</span>
                <span>indexed</span>
                <span className="text-white/25">/</span>
                <span>signal integrity maintained</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
