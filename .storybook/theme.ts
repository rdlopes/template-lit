import {create} from '@storybook/theming/create';
import {version} from '../package.json';
import {ThemeVars} from "@storybook/theming";

export default create({
  base: 'light',
  brandTitle: `template-lit ${version}`,
  brandUrl: 'https://github.com/rdlopes/template-lit',
  brandTarget: '_blank'
} as ThemeVars);
