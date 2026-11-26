// Pasa el cursor por varios puntos de la tarjeta de Luca y captura cada caso (con WebGL por software).
// Uso: con el sitio corriendo:  node tests/herramientas/hover-luca.mjs [url] [ancho]
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const ancho = Number(process.argv[3] ?? 1366);
const b = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const p = await b.newPage({ viewport: { width: ancho, height: 900 }, deviceScaleFactor: 1 });
await p.goto(base);
await p.waitForLoadState("networkidle");
await p.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});
await p.waitForTimeout(1500);
const tarjeta = p.locator(".escena article").first();
const r = await tarjeta.boundingBox();
const escena = p.locator(".escena").first();
const puntos = [
  ["centro", r.x + r.width / 2, r.y + r.height / 2],
  ["arriba-izq", r.x + 10, r.y + 10],
  ["abajo-der", r.x + r.width - 10, r.y + r.height - 10],
  ["mensaje", r.x + r.width / 2, r.y + r.height - 40],
];
for (const [n, x, y] of puntos) {
  await p.mouse.move(x, y, { steps: 8 });
  await p.waitForTimeout(900);
  await escena.screenshot({ path: `tests/capturas/hover-${ancho}-${n}.png` });
}
// Estado de la tarjeta bajo el cursor: transformaciones de sus contenedores
const info = await tarjeta.evaluate((el) => {
  const cadena = [];
  let n = el;
  while (n && cadena.length < 8) {
    const cs = getComputedStyle(n);
    if (cs.transform !== "none" || cs.transformStyle === "preserve-3d" || cs.perspective !== "none")
      cadena.push({ clase: String(n.className).slice(0, 50), transform: cs.transform.slice(0, 60), estilo3d: cs.transformStyle, perspectiva: cs.perspective });
    n = n.parentElement;
  }
  return cadena;
});
console.log(JSON.stringify(info, null, 1));
await b.close();
