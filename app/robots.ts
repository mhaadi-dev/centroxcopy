import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', disallow: '/' },
      { userAgent: '*', allow: '/*.ts' },
      { userAgent: '*', allow: '/*.tsx' },
      { userAgent: '*', allow: '/services/' },
      { userAgent: '*', allow: '/solutions/' },
      { userAgent: '*', allow: '/industries/' },
    ],
    sitemap: 'https://centrox.ai/sitemap.xml',
  };
}
