import { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity"


// Define the reusable 'content_item' schema
export const ContentItemSchema = defineType({
  name: 'content_item',
  title: 'Content Item',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Image is required.'),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Alt text is required.'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'This will be a main slug.',
      validation: (Rule) => Rule.required().error('Category is required.'),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'subdescription',
      title: 'Subdescription',
      type: 'string',
    }),
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'linkWithIcon',
      title: 'Link With Icon',
      type: 'boolean',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'This will be a sub-slug.',
      validation: (Rule) => Rule.required().error('Label is required.'),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author name is required.'),
    }),
    defineField({
      name: 'author_description',
      title: 'Author Description',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author description is required.'),
    }),
    defineField({
      name: 'link',
      title: 'Author Profile Link',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author profile link is required.'),
    }),
    defineField({
      name: 'author_image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Author image is required.'),
    }),
    defineField({
      name: 'author_alt',
      title: 'Author image alt text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author image alt text is required.'),
    }),
    {
      name: 'banner_data',
      title: 'Banner Data',
      type: 'object',
      fields: [
        {
          name: 'banner_heading',
          title: 'Banner Heading',
          type: 'string',
        },
        {
          name: 'banner_description',
          title: 'Banner Description',
          type: 'text',
        }
      ],
    },
    defineField({
      name: 'blog_data',
      title: 'Blog Data',
      type: 'blockContent',
    }),
    defineField({
      name: 'related_blogs_heading',
      title: 'Related Blogs Heading',
      type: 'string',
    }),
    defineField({
      name: 'related_blogs_paragraph',
      title: 'Related blogs paragraph',
      type: 'string',
    }),
  ],
});

// Define the main BlogSchema
export const BlogSchema = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Add Blog Information',
      type: 'string',
    }),
    defineField({
      name: 'meta_title',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(60).error('Meta title should not exceed 60 characters.'),
    }),
    defineField({
      name: 'meta_description',
      title: 'Meta Description',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(160).error('Meta description should not exceed 160 characters.'),
    }),
    defineField({
      name: 'content_item',
      title: 'Content Item',
      type: 'content_item', // Reference the reusable 'content_item' schema
    }),
  ],
});

// Export the reusable schema
export const schemas = [ContentItemSchema, BlogSchema];




