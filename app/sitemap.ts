import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const links = [
    {
      url: 'https://centrox.ai', // Replace with your homepage
      lastModified: new Date(),
    },
    {
        url: 'https://centrox.ai/team', // Replace with your homepage
        lastModified: new Date(),
    },
    {
        url: 'https://centrox.ai/about', // Replace with your homepage
        lastModified: new Date(),
    },
    {
        url: 'https://centrox.ai/aiExpert', // Replace with your homepage
        lastModified: new Date(),
    },
    {
        url: 'https://centrox.ai/bodyMeasurements', // Replace with your homepage
        lastModified: new Date(),
    },
    {
        url: 'https://centrox.ai/chatbotRealEstate', // Replace with your homepage
        lastModified: new Date(),
    }
  ]
  return links;
}