// Mide la altura de cada sección de la portada en un viewport móvil. Uso: node tests/herramientas/alturas.mjs
import { chromium, devices } from "@playwright/test";
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices["Pixel 7"], reducedMotion: "reduce" });
const p = await ctx.newPage();
await p.goto(process.env.URL ?? "http://localhost:3399/");
await p.waitForLoadState("networkidle");
const r = await p.evaluate(() => {
  const filas = [];
  for (const el of document.querySelectorAll("main > *, header, footer")) {
    const rect = el.getBoundingClientRect();
    filas.push({ id: el.id || el.tagName.toLowerCase() + (el.className ? "." + String(el.className).split(" ")[0] : ""), alto: Math.round(rect.height) });
  }
  return { total: document.documentElement.scrollHeight, ancho: innerWidth, filas };
});
console.log(JSON.stringify(r, null, 1));
await b.close();
