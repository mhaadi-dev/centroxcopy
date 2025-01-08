// pages/sitemap.ts
import { MetadataRoute } from 'next';
export const revalidate = 10;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticLinks = [
    { url: 'https://centrox.ai/', lastModified: new Date().toISOString(), priority: 1.0 },
    { url: 'https://centrox.ai/services/custom-llm-dev', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/services/custom-chatbot-dev', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/services/ai-finetuning', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/services/ai-agents', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/services/data-annotations-and-labelling', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/services/data-validation', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/services/model-optimization', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/services/evaluation', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/solutions/snap-and-measure', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/solutions/real-estate-chatbot', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/solutions/mental-health-chatbot', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/solutions/labelling-dresses-with-ai', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/industries/health', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/industries/fintech', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/industries/retail', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/industries/real-estate', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/about-us', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/team', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/contact', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/case-studies/pocketmate', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/blogs/', lastModified: new Date().toISOString(), priority: 0.8 },
    { url: 'https://centrox.ai/blogs/search', lastModified: new Date().toISOString(), priority: 0.8 },
  ];

  const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';

  try {
    const fetchLink = isStaging
      ? 'https://staging.centrox.ai/api/fetchsitemapblogs'
      : 'https://centrox.ai/api/fetchsitemapblogs';
    const localLink = 'http://localhost:3000/api/fetchsitemapblogs';
    const response = await fetch(fetchLink, { cache: 'no-cache' });
    const data = await response.json();

    // Create dynamic blog detail links
    
    const dynamicLinks_blog_detail = data.map((blog: any) => ({
      url: !isStaging ? `https://centrox.ai/blogs/${blog.category?.category_name}/${blog.label.current}`:`https://staging.centrox.ai/blogs/${blog.category?.category_name}/${blog.label.current}`,
      lastModified: new Date(blog._updatedAt).toISOString(),
      priority: 0.8,
    }));

    // Create unique category links
    const uniqueCategories = new Set<string>();
    const dynamicLinks_blog_categories = data
      .filter((blog: any) => {
        const categoryName = blog.category?.category_name;
        if (!categoryName || uniqueCategories.has(categoryName)) {
          return false;
        }
        uniqueCategories.add(categoryName);
        return true;
      })
      .map((blog: any) => ({
        url:!isStaging ? `https://centrox.ai/blogs/${blog.category?.category_name}`:`https://staging.centrox.ai/blogs/${blog.category?.category_name}`,
        lastModified: new Date(blog._updatedAt).toISOString(),
        priority: 0.8,
      }));

    return [...staticLinks, ...dynamicLinks_blog_detail, ...dynamicLinks_blog_categories];
  } catch (error) {
    console.error('Error fetching dynamic links for sitemap:', error);
    return staticLinks;
  }
}
