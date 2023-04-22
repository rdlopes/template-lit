import {html} from 'lit';
import {Meta, StoryFn} from "@storybook/web-components";
import './navbar.atom';
import {NavbarAtomProperties} from "./navbar.atom";

export default {
  title: 'Atoms / Navigation',
  component: 'navbar-atom',
  argTypes: {},
} as Meta;

const Template: StoryFn<NavbarAtomProperties> = ({brand}: NavbarAtomProperties) => html`
  <navbar-atom .brand="${brand}"></navbar-atom>
`;

export const Light: StoryFn<NavbarAtomProperties> = Template.bind({});
Light.args = {
  brand: 'Storybook Template',
};
