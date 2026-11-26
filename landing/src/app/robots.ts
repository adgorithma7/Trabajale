import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Se genera una sola vez al compilar (exportación estática).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/piezas" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
