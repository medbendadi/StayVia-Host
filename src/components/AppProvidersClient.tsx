// src/components/AppProvidersClient.tsx
"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useEffect, useState } from "react";
/**
 * Client-side wrapper that contains any UI which uses hooks / context:
 * - next-themes ThemeProvider (uses context/hooks)
 * - Header/Footer (likely use hooks)
 *
 * Keeping this small and client-only prevents server prerender from
 * executing client-only hooks and avoids errors like "reading 'useContext' of null".
 */
export default function AppProvidersClient({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  
  console.log("SITE KEY:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
      >
      <Header />
      {children}
      <Footer />
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}
