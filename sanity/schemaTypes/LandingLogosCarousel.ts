// schemas/landingLogosCarousel.js
export const landingLogosCarousel = {
  name: 'landingLogosCarousel',
  title: 'Landing Logos Carousel',
  type: 'document',
  fields: [
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule: any) => Rule.required().max(100),
            },
          ],
        },
      ],
    },
  ],
};
