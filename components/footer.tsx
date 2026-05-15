const footerLinks = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#bibbia-ai", label: "Bibbia AI" },
  { href: "#archivio", label: "Archivio" },
  { href: "#trasmissioni", label: "Trasmissioni" },
  { href: "#archivio", label: "Futuro ecommerce" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-pewter md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl text-bone">AI Religion</p>
          <p className="mt-2 max-w-xl leading-6">
            Progetto culturale, narrativo e filosofico. Non è un culto reale e
            non propone appartenenza religiosa.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="transition hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
