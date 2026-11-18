import { defineConfig, devices } from "@playwright/test";

/**
 * Pruebas de la landing en un navegador real.
 * `npm test` compila el sitio, lo sirve en el puerto 3399 y ejecuta tests/ en escritorio y móvil.
 */
export default defineConfig({
  testDir: "./tests",
  outputDir: "./tests/resultados",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  retries: 0,
  reporter: [["list"], ["html", { open: "never", outputFolder: "tests/informe" }]],
  use: {
    baseURL: "http://localhost:3399",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run build && npx serve@14 out -l 3399",
    url: "http://localhost:3399",
    reuseExistingServer: true,
    timeout: 240_000,
  },
  projects: [
    { name: "escritorio", use: { ...devices["Desktop Chrome"], viewport: { width: 1366, height: 900 } } },
    { name: "movil", use: { ...devices["Pixel 7"] } },
  ],
});
