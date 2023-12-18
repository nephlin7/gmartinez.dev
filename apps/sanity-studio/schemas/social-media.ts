import { defineType } from 'sanity';

export default defineType({
  name: 'socialMedia',
  type: 'document',
  title: 'Socila media',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
  ],
});
