import { defineField } from 'sanity';

export const homePage = {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'homeHero',
      type: 'homeHero',
    }),
  ],
};
