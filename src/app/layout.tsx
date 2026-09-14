import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import { siteUrl } from "@/app/site";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Contact Form";
const description =
  "An accessible contact form with inline validation, keyboard-operable controls and a success toast confirming the message was sent.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e0f1e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karla.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
