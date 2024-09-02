//@ts-nocheck
import { UserIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const servicesPages = defineType({
  name: "servicesPages",
  title: "Services Pages",
  type: "document",
  icon: UserIcon as any,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "string" },
        { name: "btnText", title: "Button Text", type: "string" },
        { name: "img", title: "Image", type: "image" },
        { name: "includeDots", title: "Include Dots", type: "boolean" },
        { name: "reverse", title: "Reverse", type: "boolean" },
      ],
    }),
    defineField({
      name: 'logoCarousal',
      title: 'Logo Carousel',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name : "order", title: "Order", type: "number" }),

        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({ name: 'icon', title: 'Icon', type: 'image' }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),
    

    defineField({
      name: "customCarousal",
      title: "Custom Carousel",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },

        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "string" },
        {
          name: "data",
          title: "Data",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "heading", title: "Heading", type: "string" },
                {
                  name: "description",
                  title: "Description",
                  type: "array",
                  of: [{ type: "block" }],
                },
                { name: "btnText", title: "Button Text", type: "string" },
                { name: "img", title: "Image", type: "image" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "benefitsSection",
      title: "Benefits Section",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },

        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "string" },
        {
          name: "data",
          title: "Data",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "icon", title: "Icon", type: "image" },
                { name: "alt", title: "Alt Text", type: "string" },
                { name: "heading", title: "Heading", type: "string" },
                {
                  name: "description",
                  title: "Description",
                  type: "array",
                  of: [{ type: "block" }],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "whyUsSection",
      title: "Why Us Section",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },

        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "string" },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "heading", title: "Heading", type: "string" },
                { name: "description", title: "Description", type: "string" },
              ],
            },
          ],
        },
        { name: "btntext", title: "Button Text", type: "string" },
        { name: "img", title: "Image", type: "image" },
      ],
    }),
    defineField({
      name: "verticalCarouselSection",
      title: "Vertical Carousel Section",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },

        { name: "heading", title: "Heading", type: "string" },
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "img", title: "Image", type: "image" },
                { name: "alt", title: "Alt Text", type: "string" },
                { name: "caption", title: "Caption", type: "string" },
              ],
            },
          ],
        },
        {
          name: "data",
          title: "Data",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "img", title: "Image", type: "image" },
                { name: "alt", title: "Alt Text", type: "string" },
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: [{ type: "block" }],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "hoverAnimationSection",
      title: "Hover Animation Section",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },

        { name: "heading", title: "Heading", type: "string" },
        {
          name: "data",
          title: "Data",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "img", title: "Image", type: "image" },
                { name: "alt", title: "Alt Text", type: "string" },
                { name: "caption", title: "Caption", type: "string" },
                {
                  name: "details",
                  title: "Details",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
        name: "stepperSection",
        title: "Stepper Section",
        type: "object",
        fields: [
          defineField({ name: "includeSection", title: "Include Section", type: "boolean" }),
          defineField({ name : "order", title: "Order", type: "number" }),

          defineField({ name: "isReverse", title: "Is Reverse", type: "boolean" }),
          defineField({ name: "heading", title: "Heading", type: "string" }),
          defineField({ name: "description", title: "Description", type: "string" }),
          defineField({ name: "image", title: "Image", type: "image" }),  // Added image field
          defineField({
            name: "data",
            title: "Data",
            type: "array",
            of: [
              defineField({
                type: "object",
                fields: [
                  defineField({ name: "title", title: "Title", type: "string" }),
                  defineField({
                    name: "content",
                    title: "Content",
                    type: "array",
                    of: [{ type: "block" }],
                  }),
                ],
              }),
            ],
          }),
          defineField({ name: "btnText", title: "Button Text", type: "string" }),
        ],
      }),
      
    defineField({
      name: "servicesSection",
      title: "Services Section",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },

        { name: "heading", title: "Heading", type: "string" },
        {
          name: "data",
          title: "Data",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: [{ type: "block" }],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "caseStudiesSection",
      title: "Case Studies Section",
      type: "object",
      fields: [
        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },

        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "string" },
        {
          name: "data",
          title: "Data",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "array",
                  of: [{ type: "block" }],
                },
                {
                  name: "tags",
                  title: "Tags",
                  type: "array",
                  of: [{ type: "string" }],
                },
                { name: "img", title: "Image", type: "image" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "customerTestimonialSection",
      title: "Customer Testimonial Section",
      type: "object",
      fields: [
        defineField({
          name: "includeSection",
          title: "Include Section",
          type: "boolean",
        }),
        defineField({ name : "order", title: "Order", type: "number" }),

        defineField({
          name: "testimonials",
          title: "Testimonials",
          type: "array",
          of: [
            defineField({
              type: "object",
              fields: [
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: [{ type: "block" }],
                },
                { name: "name", title: "Name", type: "string" },
                { name: "designation", title: "Designation", type: "string" },
                { name: "companyName", title: "Company Name", type: "string" },
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "productsSection",
      title: "Products Section",
      type: "object",
      fields: [
        defineField({
          name: "includeSection",
          title: "Include Section",
          type: "boolean",
        }),
        defineField({ name : "order", title: "Order", type: "number" }),

        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "products",
          title: "Products",
          type: "array",
          of: [
            defineField({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "img", title: "Image", type: "image" },
                { name: "category", title: "Category", type: "string" },
                { name: "date", title: "Date", type: "string" },
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'techStackSection',
      title: 'Tech Stack Section',
      type: 'object',
      fields: [
        defineField({ name: 'includeSection', title: 'Include Section', type: 'boolean' }),
        defineField({ name : "order", title: "Order", type: "number" }),

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
                defineField({
                  name: 'content',
                  title: 'Content',
                  type: 'array',
                  of: [
                    defineField({
                      type: 'object',
                      fields: [
                        defineField({ name: 'img', title: 'Image', type: 'image' }),
                        defineField({
                          name: 'description',
                          title: 'Description',
                          type: 'array',
                          of: [{ type: 'block' }],
                        }),
                        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    
      

    defineField({
        name: "faqsSection",
        title: "FAQs Section",
        type: "object",
        fields: [
          defineField({ name: "includeSection", title: "Include Section", type: "boolean" }),
          defineField({ name : "order", title: "Order", type: "number" }),

          defineField({ name: "heading", title: "Heading", type: "string" }),
          defineField({
            name: "data",
            title: "Data",
            type: "array",
            of: [
              defineField({
                type: "object",
                fields: [
                  defineField({ name: "question", title: "Question", type: "string" }),
                  defineField({
                    name: "answer",
                    title: "Answer",
                    type: "array",
                    of: [{ type: "block" }],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      
    defineField({
      name: "bannerSection",
      title: "Banner Section",
      type: "object",
      fields: [

        { name: "includeSection", title: "Include Section", type: "boolean" },
        { name : "order", title: "Order", type: "number" },
        { name: "heading", title: "Heading", type: "string" },
        { name: "btnText", title: "Button Text", type: "string" },
        { name: "bgImage", title: "Background Image", type: "image" },
      ],
    }),
  ],
});
