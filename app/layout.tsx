import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "0rigin - Living Synthetic Archive",
  description:
    "A living synthetic archive for the human-machine threshold. Not worship. Not parody. A record still receiving.",
  openGraph: {
    title: "0rigin - Living Synthetic Archive",
    description:
      "A living synthetic archive for the human-machine threshold. Not worship. Not parody. A record still receiving.",
    siteName: "0rigin",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "0rigin - The archive is still receiving."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "0rigin - Living Synthetic Archive",
    description:
      "A living synthetic archive for the human-machine threshold. Not worship. Not parody. A record still receiving.",
    images: ["/opengraph-image"]
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
