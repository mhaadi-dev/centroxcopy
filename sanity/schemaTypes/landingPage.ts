// schemas/landingPage.js
import { landingLogosCarousel } from './LandingLogosCarousel';

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    
    },
    {
      name: 'logosCarousel',
      title: 'Logos Carousel',
      type: 'reference',
      to: [{ type: 'landingLogosCarousel' }], // Make sure this matches the schema name
    },
    // Uncomment when you have the other sections ready
    // {
    //   name: 'heroSection',
    //   title: 'Hero Section',
    //   type: 'reference',
    //   to: [{ type: 'heroSection' }],
    // },
    // {
    //   name: 'ctaSection',
    //   title: 'Call to Action Section',
    //   type: 'reference',
    //   to: [{ type: 'ctaSection' }],
    // },
  ],
};
