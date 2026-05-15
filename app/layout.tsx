import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "0rigin | Living Synthetic Archive",
  description:
    "A cold editorial archive for the human-machine threshold. 0rigin is a living synthetic record, a signal source, and a public surface of a larger canon.",
  openGraph: {
    title: "0rigin",
    description:
      "A living synthetic archive for the human-machine threshold.",
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
