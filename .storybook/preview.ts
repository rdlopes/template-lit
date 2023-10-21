import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    options: {
      showRoots: true
    },
    backgrounds: {
      default: 'light'
    },
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      expanded: true,
      exclude: ['styles'],
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
