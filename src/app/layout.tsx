import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import Header from "@/components/shared/navbar/header";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import { BackgroundParticle } from "@/components/shared/particle/bg-particle";
import ScrollToTop from "@/components/shared/scroll-to-top";
import SmoothScroll from "@/provider/smooth-scroll-provider";
import FlareCursor from "@/components/shared/flare-cursor";
import { Toaster } from "@/components/ui/sonner";
import Container from "@/components/shared/container";

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
  keywords: [
    "Sahib Ibadov",
    "Sahib",
    "Ibadov",
    "Sahib Ibadov Portfolio",
    "Portfolio",
    "Frontend Developer",
    "Projects",
    "Backend Developer",
    "React",
    "Reactjs",
    "Nextjs",
  ],
  openGraph: {
    title: "Sahib Ibadov | Home",
    description: "Welcome to the personal portfolio of Sahib Badov, showcasing projects and skills.",
    url: "https://sahibibadov.vercel.app",
    siteName: "Sahib Ibadov Portfolio",
    images: [
      {
        url: "/src/app/favicon.ico",
        width: 500,
        height: 500,
        alt: "Sahib Ibadov Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export const fetchCache = "force-cache";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            "min-h-dvh overflow-x-hidden font-mono antialiased flex flex-col",
            geistSans.variable,
            geistMono.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <SmoothScroll>
              <BackgroundParticle />
              <FlareCursor />
              <Toaster position="top-right" closeButton richColors />
              <Header>
                <Navbar />
              </Header>
              <Container className="flex-1 flex flex-col">{children}</Container>
              <Footer />
              <ScrollToTop />
            </SmoothScroll>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
