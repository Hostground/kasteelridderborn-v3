#!/usr/bin/env node
// Prerender alle pagina's met de TanStack Start SSR-bundle naar statische
// HTML (dist/<pagina>/index.html), en flatten dist/client/* -> dist/ zodat
// het resultaat rechtstreeks naar Apache/cPanel geüpload kan worden.
import { readdirSync, writeFileSync, renameSync, existsSync, rmSync, mkdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const dist = "dist";
const client = join(dist, "client");
const server = join(dist, "server");

// Pagina's om te prerenderen. Cap ruim onder hosting-limits.
const MAX_PRERENDER_PAGES = 50;
const routes = ["/", "/het-landgoed", "/kasteel-ridderborn", "/angelpark", "/de-oranjerie", "/ridderboeren", "/de-overzijde", "/shabos", "/waterberg", "/ons-verhaal", "/antwerpen", "/contact"];

if (routes.length > MAX_PRERENDER_PAGES) {
  console.error(`[build-static] too many prerender routes (${routes.length} > ${MAX_PRERENDER_PAGES})`);
  process.exit(1);
}

if (!existsSync(client) || !existsSync(server)) {
  console.error("[build-static] missing dist/client or dist/server — did vite build run?");
  process.exit(1);
}

// 1) SSR-render elke route via de gebouwde server-bundle.
const serverEntry = pathToFileURL(resolve(server, "server.js")).href;
const mod = await import(serverEntry);
const handler = mod.default?.fetch ?? mod.default;
if (typeof handler !== "function") {
  console.error("[build-static] server bundle has no fetch handler");
  process.exit(1);
}

const pages = [];
for (const route of routes) {
  const res = await handler(new Request("http://localhost" + route));
  const html = await res.text();
  if (!res.ok) {
    console.error(`[build-static] SSR render failed for ${route} (${res.status})`);
    console.error(html.slice(0, 500));
    process.exit(1);
  }
  pages.push({ route, html });
}

// 2) Flatten dist/client/* naar dist/.
for (const entry of readdirSync(client)) {
  const from = join(client, entry);
  const to = join(dist, entry);
  if (existsSync(to)) rmSync(to, { recursive: true, force: true });
  renameSync(from, to);
}
rmSync(client, { recursive: true, force: true });
rmSync(server, { recursive: true, force: true });

// 3) Herschrijf asset-verwijzingen naar relatieve paden per paginadiepte,
// zodat de site werkt vanaf file:// of vanuit een submap op cPanel/Apache.
for (const { route, html } of pages) {
  const depth = route === "/" ? 0 : route.split("/").filter(Boolean).length;
  const prefix = depth === 0 ? "./" : "../".repeat(depth);
  const relHtml = html.replace(/(["'(=])(?:\.\/|\/)?assets\//g, `$1${prefix}assets/`);
  const out = route === "/" ? join(dist, "index.html") : join(dist, route.slice(1), "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, relHtml);
  console.log(`[build-static] wrote ${out} (${relHtml.length} bytes)`);
}
