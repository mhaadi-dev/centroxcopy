//@ts-nocheck
import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const teamSectionType = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
  icon: UserIcon as any,  // Assuming you want to use the same icon, you can change it if needed
  fields: [
    defineField({
      name: 'mainSectionheading',
      title: 'Main Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'secondSectionHeading',
      title: 'Second Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'LeadersImgs',
      title: 'Leaders Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'img', title: 'Image', type: 'image' }),
            defineField({ name: 'designation', title: 'Designation', type: 'string' }),
            defineField({ name: 'linkedINUrl', title: 'LinkedIn URL', type: 'url' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'thirdSectionheading',
      title: 'Third Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'thirdSectionDescription',
      title: 'Third Section Description',
      type: 'text',
    }),
    defineField({
      name: 'thirdSectoinImg',
      title: 'Third Section Image',
      type: 'image',
    }),
    defineField({
      name: 'teamSectionHeading',
      title: 'Team Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'teamSectionImgs',
      title: 'Team Section Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'img', title: 'Image', type: 'image' }),
            defineField({ name: 'designation', title: 'Designation', type: 'string' }),
            defineField({ name: 'linkedINUrl', title: 'LinkedIn URL', type: 'url' }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'teamSectionHeading',
      media: 'bgImage',
    },
  },
})
