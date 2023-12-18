import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas/schema';

export default defineConfig({
  name: 'gmartinez-dev',
  title: 'GMartinez dashboard',
  projectId: 'mexmum0g',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
