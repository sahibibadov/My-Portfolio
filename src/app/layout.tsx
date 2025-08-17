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
    "Ibadov Sahib",
    "sahib",
    "ibadov",
    "ibadov sahib",
    "sahib ibadov",
    "Sahib",
    "sahib",
    "ibadov",
    "developer",
    "web developer",
    "Ibadov",
    "Sahib Ibadov Portfolio",
    "Portfolio Sahib Ibadov",
    "Ibadov Sahib Portfolio",
    "Portfolio",
    "ibadov sahib portfolio",
    "sahib dev",
    "sahib ibadov dev",
    "ibadov dev",
    "ibadov sahib dev",
    "Sahib dev",
    "Ibadov dev",
    "Fullstack Developer",
    "Web Developer",
    "Developer",
    "Sahib Ibadov developer",
    "Ibadov Sahib developer",
    "Frontend Developer",
    "Projects",
    "Backend Developer",
    "React",
    "Reactjs",
    "Nextjs",
    "iOS Developer",
    "iOS developer",
    "iOS app developer",
    "iOS uygulama geliştirici",
    "iOS development",
    "Swift",
    "Swift developer",
    "SwiftUI",
    "UIKit",
    "Xcode",
    "Apple developer",
    "Mobile developer",
    "iOS engineer",
    "iOS yazılım geliştirici",
    "iOS programcı",
    "iPhone developer",
    "iPad developer",
    "App Store",
    "iOS uygulama",
    "iOS projeleri",
    "iOS portfolio",
    "iOS uygulama portföyü",
    "iOS mobile developer",
    "iOS software developer",
    "iOS app portfolio",
    "iOS app projects",
  ],
  openGraph: {
    title: "Sahib Ibadov | Home",
    description: "Welcome to the personal portfolio of Sahib Badov, showcasing projects and skills.",
    url: "https://sahibibadov.com",
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
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-dvh overflow-x-hidden font-mono antialiased flex flex-col",
            geistSans.variable,
            geistMono.variable,
          )}
          suppressHydrationWarning
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
