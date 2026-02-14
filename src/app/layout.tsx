// src/app/layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import AppProvidersClient from "@/components/AppProvidersClient";
import WhatsAppButton from "@/components/WhatsAppButton";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayVia - A Real Estate",
  description: "StayVia - A Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        {/* AppProvidersClient is a client component that contains ThemeProvider, Header, Footer */}
        <AppProvidersClient>
          {children}
          <WhatsAppButton phoneNumber="212610999299" />
          </AppProvidersClient>
      </body>
    </html>
  );
}
