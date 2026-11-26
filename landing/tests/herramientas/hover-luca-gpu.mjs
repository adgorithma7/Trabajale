// Igual que hover-luca.mjs pero en un Chrome real con GPU ya abierto con --remote-debugging-port.
// Uso: node tests/herramientas/hover-luca-gpu.mjs [url] [puerto-cdp]
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? "http://localhost:3001";
const puerto = process.argv[3] ?? "9231";
const b = await chromium.connectOverCDP(`http://127.0.0.1:${puerto}`);
const ctx = b.contexts()[0] ?? (await b.newContext());
const p = await ctx.newPage();
await p.setViewportSize({ width: 1366, height: 900 });
await p.goto(base);
await p.waitForLoadState("networkidle");
await p.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});
await p.waitForTimeout(1500);
const gpu = await p.evaluate(() => {
  const gl = document.createElement("canvas").getContext("webgl");
  const ext = gl && gl.getExtension("WEBGL_debug_renderer_info");
  return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "sin webgl";
});
console.log("GPU:", gpu);
const tarjeta = p.locator(".escena article").first();
const r = await tarjeta.boundingBox();
const escena = p.locator(".escena").first();
const puntos = [
  ["fuera", 40, 860],
  ["centro", r.x + r.width / 2, r.y + r.height / 2],
  ["arriba-izq", r.x + 12, r.y + 12],
  ["abajo-der", r.x + r.width - 12, r.y + r.height - 12],
];
for (const [n, x, y] of puntos) {
  await p.mouse.move(x, y, { steps: 10 });
  await p.waitForTimeout(150);
  await escena.screenshot({ path: `tests/capturas/gpu-${n}-a.png` });
  await p.waitForTimeout(800);
  await escena.screenshot({ path: `tests/capturas/gpu-${n}-b.png` });
}
await p.close();
await b.close();
console.log("✓ tests/capturas/gpu-*.png");
