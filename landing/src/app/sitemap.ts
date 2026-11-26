import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Se genera una sola vez al compilar (exportación estática).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
