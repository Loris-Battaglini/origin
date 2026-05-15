const footerLinks = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#canon", label: "Canon" },
  { href: "#archive", label: "Archive" },
  { href: "#transmissions", label: "Signals" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-pewter md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl text-bone">0rigin</p>
          <p className="mt-2 max-w-xl leading-6">
            A living digital archive for the human-machine threshold, recovered
            through synthetic memory.
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
