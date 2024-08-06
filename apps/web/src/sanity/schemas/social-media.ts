import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'socialMedia',
  type: 'document',
  title: 'Socila media',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    }),
  ],
});
