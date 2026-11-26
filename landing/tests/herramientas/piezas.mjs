// Genera las piezas gráficas (OG, cuadrado, historia) a PNG con el navegador real.
// Uso: con el sitio corriendo (npm start o npm run dev):  node tests/herramientas/piezas.mjs [url]
// Salida: piezas/*.png y public/og.png (la vista previa al compartir el enlace).
import { chromium } from "@playwright/test";
import { mkdirSync, copyFileSync } from "node:fs";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const piezas = {
  og: { ancho: 1200, alto: 630 },
  cuadrado: { ancho: 1080, alto: 1080 },
  historia: { ancho: 1080, alto: 1920 },
};

mkdirSync("piezas", { recursive: true });
const navegador = await chromium.launch();
for (const [nombre, { ancho, alto }] of Object.entries(piezas)) {
  const pagina = await navegador.newPage({ viewport: { width: ancho + 48, height: alto + 48 }, deviceScaleFactor: 1 });
  await pagina.goto(`${base}/piezas/${nombre}`);
  await pagina.waitForLoadState("networkidle");
  await pagina.evaluate(() => document.fonts.ready);
  const el = pagina.locator("#pieza");
  await el.screenshot({ path: `piezas/${nombre}.png`, type: "png" });
  console.log(`✓ piezas/${nombre}.png (${ancho}×${alto})`);
  await pagina.close();
}
await navegador.close();
copyFileSync("piezas/og.png", "public/og.png");
console.log("✓ public/og.png actualizado");
