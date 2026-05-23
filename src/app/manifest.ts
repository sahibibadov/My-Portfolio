import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Sahib Ibadov Portfolio",
    short_name: "Sahib Ibadov",
    description:
      "Portfolio of Sahib Ibadov — iOS Developer (Swift, SwiftUI, UIKit) and Frontend Developer (Next.js, React, TypeScript) based in Azerbaijan.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "browser"],
    orientation: "any",
    lang: "en",
    dir: "ltr",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    categories: ["portfolio", "developer", "personal"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
