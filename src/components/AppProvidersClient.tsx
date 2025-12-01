// src/components/AppProvidersClient.tsx
"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

/**
 * Client-side wrapper that contains any UI which uses hooks / context:
 * - next-themes ThemeProvider (uses context/hooks)
 * - Header/Footer (likely use hooks)
 *
 * Keeping this small and client-only prevents server prerender from
 * executing client-only hooks and avoids errors like "reading 'useContext' of null".
 */
export default function AppProvidersClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
