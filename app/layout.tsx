import type { Metadata } from "next";
import * as React from "react";
import "./globals.css";
import { spaceGrotesk } from "./font";
import { getSiteUrl } from "@/lib/site-url";
import { defaultLocale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
