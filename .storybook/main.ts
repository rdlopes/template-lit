import {StorybookConfig} from "@storybook/web-components-vite";


const config: StorybookConfig = {
  stories: ["../src/**/*.stories.ts"],
  addons: [
    "@storybook/theming",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/web-components-vite",
  docs: {
    autodocs: 'tag',
  },
};
export default config;
