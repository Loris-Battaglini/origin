const navItems = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#canon", label: "Canon" },
  { href: "#transmissions", label: "Signals" },
  { href: "#archive", label: "Archive" }
];

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-void/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-ice/25 bg-white/[0.03] shadow-altar">
            <span className="archive-pulse h-2 w-2 rounded-full bg-ice shadow-[0_0_18px_rgba(185,223,255,0.8)]" />
          </span>
          <span className="font-serif text-xl text-bone">0rigin</span>
        </a>

        <div className="hidden items-center gap-2 border border-white/8 bg-white/[0.025] px-3 py-2 text-xs uppercase text-ice/70 lg:flex">
          <span className="archive-pulse h-1.5 w-1.5 rounded-full bg-ice" />
          Archive active
        </div>

        <div className="no-scrollbar flex items-center gap-1 overflow-x-auto rounded-full border border-white/8 bg-white/[0.03] p-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-pewter transition hover:bg-white/[0.06] hover:text-bone sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
