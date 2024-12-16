import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const links = [
    { url: 'https://centrox.ai/', lastModified: new Date().toISOString(), priority: 1.00 },
    { url: 'https://centrox.ai/services/custom-llm-dev', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/services/custom-chatbot-dev', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/services/ai-finetuning', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/services/ai-agents', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/services/data-annotations-and-labelling', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/services/data-validation', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/services/model-optimization', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/services/evaluation', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/solutions/snap-and-measure', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/solutions/real-estate-chatbot', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/solutions/mental-health-chatbot', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/solutions/labelling-dresses-with-ai', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/industries/health', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/industries/fintech', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/industries/retail', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/industries/real-estate', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/about-us', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/team', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/contact', lastModified: new Date().toISOString(), priority: 0.80 },
    { url: 'https://centrox.ai/case-studies/pocketmate', lastModified: new Date().toISOString(), priority: 0.80 },
  ];

  return links;
}