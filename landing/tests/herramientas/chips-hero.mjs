// Reproduce cómo se ven las tarjetas flotantes del hero a varios anchos y con el cursor en las esquinas.
// Uso: con el sitio corriendo:  node tests/herramientas/chips-hero.mjs [url]
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const b = await chromium.launch();
const anchos = [768, 1024, 1280, 1366];
for (const ancho of anchos) {
  const p = await b.newPage({ viewport: { width: ancho, height: 900 } });
  await p.goto(base);
  await p.waitForLoadState("networkidle");
  await p.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});
  await p.waitForTimeout(1500);
  const escena = p.locator(".escena").first();
  for (const [nombre, x, y] of [["centro", ancho / 2, 450], ["esquina", ancho - 5, 5], ["opuesta", 5, 890]]) {
    await p.mouse.move(x, y);
    await p.waitForTimeout(700);
    await escena.screenshot({ path: `tests/capturas/chips-${ancho}-${nombre}.png` });
  }
  // Medidas: ¿algún chip se parte en varias líneas o se sale de la pantalla?
  const medidas = await p.evaluate(() =>
    Array.from(document.querySelectorAll(".escena [class*='capa-'] > div > div")).map((el) => {
      const r = el.getBoundingClientRect();
      const lineas = Array.from(el.querySelectorAll("span.block")).map((s) => Math.round(s.getBoundingClientRect().height / 16));
      return { texto: el.textContent?.slice(0, 22), izq: Math.round(r.left), der: Math.round(r.right), alto: Math.round(r.height), lineas };
    }),
  );
  console.log(ancho, JSON.stringify(medidas));
  await p.close();
}
await b.close();
