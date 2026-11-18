// Copia la exportación estática (out/) a ../sitio, la carpeta que publica Cloudflare Pages.
// Uso: npm run publicar  (compila y copia). Después: git add ../sitio && git commit && git push.
import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const origen = "out";
const destino = join("..", "sitio");
if (!existsSync(join(origen, "index.html"))) {
  console.error("No existe out/index.html: ejecuta primero `npm run build`.");
  process.exit(1);
}
for (const f of readdirSync(destino)) rmSync(join(destino, f), { recursive: true, force: true });
cpSync(origen, destino, { recursive: true });
console.log(`Listo: ${origen}/ copiado a ${destino}/`);
