import type { StorybookConfig } from '@storybook/angular-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  framework: {
    name: '@storybook/angular-vite',
    options: {},
  },
};

export default config;
