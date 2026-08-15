import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Contact Form";
const description =
  "An accessible contact form with inline validation and a success toast — a Frontend Mentor challenge built with Next.js, TypeScript, and Tailwind CSS.";
const siteUrl = "https://contact-form.abdelrhman-ahmed8881.workers.dev";

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
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
