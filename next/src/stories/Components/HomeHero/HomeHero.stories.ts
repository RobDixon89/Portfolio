import type { StoryObj } from '@storybook/react';

import HomeHero, { HomeHeroProps } from './HomeHero';

const meta = {
  title: 'Components/Home Hero',
  component: HomeHero,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HomeHeroProps>;

export const Default: Story = {
  args: {
    intro: 'Hello.',
    main: `I'm **Rob **Dixon and I build websites.`,
  },
};
