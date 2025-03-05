import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'

import {  AuthorSchema, BlogSchema, CategorySchema, ContentItemSchema } from './pages/Blogs'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // blockContentType, categoryType, postType, authorType,teamSectionType,servicesPages,nestedServicePage,landingPage,landingLogosCarousel,
     BlogSchema,blockContentType,ContentItemSchema,AuthorSchema,CategorySchema
  ],
}
