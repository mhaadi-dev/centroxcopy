//@ts-nocheck
import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {title: 'Check List', value: 'checklist'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Highlight', value: 'highlight'},
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
          // New YouTube Link Annotation
          {
            title: "YouTube Link",
            name: "youtubeLink",
            type: "object",
            fields: [
              {
                title: "YouTube URL",
                name: "url",
                type: "url",
                validation: Rule =>
                  Rule.uri({
                    scheme: ['https'],
                    allowRelative: false,
                  }).regex(/^(https:\/\/)(www\.)?(youtube\.com|youtu\.be)/, {
                    name: 'YouTube URL',
                    message: 'Must be a valid YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID)',
                  }),
              },
            ],
          },
        ],
      },
    }),
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
    defineArrayMember({
      type: 'object',
      name: 'table',
      title: 'Table',
      fields: [
        {
          name: 'thead',
          type: 'array',
          title: 'Table Header',
          of: [{type: 'string', title: 'Header Cell'}],
        },
        {
          name: 'rows',
          type: 'array',
          title: 'Table Rows',
          of: [
            {
              type: 'object',
              name: 'tableRow',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  title: 'Table Cells',
                  of: [{type: 'string', title: 'Cell Content'}],
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