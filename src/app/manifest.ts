import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sahib Ibadov Portfolio",
    short_name: "Portfolio",
    description: "Sahib Ibadov's personal portfolio showcasing projects and skills.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/src/app/favicon.ico",
        sizes: "any",
        type: ".ico",
      },
    ],
  };
}
