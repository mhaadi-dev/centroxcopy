import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/*.tsx',
        ],
      },
    ],
    sitemap: 'https://centrox.ai/sitemap.xml',
  };
}
