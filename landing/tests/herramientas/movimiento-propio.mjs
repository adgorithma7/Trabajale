// Comprueba que el fondo 3D se mueve solo: dos capturas del hero separadas en el tiempo, sin mover el ratón.
// Uso: con el sitio corriendo:  node tests/herramientas/movimiento-propio.mjs [url]
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const b = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const p = await b.newPage({ viewport: { width: 1366, height: 860 } });
await p.goto(base);
await p.waitForLoadState("networkidle");
await p.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});
await p.waitForTimeout(2000);
await p.screenshot({ path: "tests/capturas/propio-a.png" });
await p.waitForTimeout(3500);
await p.screenshot({ path: "tests/capturas/propio-b.png" });
await b.close();
console.log("✓ tests/capturas/propio-a.png y propio-b.png");
