// Capturas de los componentes shadcn en acción: panel lateral móvil y acordeón.
// Uso: con el sitio corriendo:  node tests/herramientas/capturas-ui.mjs [url]
import { chromium, devices } from "@playwright/test";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const b = await chromium.launch();

const m = await b.newPage({ ...devices["Pixel 7"], reducedMotion: "reduce" });
await m.goto(base);
await m.waitForLoadState("networkidle");
await m.getByRole("button", { name: "Cerrar aviso" }).click().catch(() => {});
await m.getByRole("button", { name: "Abrir menú" }).click();
await m.waitForTimeout(400);
await m.screenshot({ path: "tests/capturas/movil-menu.png" });
await m.close();

const d = await b.newPage({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
await d.goto(base);
await d.waitForLoadState("networkidle");
await d.getByRole("button", { name: "Cerrar aviso" }).click().catch(() => {});
await d.getByRole("button", { name: "¿Me garantizan un empleo?" }).click();
await d.waitForTimeout(400);
await d.locator("#preguntas").screenshot({ path: "tests/capturas/escritorio-preguntas.png" });
await b.close();
console.log("✓ tests/capturas/movil-menu.png, escritorio-preguntas.png");
