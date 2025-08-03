import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: 'Aso Realty',
  description: 'Find your dream home or investment with Aso Realty.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
