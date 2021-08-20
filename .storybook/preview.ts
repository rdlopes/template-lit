import {setCustomElements} from '@storybook/web-components';
import customElementsMetadata from '../custom-elements.json';
import theme from './theme';
import '../src/style.scss';

setCustomElements(customElementsMetadata);

export const parameters = {
  // layout: 'fullscreen',
  options: {
    showRoots: true,
    theme
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
}
