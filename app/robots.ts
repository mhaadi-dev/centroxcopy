import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';

  return {
    rules: [
      {
        userAgent: '*',
        ...(isStaging
          ? { disallow: '/' } 
          : {
              allow: ['/blogs', '/'], 
              disallow: ['/blogs/search', '/studio'],
            }),
      },
    ],
    sitemap: 'https://centrox.ai/sitemap.xml',
  };
}

  // return {
  //   rules: [
  //     {
  //       userAgent: '*',
  //       ...(isStaging 
  //         ? { allow: ['/*.tsx'] }
  //         : { allow: ['/*.tsx'] }) 
  //     },
  //   ],
  //   sitemap: 'https://centrox.ai/sitemap.xml',
  // };
