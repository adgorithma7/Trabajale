// Fotogramas del movimiento: hero al cargar y con scroll, la franja, y el teléfono de WhatsApp girando.
// Uso: con el sitio corriendo:  node tests/herramientas/capturas-movimiento.mjs [url]
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? process.env.URL ?? "http://localhost:3399";
mkdirSync("tests/capturas", { recursive: true });
const b = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const p = await b.newPage({ viewport: { width: 1366, height: 860 } });
await p.goto(base);
await p.waitForLoadState("networkidle");
await p.getByRole("button", { name: /Rechazar/ }).click().catch(() => {});

// Entrada del titular (a mitad y al final)
await p.waitForTimeout(250);
await p.screenshot({ path: "tests/capturas/mov-1-entrada.png" });
await p.mouse.move(1100, 300);
await p.waitForTimeout(1800);
await p.screenshot({ path: "tests/capturas/mov-2-cursor.png" });

// Parallax del hero con scroll
await p.mouse.wheel(0, 420);
await p.waitForTimeout(900);
await p.screenshot({ path: "tests/capturas/mov-3-scroll.png" });

// Teléfono de WhatsApp: entrando y centrado
const tel = p.locator("#whatsapp");
const caja = await tel.boundingBox();
await p.evaluate((y) => window.scrollTo(0, y), caja.y - 760);
await p.waitForTimeout(900);
await p.screenshot({ path: "tests/capturas/mov-4-telefono-entrando.png" });
await p.evaluate((y) => window.scrollTo(0, y), caja.y - 60);
await p.waitForTimeout(1200);
await p.screenshot({ path: "tests/capturas/mov-5-telefono-centrado.png" });
await b.close();
console.log("✓ tests/capturas/mov-*.png");
