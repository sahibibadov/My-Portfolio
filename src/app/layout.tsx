import type { Metadata } from "next";
// import { GeistMono } from "geist/font/mono";
// import { GeistSans as GeistMono } from "geist/font/sans";

import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import Header from "@/components/shared/navbar/header";
import Navabr from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import { BackgroundParticle } from "@/components/shared/particle/bg-particle";
import ScrollToTop from "@/components/shared/scroll-to-top";
import SmoothScroll from "@/provider/smooth-scroll-provider";
import FlareCursor from "@/components/shared/flare-cursor";
import { Toaster } from "@/components/ui/sonner";
const geistSans = localFont({
  src: "./font/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./font/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
export const metadata: Metadata = {
  title: {
    default: "Sahib Ibadov | Portfolio",
    template: "%s | Sahib Ibadov",
  },
  description:
    "Portfolio page showcasing projects and experiences by Sahib Ibadov, a frontend developer based in Azerbaijan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-dvh font-mono   antialiased flex flex-col", geistSans.variable, geistMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            <BackgroundParticle />
            <FlareCursor />
            <Toaster position="top-right" closeButton richColors />
            <Header>
              <Navabr />
            </Header>
            {children}
            <Footer />
            <ScrollToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
