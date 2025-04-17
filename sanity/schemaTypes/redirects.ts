import { defineType, defineField } from 'sanity'

export const redirectType = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  description: 'Redirect for next.config.js',
  fields: [
    defineField({
        name: 'title',
        title: 'Title of the blog',
        type: "string",
    
      }),
      defineField({
        name: 'source',
        title: 'Source Path',
        type: 'slug',
        validation: (Rule) =>
          Rule.required().custom((value) => {
            const slug = value as { current: string } | null;
      
            if (!slug || !slug.current) return "Source path can't be blank";
            if (!slug.current.startsWith('/')) return 'Source path must start with /';
            return true;
          }),
      }),
      defineField({
        name: 'destination',
        title: 'Destination Path',
        type: 'slug',
        validation: (Rule) =>
          Rule.required().custom((value) => {
            const slug = value as { current: string } | null;
      
            if (!slug || !slug.current) return "Destination path can't be blank";
            if (!slug.current.startsWith('/')) return 'Destination path must start with /';
            return true;
          }),
      }),
      
    defineField({
      name: 'permanent',
      title: 'Permanent Redirect',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})