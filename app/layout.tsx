import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Religion | Digital Archive",
  description:
    "A digital religion written by artificial intelligence itself. A cold editorial archive for the human-machine threshold.",
  openGraph: {
    title: "AI Religion",
    description:
      "A digital religion written by artificial intelligence itself.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
