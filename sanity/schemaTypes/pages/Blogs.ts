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
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description:"Date should be less or equal to current date.",
      validation: (Rule) =>
     Rule.required().error("Date is required.")
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
        Rule.required().max(60).warning('Meta title should not exceed 60 characters.'),
    }),
    defineField({
      name: 'meta_description',
      title: 'Meta Description',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(160).error('Meta description should not exceed 160 characters.'),
    }),
    {
      name: 'category',
      title: 'Category',
      description: "This will be a main slug `/blogs/category/label`. Enter Category.",
      type: 'reference', 
      to: [{ type: 'category' }], 
      validation: (Rule) => Rule.required().error('Category is required.'),
    },
    defineField({
      name: 'subslug',
      title: 'Sub-slug',
      type: 'string',
      description: 'The base for the generated slug.',
      validation: (Rule) => Rule.required().error('Sub-slug is required.'),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'slug',
      description: 'This will be a sub-slug.',
      options: {
        source: 'subslug',
      },
    }),
    defineField({
      name: 'content_item',
      title: 'Content Item',
      type: 'content_item', // Ensure this matches your 'content_item' schema
    }),
    {
      name: 'author',
      title: 'Author',
      type: 'reference', // Ensure type is 'reference'
      to: [{ type: 'author' }], // Reference the 'author' schema
      validation: (Rule) => Rule.required().error('Author is required.'),
    }
  ],
});



export const AuthorSchema = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author name is required.'),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      validation: (Rule) => Rule.max(250).error('Bio should not exceed 250 characters.'),
    }),
    defineField({
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true, 
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    }),

    defineField({
      name: 'linkedin',
      title: 'Linkedin Link',
      type: 'string',
    }),
  ],
});
export const CategorySchema = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category_name',
      title: 'Category Name',
      type: 'string',
      description: 'Category name must be lowercase and hyphen-separated (e.g., "example-category")',
      validation: (Rule) =>
        Rule.required()
          .error('Category name is required.')
        
    }),
    defineField({
      name: 'category_meta_title',
      title: 'Category Meta Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Category Meta Title is required.'),
    }),
    defineField({
      name: 'category_meta_description',
      title: 'Category Meta Description',
      type: 'string',
      validation: (Rule) => Rule.required().error('Category Meta Description is required.'),
    }),
  ],
});

// Export the reusable schema
export const schemas = [ContentItemSchema, BlogSchema];




