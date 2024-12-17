import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/*.tsx',
        ],
        ...(isStaging ? { disallow: '/' } : {}), 
      },
    ],
    sitemap: 'https://centrox.ai/sitemap.xml',
  };
}
