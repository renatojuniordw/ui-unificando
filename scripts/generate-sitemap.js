import { writeFileSync } from "fs";

const SITE_URL = "https://unificando.com.br";
const TODAY = new Date().toISOString().split("T")[0];

const routes = [
  { path: "/", priority: "1.0", changeFreq: "weekly" },
  { path: "/servicos", priority: "0.9", changeFreq: "monthly" },
  { path: "/para-advogados", priority: "0.9", changeFreq: "monthly" },
  { path: "/metodo-unificando", priority: "0.8", changeFreq: "monthly" },
  { path: "/sobre", priority: "0.7", changeFreq: "monthly" },
  { path: "/contato", priority: "0.8", changeFreq: "monthly" },
  { path: "/links", priority: "0.5", changeFreq: "monthly" },
  { path: "/privacidade", priority: "0.3", changeFreq: "yearly" },
  { path: "/termos", priority: "0.3", changeFreq: "yearly" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${route.priority}</priority>
    <changefreq>${route.changeFreq}</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log("✅ sitemap.xml gerado com sucesso!");
