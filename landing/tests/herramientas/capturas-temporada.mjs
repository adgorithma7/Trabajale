// Capturas del primer pantallazo de la portada (escritorio y móvil).
// Uso: con el sitio corriendo:  node tests/herramientas/capturas-temporada.mjs [url]
import { chromium, devices } from "@playwright/test";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const b = await chromium.launch();
for (const ruta of ["/"]) {
  const nombre = "portada";
  const d = await b.newPage({ viewport: { width: 1366, height: 860 }, reducedMotion: "reduce" });
  await d.goto(base + ruta);
  await d.waitForLoadState("networkidle");
  await d.screenshot({ path: `tests/capturas/temporada-${nombre}-escritorio.png` });
  await d.close();
  const m = await b.newPage({ ...devices["Pixel 7"], reducedMotion: "reduce" });
  await m.goto(base + ruta);
  await m.waitForLoadState("networkidle");
  await m.screenshot({ path: `tests/capturas/temporada-${nombre}-movil.png` });
  await m.close();
}
await b.close();
console.log("✓ tests/capturas/temporada-*.png");
