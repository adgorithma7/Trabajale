// Comprueba el color del texto de la pestaña activa del filtro de vacantes.
import { chromium } from "@playwright/test";
const base = process.argv[2] ?? "http://localhost:3399";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1366, height: 900 }, reducedMotion: "reduce" });
await p.goto(base);
await p.waitForLoadState("networkidle");
await p.getByRole("tab", { name: /Remoto/ }).click();
await p.waitForTimeout(400);
const info = await p.getByRole("tab", { name: /Remoto/ }).evaluate((el) => {
  const cs = getComputedStyle(el);
  return { state: el.getAttribute("data-state"), color: cs.color, bg: cs.backgroundColor, clase: el.className.slice(0, 400) };
});
console.log(JSON.stringify(info, null, 1));
await b.close();
