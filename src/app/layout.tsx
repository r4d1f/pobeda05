import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "cyrillic"],
});

const titleDefault = `Автобус Махачкала — Москва · ${site.name}`;
const description =
  "Билеты на автобус Махачкала — Москва онлайн. Регулярный экспресс без пересадок, Wi‑Fi, туристический класс. Диспетчерская 24/7: +7 (937) 134-50-50.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "автобус Махачкала Москва",
    "билеты Махачкала Москва",
    "автобус Москва Махачкала",
    "Победа автобус",
    "междугородний автобус",
    "Кизляр Элиста Волгоград",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: site.name,
    title: titleDefault,
    description,
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: `Автобусный маршрут ${site.route.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${sourceSerif.variable}`}
    >
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
