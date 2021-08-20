import {create, ThemeVars} from '@storybook/theming';
import {version} from '../package.json';

export default create({
  base: 'light',
  brandTitle: `template-lit ${version}`,
  brandUrl: 'https://github.com/rdlopes/template-lit',
} as ThemeVars);
