import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: "https://sahibibadov.vercel.app/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://sahibibadov.vercel.app/about",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://sahibibadov.vercel.app/contact",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
