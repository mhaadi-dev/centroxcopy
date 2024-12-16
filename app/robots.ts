import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
        allow: [
          '/*.tsx',
          '/services/',
          '/solutions/',
          '/industries/',
        ],
      },
    ],
    sitemap: 'https://centrox.ai/sitemap.xml',
  };
}
