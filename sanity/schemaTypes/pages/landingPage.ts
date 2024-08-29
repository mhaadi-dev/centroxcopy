//@ts-nocheck
import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const servicesPages = defineType({
  name: "servicesPages",
  title: "Services Pages",
  type: "document",
  icon: UserIcon as any, 
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
        defineField({ name: 'btnText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'img', title: 'Image', type: 'image' }),
        defineField({ name: 'includeDots', title: 'Include Dots', type: 'boolean' }),
        defineField({ name: 'reverse', title: 'Reverse', type: 'boolean' }),
      ],
    }),
    defineField({
      name: 'logoCarousal',
      title: 'Logo Carousel',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
            defineField({ name: 'icon', title: 'Icon', type: 'image' }),
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'customCarousal',
      title: 'Custom Carousel',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
        defineField({
          name: 'data',
          title: 'Data',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'heading', title: 'Heading', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
                defineField({ name: 'btnText', title: 'Button Text', type: 'string' }),
                defineField({ name: 'img', title: 'Image', type: 'image' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'benefitsSection',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
        defineField({
          name: 'data',
          title: 'Data',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'icon', title: 'Icon', type: 'image' }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                defineField({ name: 'heading', title: 'Heading', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'whyUsSection',
      title: 'Why Us Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'heading', title: 'Heading', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({ name: 'btntext', title: 'Button Text', type: 'string' }),
        defineField({ name: 'img', title: 'Image', type: 'image' }),
      ],
    }),
    defineField({
      name: 'verticalCarouselSection',
      title: 'Vertical Carousel Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'img', title: 'Image', type: 'image' }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                defineField({ name: 'caption', title: 'Caption', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'data',
          title: 'Data',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'img', title: 'Image', type: 'image' }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'hoverAnimationSection',
      title: 'Hover Animation Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'data',
          title: 'Data',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'img', title: 'Image', type: 'image' }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                defineField({ name: 'caption', title: 'Caption', type: 'string' }),
                defineField({ name: 'details', title: 'Details', type: 'array', of: [{ type: 'string' }] }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'stepperSection',
      title: 'Stepper Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'isReverse', title: 'Is Reverse', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
        defineField({
          name: 'data',
          title: 'Data',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
              ],
            }),
          ],
        }),
        defineField({ name: 'btnText', title: 'Button Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'data',
          title: 'Data',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
                defineField({ name: 'icon', title: 'Icon', type: 'image' }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'caseStudiesSection',
      title: 'Case Studies Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'caseStudies',
          title: 'Case Studies',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'string' }),
                defineField({ name: 'img', title: 'Image', type: 'image' }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'customerTestimonialSection',
      title: 'Customer Testimonial Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'role', title: 'Role', type: 'string' }),
                defineField({ name: 'company', title: 'Company', type: 'string' }),
                defineField({ name: 'text', title: 'Text', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'productsSection',
      title: 'Products Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'string' }),
                defineField({ name: 'price', title: 'Price', type: 'string' }),
                defineField({ name: 'img', title: 'Image', type: 'image' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faqsSection',
      title: 'FAQs Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'question', title: 'Question', type: 'string' }),
                defineField({ name: 'answer', title: 'Answer', type: 'array', of: [{ type: 'block' }] }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactUsSection',
      title: 'Contact Us Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
        defineField({ name: 'btnText', title: 'Button Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'bannerSection',
      title: 'Banner Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
        defineField({ name: 'btnText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'img', title: 'Image', type: 'image' }),
      ],
    }),
  ],
});
