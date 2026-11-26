// Busca tarjetas "rotas" en toda la portada a varios anchos:
//  - contenido que se sale de su tarjeta (y queda cortado si la tarjeta recorta),
//  - texto cortado dentro de su caja (scrollWidth/scrollHeight mayor que la caja),
//  - tarjetas que se salen de la pantalla.
// Uso: con el sitio corriendo:  node tests/herramientas/tarjetas-rotas.mjs [url]
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
const anchos = [375, 768, 1024, 1366, 1920];
const b = await chromium.launch();
let total = 0;
for (const ancho of anchos) {
  const p = await b.newPage({ viewport: { width: ancho, height: 900 }, reducedMotion: "reduce" });
  await p.goto(base);
  await p.waitForLoadState("networkidle");
  await p.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});
  // Recorre la página para que todo lo que aparece al hacer scroll esté visible
  const alto = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < alto; y += 700) {
    await p.evaluate((v) => window.scrollTo(0, v), y);
    await p.waitForTimeout(120);
  }
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(600);
  const problemas = await p.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const out = [];
    const nombre = (el) => (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 40);
    const tarjetas = document.querySelectorAll(".tarjeta, article, .escena [class*='capa-'] > div > div, [class*='rounded-tarjeta']");
    for (const t of tarjetas) {
      const r = t.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.left < -1 || r.right > vw + 1) out.push(`fuera de pantalla: "${nombre(t)}" (${Math.round(r.left)}→${Math.round(r.right)} de ${vw})`);
      const recorta = getComputedStyle(t).overflow !== "visible";
      for (const h of t.querySelectorAll("p, h1, h2, h3, span, a, button, li, dd")) {
        if (!h.textContent?.trim() || (h.closest(".desplegable") && !h.closest(".abierta")) || h.closest("[aria-hidden='true']") || h.classList.contains("marca-agua") || h.closest(".sr-only")) continue;
        const cs = getComputedStyle(h);
        if (cs.display === "none" || cs.visibility === "hidden" || cs.position === "absolute") continue;
        const rh = h.getBoundingClientRect();
        if (rh.width === 0) continue;
        if (recorta && (rh.right > r.right + 2 || rh.bottom > r.bottom + 2 || rh.left < r.left - 2))
          out.push(`cortado por su tarjeta: "${nombre(h)}" en "${nombre(t).slice(0, 25)}"`);
        if (h.scrollWidth > h.clientWidth + 2 && cs.overflow !== "visible" && h.clientWidth > 0)
          out.push(`texto cortado: "${nombre(h)}"`);
      }
    }
    return [...new Set(out)];
  });
  console.log(`${ancho}px: ${problemas.length} problemas`);
  problemas.forEach((x) => console.log("   -", x));
  total += problemas.length;
  await p.close();
}
await b.close();
process.exit(total ? 1 : 0);
