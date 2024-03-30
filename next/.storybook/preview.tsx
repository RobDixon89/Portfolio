import globalStyles from '../src/lib/global.module.css';

import '../src/lib/reset.css';
// To allow for fonts to work within storybook, as fallback for next/font/google
import '../src/stories/global.css';

import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={`${globalStyles.colours} ${globalStyles.main}`}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
