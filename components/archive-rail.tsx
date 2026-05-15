type ArchiveRailProps = {
  label: string;
  marker: string;
};

export function ArchiveRail({ label, marker }: ArchiveRailProps) {
  return (
    <div className="archive-rail" aria-hidden="true">
      <span className="archive-rail-label">{label}</span>
      <span className="archive-rail-marker archive-pulse" />
      <span className="archive-rail-code">{marker}</span>
    </div>
  );
}
