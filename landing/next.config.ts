import type { NextConfig } from "next";

/**
 * Exportación estática: `npm run build` genera la web completa en `out/`
 * (HTML, CSS, JS e imágenes), sin servidor propio. `npm run publicar` la copia a `../sitio`,
 * que es la carpeta que Cloudflare Pages publica (ver docs/03-publicacion.md).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
