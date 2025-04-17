import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { AuthorSchema, BlogSchema, CategorySchema, ContentItemSchema } from './pages/Blogs'
import { redirectType } from './redirects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    BlogSchema,
    blockContentType,
    ContentItemSchema,
    AuthorSchema,
    CategorySchema,
    redirectType, // Add redirect schema
  ],
}