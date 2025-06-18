import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;
