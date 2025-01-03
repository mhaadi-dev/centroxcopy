//@ts-nocheck
import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    // Block type for text content with additional list options
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {title: 'Check List', value: 'checklist'} // New list option
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in New Tab",
                name: "newTab",
                type: "boolean",
              },
              {
                title: "Nofollow",
                name: "nofollow",
                type: "boolean",
                description: "Enable nofollow for this link",
              },
            ],
          },
          {
            title: "Email Link",
            name: "emailLink",
            type: "object",
            fields: [
              {
                title: "Email",
                name: "href",
                type: "email",
              },
            ],
          },
        ],
      },
      
    }),

    // Block type for images with a hotspot option
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),

    // Table type for structured data in blockContent
    defineArrayMember({
      type: 'object',
      name: 'table', // Unique name for the table object
      title: 'Table',
      fields: [
        {
          name: 'thead',
          type: 'array',
          title: 'Table Header',
          of: [
            {
              type: 'string',
              title: 'Header Cell',
            },
          ],
        },
        {
          name: 'rows',
          type: 'array',
          title: 'Table Rows',
          of: [
            {
              type: 'object',
              name: 'tableRow', // Name each row to avoid conflicts
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  title: 'Table Cells',
                  of: [
                    {
                      type: 'string',
                      title: 'Cell Content',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Table Caption',
        },
      ],
    }),
    

    defineArrayMember({
      type: 'object',
      name: 'codeBlock', 
      title: 'Code Block',
      fields: [
        {
          name: 'language',
          type: 'string',
          title: 'Programming Language',
        },
        {
          name: 'code',
          type: 'text',
          title: 'Code Snippet',
        },
      ],
    }),

  ],
});
