// Utility to generate sitemap dynamically (for future use)
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const siteUrl = 'https://www.simeisynergyforchange.co.ke';

export const staticPages: SitemapUrl[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/leadership',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/projects',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/donate',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/register',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  }
];

export function generateSitemapXML(urls: SitemapUrl[]): string {
  const urlsXML = urls.map(url => `
  <url>
    <loc>${siteUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlsXML}
</urlset>`;
}