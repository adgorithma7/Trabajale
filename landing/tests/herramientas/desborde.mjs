import { chromium } from "@playwright/test";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1366, height: 900 } });
await p.goto("http://localhost:3399/");
await p.waitForLoadState("networkidle");
const r = await p.evaluate(() => {
  const w = document.documentElement.clientWidth;
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.right > w + 1 && r.width > 0)
      out.push({
        tag: el.tagName,
        cls: (el.className?.baseVal ?? el.className ?? "").toString().slice(0, 90),
        right: Math.round(r.right),
        top: Math.round(r.top + scrollY),
      });
  }
  return { w, sw: document.documentElement.scrollWidth, out: out.slice(0, 12) };
});
console.log(JSON.stringify(r, null, 1));
await b.close();
