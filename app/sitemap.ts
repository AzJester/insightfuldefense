import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://insightfuldefense.com/",
      lastModified: new Date("2026-07-12T00:00:00-07:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
