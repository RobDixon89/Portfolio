import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '6d2d95er',
    dataset: process.env.SANITY_STUDIO_PROJECT_ID ?? 'production'
  }
})
