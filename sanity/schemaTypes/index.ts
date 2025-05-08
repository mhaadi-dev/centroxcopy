import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { AuthorSchema, BlogSchema, CategorySchema, ContentItemSchema } from './pages/Blogs'
import { redirectType } from './redirects'
import { imageWithAlt, cardItem, headerData, techStackItem } from "@/sanity/schemaTypes/commonTypes"
import { caseStudy } from './pages/Casestudies'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    BlogSchema,
    blockContentType,
    ContentItemSchema,
    AuthorSchema,
    CategorySchema,
    redirectType, 
    caseStudy,
    imageWithAlt,
    cardItem,
    headerData,
    techStackItem
  ],
}
