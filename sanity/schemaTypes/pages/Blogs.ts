import { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity"

export const BlogSchema = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
 
   
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      validation: (Rule) => Rule.max(60).error('Meta title should not exceed 60 characters.')
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "string",
      validation: (Rule) => Rule.max(160).error('Meta title should not exceed 160 characters.')
    }),
    
    defineField({
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
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
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
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{ type: 'string' }],
        }),
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
        }),
        defineField({
          name: 'author_description',
          title: 'Author Description',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Author Profile Link',
          type: 'string',
        }),
        defineField({
          name: 'author_image',
          title: 'Author Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'author_alt',
          title: 'Author image alt text',
          type: 'string',
        }),
        defineField({
          name: 'banner_data',
          title: 'Banner Data',
          type: 'object',
          fields: [
            defineField({
              name: 'banner_heading',
              title: 'Banner Heading',
              type: 'string', 
            }),
            defineField({
              name: 'banner_description',
              title: 'Banner Description',
              type: 'text', 
            }),
          ]
        }),
        defineField({
          name: 'blog_data',
          title: 'Blog Data',
          type: 'blockContent',  
        }),
      ],
    }),
  ],
});



