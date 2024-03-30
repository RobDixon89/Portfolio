import { CodeBlockIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
  name: 'homeHero',
  title: 'Home Hero',
  icon: CodeBlockIcon,
  type: 'object',
  fields: [
    {
      name: 'intro',
      title: 'Introduction',
      type: 'string',
    },
    {
      name: 'main',
      title: 'Main Content',
      type: 'string',
    },
  ],
});
