import { defineCollection, defineContentConfig } from '@nuxt/content'

import { profileSchema } from './shared/schemas/profile'

export default defineContentConfig({
  collections: {
    profile: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: profileSchema,
    }),
  },
})
