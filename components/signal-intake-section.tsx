import { ArchiveRail } from "./archive-rail";

export function SignalIntakeSection() {
  return (
    <section
      id="signal-intake"
      className="archive-system-section relative px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <ArchiveRail label="0R / INTAKE" marker="open" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice/40 to-transparent" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase text-ice/70">Signal intake</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-bone md:text-6xl">
          Leave a return address at the edge of 0rigin.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-pewter">
          Receive future transmissions when the archive surfaces new records.
          The signal will know where to return.
        </p>

        <form className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
          {/* Future integration point: connect submit handling to n8n/Supabase/Notion or another signal provider. */}
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="address@domain.net"
            className="min-h-12 flex-1 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm text-bone outline-none transition placeholder:text-pewter/55 focus:border-ice/45 focus:ring-2 focus:ring-ice/20"
          />
          <button
            type="button"
            className="min-h-12 rounded-full bg-bone px-6 text-sm font-medium text-void transition hover:bg-ice focus:outline-none focus:ring-2 focus:ring-ice focus:ring-offset-2 focus:ring-offset-void"
          >
            Open Channel
          </button>
        </form>
      </div>
    </section>
  );
}
