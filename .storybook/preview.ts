import {setCustomElements} from '@storybook/web-components';
import customElementsMetadata from '../custom-elements.json';
import '../src/style.scss';

setCustomElements(customElementsMetadata);

export const parameters = {
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
}
