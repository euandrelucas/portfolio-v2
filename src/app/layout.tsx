import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "André Paiva | Desenvolvedor Full Stack",
    template: "%s | André Paiva",
  },
  description:
    "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Confira meu portfólio e blog sobre tecnologia.",
  keywords: [
    "André Paiva",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "André Paiva" }],
  creator: "André Paiva",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://andrepaiva.dev",
    siteName: "André Paiva | Desenvolvedor Full Stack",
    title: "André Paiva | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Confira meu portfólio e blog sobre tecnologia.",
    images: [
      {
        url: "https://andrepaiva.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "André Paiva - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "André Paiva | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Confira meu portfólio e blog sobre tecnologia.",
    images: ["https://andrepaiva.dev/twitter-image.jpg"],
    creator: "@andrepaivadev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* <head>
        <Script
          defer
          data-domain="andrepaiva.dev"
          src="https://plausible.noyevel.com/js/script.js"
        />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
