import { defineArrayMember, defineField, defineType } from 'sanity';

export const pageBuilder = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'homeHero',
          type: 'homeHero',
        }),
      ],
    }),
  ],
});
