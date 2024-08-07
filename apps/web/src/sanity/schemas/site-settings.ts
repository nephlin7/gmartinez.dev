import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site settings',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site title',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    }),
    defineField({
      title: 'Site language',
      name: 'lang',
      type: 'string',
    }),
    defineField({
      title: 'Brand logo',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      title: 'Footer social media items',
      name: 'footerSocialMedia',
      type: 'array',
      validation: (Rule) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      of: [
        {
          type: 'reference',
          to: [{ type: 'socialMedia' }],
        },
      ],
    }),
  ],
});
