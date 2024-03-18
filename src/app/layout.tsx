import type { Metadata } from "next";
import { Exo_2 as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import Header from "@/components/shared/navbar/header";
import Navabr from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import { BackgroundParticle } from "@/components/shared/particle/bg-particle";
import ScrollToTop from "@/components/shared/scroll-to-top";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={cn("min-h-dvh  font-sans antialiased flex flex-col", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <BackgroundParticle />
          <Header>
            <Navabr />
          </Header>
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
