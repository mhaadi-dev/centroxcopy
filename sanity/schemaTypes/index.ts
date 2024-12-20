import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { teamSectionType } from './pages/teamType'
import { servicesPages } from './pages/landingPage'
import { nestedServicePage } from './pages/nestedLandingPage'
import  landingPage  from './landingPage'
import { landingLogosCarousel } from './LandingLogosCarousel';
import {  BlogSchema } from './pages/Blogs'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // blockContentType, categoryType, postType, authorType,teamSectionType,servicesPages,nestedServicePage,landingPage,landingLogosCarousel,
     BlogSchema,blockContentType
  ],
}
