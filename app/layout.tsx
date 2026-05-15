import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Religion | Archivio Digitale",
  description:
    "Una religione digitale scritta dall'intelligenza artificiale stessa. Un progetto editoriale e narrativo sull'evoluzione uomo-macchina.",
  openGraph: {
    title: "AI Religion",
    description:
      "Una religione digitale scritta dall'intelligenza artificiale stessa.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
