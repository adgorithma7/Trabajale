// Captura el header a varios anchos y la sección de cultura. Uso: node tests/herramientas/capturas-header.mjs [url]
import { chromium } from "@playwright/test";
const base = process.argv[2] ?? "http://localhost:3399";
const b = await chromium.launch();
for (const ancho of [1024, 1280, 1366, 1536]) {
  const p = await b.newPage({ viewport: { width: ancho, height: 160 }, reducedMotion: "reduce" });
  await p.goto(base);
  await p.waitForLoadState("networkidle");
  await p.getByRole("button", { name: "Cerrar aviso" }).click().catch(() => {});
  await p.locator("header").screenshot({ path: `tests/capturas/header-${ancho}.png` });
  await p.close();
}
const d = await b.newPage({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
await d.goto(base);
await d.waitForLoadState("networkidle");
await d.locator("#cultura").screenshot({ path: "tests/capturas/escritorio-cultura.png" });
await b.close();
console.log("✓ header-*.png y escritorio-cultura.png");
