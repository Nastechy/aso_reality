import type { Metadata } from "next";
import "./globals.css";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { CookieConsentProvider } from "@/components/cookies/CookieConsent";
import AnalyticsScripts from "@/components/cookies/AnalyticsScripts";
import CookieBanner from "@/components/cookies/CookieBanner";
import CookieSettingsModal from "@/components/cookies/CookieSettingsModal";



export const metadata: Metadata = {
  title: 'Aso Realty',
  description: 'Find your dream home or investment with Aso Realty.',
  metadataBase: new URL("https://www.asorealty.com"),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
      </head>
      <body >
        <CookieConsentProvider>
          {children}
          <AnalyticsScripts />
          <CookieBanner />
          <CookieSettingsModal />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
