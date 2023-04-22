// noinspection JSUnusedGlobalSymbols

const path = require("path");
const forceBundleConfigDeps = () => {
  const virtualFileId = '/virtual:/@storybook/builder-vite/vite-app.js';
  return {
    name: 'force-bundle-config-dep',
    enforce: 'pre',
    transform(code, id) {
      if (id !== virtualFileId) {
        return;
      }
      const transformedCode = code.replace(/import \* as (config_.*?) from '.*\/node_modules\/(.*?)'/g, (_substr, name, mpath) => {
        return `import * as ${name} from '${mpath}'`;
      });
      return {
        code: transformedCode,
        map: null
      };
    }
  };
};
module.exports = {
  stories: ["../src/**/*.stories.ts"],
  addons: [
    "@storybook/theming",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, forceBundleConfigDeps()],
      optimizeDeps: {
        include: ["@storybook/client-api", "@storybook/client-logger"],
        entries: [`${path.relative(config.root, path.resolve(__dirname, "../src"))}/**/*.stories.ts`]
      }
    };
  }
};
