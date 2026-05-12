import { site, routes } from '$lib/site';

export const prerender = true;

export function GET() {
    const urls = routes.map((r) => {
        const loc = site.url.replace(/\/$/, '') + r;
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
