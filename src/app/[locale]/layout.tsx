import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppSticky from "@/components/layout/WhatsAppSticky";
import CookieBanner from "@/components/layout/CookieBanner";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moovafrik.com"),
  openGraph: {
    siteName: "MoovAfrik",
    locale: "fr_GA",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Nunito+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MoovAfrik",
              telephone: "+241076567587",
              address: {
                addressLocality: "Libreville",
                addressCountry: "GA",
              },
              url: "https://www.moovafrik.com",
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
          <WhatsAppSticky />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
