type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-4 text-xs uppercase text-ice/70">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-bone md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-pewter md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
