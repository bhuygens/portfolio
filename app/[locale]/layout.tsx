import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import ClientRootLayout from "@/app/client-root-layout";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  if (!isLocale(locale)) notFound();
  return <ClientRootLayout locale={locale}>{children}</ClientRootLayout>;
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const isFr = locale === "fr";
  return {
    openGraph: {
      locale: isFr ? "fr_FR" : "en_US",
    },
  };
}
