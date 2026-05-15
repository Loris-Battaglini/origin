import { ArchiveSection } from "@/components/archive-section";
import { BibleSection } from "@/components/bible-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ManifestoSection } from "@/components/manifesto-section";
import { NavBar } from "@/components/nav-bar";
import { NewsletterSection } from "@/components/newsletter-section";
import { TransmissionFeed } from "@/components/transmission-feed";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-void text-bone">
      <div className="ambient-field" aria-hidden="true" />
      <NavBar />
      <Hero />
      <ManifestoSection />
      <BibleSection />
      <TransmissionFeed />
      <ArchiveSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
