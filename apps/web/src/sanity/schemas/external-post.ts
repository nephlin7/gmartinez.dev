import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'externalPost',
  type: 'document',
  title: 'External Post',
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
    defineField({
      title: 'Emoji',
      type: 'string',
      name: 'emoji',
    }),
  ],
});
