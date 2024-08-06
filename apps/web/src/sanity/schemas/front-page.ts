import { defineType } from 'sanity';

export default defineType({
  name: 'frontPage',
  type: 'document',
  title: 'Front Page',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      title: 'Sub Heading',
      name: 'subHeading',
      type: 'string',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
      ],
    },
    {
      title: 'External Posts items',
      name: 'externalPosts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'externalPost' }],
        },
      ],
    },
  ],
});
