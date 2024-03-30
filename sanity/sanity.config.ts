import { dashboardTool, projectInfoWidget } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { myStructure } from './deskStructure';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? '6d2d95er';
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId,
  dataset,

  plugins: [
    dashboardTool({ widgets: [projectInfoWidget()] }),
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
