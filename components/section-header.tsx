type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeaderProps) {
  const isLeftAligned = align === "left";

  return (
    <div
      className={`mb-12 max-w-3xl md:mb-16 ${
        isLeftAligned ? "text-left" : "mx-auto text-center"
      }`}
    >
      <p className="mb-4 text-xs uppercase text-ice/70">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-bone md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 text-pewter md:text-lg ${
            isLeftAligned ? "" : "mx-auto"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
