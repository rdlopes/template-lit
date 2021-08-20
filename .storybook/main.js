module.exports = {
  "stories": [
    "../src/**/*.stories.ts"
  ],
  "addons": [
    "@storybook/theming",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  }
}
