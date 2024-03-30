import type { StorybookConfig } from '@storybook/nextjs';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['..\\public'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins ?? []),
        new TsconfigPathsPlugin(),
      ];
    }

    config.module?.rules?.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  // Include google fonts as fallback for next/font/google
  previewHead: (head) => `
    ${head}
    ${`
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Bitter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
   `}
  `,
};

export default config;
