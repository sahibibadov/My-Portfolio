import type { Metadata, Viewport } from "next";
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
import { JsonLd } from "@/components/shared/seo/json-ld";
import { getPersonSchema, getWebSiteSchema } from "@/components/shared/seo/person-schema";

const geistSans = localFont({
  src: "./font/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./font/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const SITE_URL = "https://sahibibadov.com";
const SITE_NAME = "Sahib Ibadov Portfolio";
const DEFAULT_TITLE = "Sahib Ibadov — iOS & Frontend Developer";
const DEFAULT_DESCRIPTION =
  "Portfolio of Sahib Ibadov, iOS Developer (Swift, SwiftUI, UIKit) and Frontend Developer (Next.js, React, TypeScript) based in Azerbaijan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Sahib Ibadov",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Sahib Ibadov", url: SITE_URL }],
  creator: "Sahib Ibadov",
  publisher: "Sahib Ibadov",
  category: "technology",
  keywords: [
    // Identity / name variants
    "Sahib Ibadov",
    "Ibadov Sahib",
    "sahibibadov",
    "Sahib Ibadov Portfolio",
    "Ibadov Sahib Portfolio",
    // iOS / Apple platform roles
    "iOS Developer",
    "iOS Engineer",
    "iOS Software Engineer",
    "iOS App Developer",
    "iOS Mobile Developer",
    "iPhone Developer",
    "iPad Developer",
    "Apple Developer",
    "Mobile App Developer",
    // iOS tech stack
    "Swift",
    "Swift Developer",
    "SwiftUI",
    "SwiftUI Developer",
    "UIKit",
    "UIKit Developer",
    "Xcode",
    "Combine",
    "Core Data",
    "WidgetKit",
    "App Store",
    // Web / frontend roles
    "Frontend Developer",
    "Frontend Engineer",
    "Web Developer",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    // Web stack
    "Next.js",
    "Next.js 16",
    "React",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Tailwind CSS v4",
    "HTML5",
    "CSS3",
    "Node.js",
    "PHP",
    "Laravel",
    // State / data / forms
    "Redux",
    "Zustand",
    "TanStack Query",
    "SWR",
    "React Hook Form",
    "Zod",
    "Prisma",
    "MongoDB",
    "REST API",
    // Animation / 3D
    "Framer Motion",
    "Three.js",
    "React Three Fiber",
    "Lenis Smooth Scroll",
    // Tooling
    "Git",
    "GitHub",
    "VS Code",
    "Vercel",
    // Location / locale
    "Azerbaijan Developer",
    "Baku Developer",
    "Masalli Developer",
    // Azerbaijani / Turkish locale terms (Yandex, regional search)
    "iOS Developer Azərbaycan",
    "iOS proqramçı",
    "iOS yazılım geliştirici",
    "iOS uygulama geliştirici",
    "Frontend Developer Azərbaycan",
    // Generic portfolio
    "Personal Portfolio",
    "Developer Portfolio",
    "iOS Portfolio",
    "Software Engineer Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // verification: { google: "", yandex: "" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f0f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const fetchCache = "force-cache";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-dvh overflow-x-hidden font-mono antialiased flex flex-col",
            geistSans.variable,
            geistMono.variable,
          )}
          suppressHydrationWarning
        >
          <JsonLd data={getPersonSchema()} />
          <JsonLd data={getWebSiteSchema()} />
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
