import type {StorybookConfig} from '@storybook/angular';

const config: StorybookConfig = {
    "stories": [
        "../src/GettingStarted.mdx",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-docs",
        "@chromatic-com/storybook",
        "@storybook/addon-a11y",
        "@storybook/addon-designs"
    ],
    "framework": {
        "name": "@storybook/angular",
        "options": {}
    }
};
export default config;
