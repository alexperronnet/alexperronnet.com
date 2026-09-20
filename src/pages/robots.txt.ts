import type { APIRoute } from "astro";
import { site } from "#src/config/site.ts";

export const GET: APIRoute = () => {
  const rules =
    import.meta.env.VERCEL_ENV === "preview"
      ? "User-agent: *\nDisallow: /\n"
      : `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`;

  return new Response(rules, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
