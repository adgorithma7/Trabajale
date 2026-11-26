import { test, expect, type Page } from "@playwright/test";
import { site, banner } from "../src/config/site";
import { temporada, fechaCaducidad } from "../src/config/temporada";

/** Errores de consola que no nos importan (avisos de dependencias). */
const IGNORAR = [/THREE\.Clock/i, /Download the React DevTools/i, /trabajale\.ai\/reel\.mp4/i, /net::ERR_/i];

async function abrirInicio(page: Page) {
  const errores: string[] = [];
  page.on("console", (m) => {
    if (m.type() === "error" && !IGNORAR.some((r) => r.test(m.text()))) errores.push(m.text());
  });
  page.on("pageerror", (e) => errores.push(e.message));
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  return errores;
}

test.describe("Portada", () => {
  test("carga sin errores de consola y con el título correcto", async ({ page }) => {
    const errores = await abrirInicio(page);
    await expect(page).toHaveTitle(/Trabájale/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Empleos remotos o presenciales");
    expect(errores, errores.join("\n")).toEqual([]);
  });

  test("los medios principales apuntan al formulario y al WhatsApp", async ({ page }) => {
    await abrirInicio(page);
    const formularios = page.locator(`a[href="${site.formulario}"]`);
    const whatsapps = page.locator('a[href^="https://wa.me/584228722252"]');
    expect(await formularios.count()).toBeGreaterThanOrEqual(4);
    expect(await whatsapps.count()).toBeGreaterThanOrEqual(4);
    // El canal de Telegram se sigue promocionando para mantenerse informado
    expect(await page.locator(`a[href="${site.telegram}"]`).count()).toBeGreaterThanOrEqual(3);
    // Todos abren en pestaña nueva y sin filtrar el referer
    for (const a of await formularios.all()) {
      await expect(a).toHaveAttribute("target", "_blank");
      await expect(a).toHaveAttribute("rel", /noopener/);
    }
  });

  test("el banner superior se muestra y se puede cerrar", async ({ page }) => {
    test.skip(!banner.activo, "banner desactivado en la configuración");
    await abrirInicio(page);
    const region = page.getByRole("region", { name: "Aviso" });
    await expect(region).toBeVisible();
    await expect(region.getByRole("link", { name: new RegExp(banner.enlaceTexto) })).toHaveAttribute("href", banner.enlace);
    await region.getByRole("button", { name: "Cerrar aviso" }).click();
    await expect(region).toBeHidden();
    // Al recargar sigue cerrado
    await page.reload();
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("region", { name: "Aviso" })).toHaveCount(0);
  });

  test("el botón Enviar registro de la vista previa avanza al paso 2", async ({ page }) => {
    await abrirInicio(page);
    const enviar = page.getByRole("button", { name: /Enviar registro/ });
    await enviar.scrollIntoViewIfNeeded();
    await enviar.click();
    await expect(page.getByText("paso 2 / 4")).toBeVisible();
    await expect(page.getByRole("button", { name: /Cuéntanos tu experiencia/ })).toHaveAttribute("aria-current", "step");
    await page.getByRole("button", { name: /Guardar mi experiencia/ }).click();
    await expect(page.getByText("paso 3 / 4")).toBeVisible();
    await page.getByRole("button", { name: /Ver el canal de vacantes/ }).click();
    await expect(page.getByText("paso 4 / 4")).toBeVisible();
    await expect(page.getByRole("link", { name: /Unirme al canal @trabajale/ }).first()).toHaveAttribute("href", site.telegram);
  });

  test("el recorrido de pasos cambia la vista previa al tocar un paso", async ({ page }) => {
    await abrirInicio(page);
    const paso3 = page.getByRole("button", { name: /Te contactamos cuando haya una oportunidad/ });
    await paso3.scrollIntoViewIfNeeded();
    await paso3.click();
    await expect(paso3).toHaveAttribute("aria-current", "step");
    await expect(page.getByText("paso 3 / 4")).toBeVisible();
    await expect(page.locator("#como-funciona").getByText(/Luca · Trabájale/)).toBeVisible();
  });

  test("las garantías despliegan su detalle al tocarlas", async ({ page }) => {
    await abrirInicio(page);
    const tarjeta = page.getByRole("button", { name: /Gratis, siempre/ });
    await tarjeta.scrollIntoViewIfNeeded();
    await expect(tarjeta).toHaveAttribute("aria-expanded", "false");
    await tarjeta.click();
    await expect(tarjeta).toHaveAttribute("aria-expanded", "true");
    await expect(tarjeta.getByText(/reservar un puesto/)).toBeVisible();
  });

  test("las preguntas frecuentes se abren", async ({ page }) => {
    await abrirInicio(page);
    const pregunta = page.getByText("¿Me garantizan un empleo?");
    await pregunta.scrollIntoViewIfNeeded();
    await pregunta.click();
    await expect(page.getByText(/No podemos prometerlo/)).toBeVisible();
  });

  test("no hay scroll horizontal", async ({ page }) => {
    await abrirInicio(page);
    const desborde = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(desborde).toBeLessThanOrEqual(1);
  });

  test("captura de página completa", async ({ page }, info) => {
    // Con movimiento reducido todo el contenido está visible de inmediato (sin esperar a la animación de entrada)
    await page.emulateMedia({ reducedMotion: "reduce" });
    await abrirInicio(page);
    await page.getByRole("button", { name: "Cerrar aviso" }).click().catch(() => {});
    await page.screenshot({ path: `tests/capturas/portada-${info.project.name}.png`, fullPage: true });
  });
});

test.describe("Temporada", () => {
  test("la versión de diciembre no sigue activa después de su fecha", async () => {
    if (temporada.activa) {
      expect(new Date() <= fechaCaducidad(), `La temporada caducó el ${temporada.hasta}: pon activa:false en src/config/temporada.ts`).toBe(true);
    }
  });

  test("en temporada, el hero y el banner usan los textos de diciembre", async ({ page }) => {
    test.skip(!temporada.activa, "temporada apagada");
    await abrirInicio(page);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("para empezar en diciembre");
    await expect(page.getByText("Cúcuta")).toHaveCount(0);
    await expect(page.getByRole("region", { name: "Aviso" })).toContainText("temporada");
  });
});

test.describe("Solo web general", () => {
  test("/cucuta ya no existe y la portada no muestra vacantes", async ({ page }) => {
    const r = await page.goto("/cucuta");
    expect(r?.status()).toBe(404);
    await abrirInicio(page);
    await expect(page.locator("#empleos")).toHaveCount(0);
    await expect(page.getByRole("tablist", { name: "Filtrar vacantes por modalidad" })).toHaveCount(0);
  });
});

test.describe("Sin correo de contacto", () => {
  for (const ruta of ["/", "/privacidad", "/gracias"]) {
    test(`${ruta} no publica correo`, async ({ page }) => {
      await page.goto(ruta);
      await page.waitForLoadState("networkidle");
      await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
      expect(await page.content()).not.toContain("@gmail.com");
    });
  }
});

test.describe("Privacidad", () => {
  test("carga y enlaza de vuelta al inicio", async ({ page }) => {
    await page.goto("/privacidad");
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Política de privacidad");
    await expect(page.getByText("15. Cambios.")).toBeVisible();
    await page.getByRole("link", { name: "Volver al inicio" }).first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("Header", () => {
  for (const ancho of [1024, 1280, 1366, 1440, 1920]) {
    test(`no se corta a ${ancho}px`, async ({ page, isMobile }) => {
      test.skip(isMobile, "solo escritorio");
      await page.setViewportSize({ width: ancho, height: 900 });
      await abrirInicio(page);
      const fila = page.getByTestId("header-fila");
      const caja = await fila.boundingBox();
      const hijos = await fila.evaluate((el) =>
        Array.from(el.children).map((h) => {
          const r = h.getBoundingClientRect();
          return { izq: Math.round(r.left), der: Math.round(r.right), ancho: Math.round(r.width) };
        }),
      );
      for (const h of hijos) {
        if (h.ancho === 0) continue;
        expect(h.izq).toBeGreaterThanOrEqual(Math.floor(caja!.x));
        expect(h.der).toBeLessThanOrEqual(Math.ceil(caja!.x + caja!.width) + 1);
      }
      // Los dos botones principales siempre visibles en escritorio
      await expect(fila.getByRole("link", { name: /Regístrate/ })).toBeVisible();
      await expect(fila.locator(`a[href="${site.whatsappVacantes}"]`)).toBeVisible();
    });
  }
});

test.describe("Accesibilidad básica", () => {
  test("hay enlace para saltar al contenido y los botones de icono tienen nombre", async ({ page }) => {
    await abrirInicio(page);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
    const sinNombre = await page.evaluate(() =>
      Array.from(document.querySelectorAll("button, a")).filter((el) => {
        const texto = (el.textContent || "").trim();
        const aria = el.getAttribute("aria-label");
        return !texto && !aria;
      }).length,
    );
    expect(sinNombre).toBe(0);
  });
});

test.describe("Componentes shadcn", () => {
  test("el menú móvil abre un panel lateral con los enlaces", async ({ page, isMobile }) => {
    test.skip(!isMobile, "solo en móvil");
    await abrirInicio(page);
    await page.getByRole("button", { name: "Abrir menú" }).click();
    const panel = page.getByRole("dialog", { name: "Menú" });
    await expect(panel).toBeVisible();
    await expect(panel.getByRole("link", { name: /Regístrate gratis/ })).toHaveAttribute("href", site.formulario);
    await expect(panel.getByRole("link", { name: /Escríbenos por WhatsApp/ })).toHaveAttribute("href", site.whatsappVacantes);
    await panel.getByRole("link", { name: "Preguntas" }).click();
    await expect(panel).toBeHidden();
  });

  test("el acordeón de preguntas es navegable con teclado", async ({ page }) => {
    await abrirInicio(page);
    const primera = page.getByRole("button", { name: "¿Registrarme tiene algún costo?" });
    await primera.scrollIntoViewIfNeeded();
    await expect(primera).toHaveAttribute("aria-expanded", "true");
    await primera.focus();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await expect(page.getByRole("button", { name: "¿Me garantizan un empleo?" })).toHaveAttribute("aria-expanded", "true");
  });
});

test.describe("Piezas gráficas", () => {
  for (const [nombre, ancho, alto] of [
    ["og", 1200, 630],
    ["cuadrado", 1080, 1080],
    ["historia", 1080, 1920],
  ] as const) {
    test(`la pieza ${nombre} mide ${ancho}×${alto}`, async ({ page }) => {
      await page.setViewportSize({ width: ancho + 48, height: alto + 48 });
      await page.goto(`/piezas/${nombre}`);
      await page.waitForLoadState("networkidle");
      const caja = await page.locator("#pieza").boundingBox();
      expect(caja?.width).toBe(ancho);
      expect(caja?.height).toBe(alto);
    });
  }
});
