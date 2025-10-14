/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://enkelfinansiering.no',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/kalkulator'),
    await config.transform(config, '/pa-dagen'),
    await config.transform(config, '/billan'),
    await config.transform(config, '/kontakt'),
    await config.transform(config, '/om-oss'),
    await config.transform(config, '/uten-egenkapital'),
    await config.transform(config, '/personvern'),
    await config.transform(config, '/cookies'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://enkelfinansiering.no/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    const customFields = [
      {
        loc: path,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: path === '/' ? 1.0 : 0.8,
      },
    ];

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.8,
    };
  },
};
