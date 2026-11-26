// Fotogramas del carrusel 3D del inicio y del cierre (opción 1, a mitad del giro, opción 2) en escritorio y móvil.
// Uso: con el sitio corriendo:  node tests/herramientas/capturas-carrusel.mjs [url]
import { chromium, devices } from "@playwright/test";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const b = await chromium.launch();

async function fotos(p, prefijo, region) {
  const carrusel = p.getByRole("region", { name: region });
  await carrusel.scrollIntoViewIfNeeded();
  await p.waitForTimeout(1200);
  await carrusel.screenshot({ path: `tests/capturas/${prefijo}-1.png` });
  await carrusel.getByRole("button", { name: "Opción siguiente" }).click();
  await p.waitForTimeout(170);
  await carrusel.screenshot({ path: `tests/capturas/${prefijo}-giro.png` });
  await p.waitForTimeout(1300);
  await carrusel.screenshot({ path: `tests/capturas/${prefijo}-2.png` });
}

const d = await b.newPage({ viewport: { width: 1366, height: 900 } });
await d.goto(base);
await d.waitForLoadState("networkidle");
await d.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});
await fotos(d, "carrusel-inicio", "Lo que ofrece Trabájale");
await fotos(d, "carrusel-cierre", "Por qué registrarte");
await d.close();

const m = await b.newPage({ ...devices["Pixel 7"] });
await m.goto(base);
await m.waitForLoadState("networkidle");
await m.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});
await m.waitForTimeout(1200);
await m.screenshot({ path: "tests/capturas/carrusel-movil.png" });
await b.close();
console.log("✓ tests/capturas/carrusel-*.png");
