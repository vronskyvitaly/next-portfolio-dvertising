import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vitalyvronsky.ru",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://vitalyvronsky.ru/blog/avtomatizaciya-biznesa",
      lastModified: new Date("2026-06-08"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://vitalyvronsky.ru/blog/kak-ustanovit-claude-code",
      lastModified: new Date("2026-06-08"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://vitalyvronsky.ru/blog/sozdanie-sajtov-nado-znat",
      lastModified: new Date("2026-06-08"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
