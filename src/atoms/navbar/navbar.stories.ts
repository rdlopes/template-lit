import {html} from 'lit';
import {Meta, Story} from "@storybook/web-components";
import './navbar.atom';
import {NavbarAtomProperties} from "./navbar.atom";

export default {
  title: 'Atoms / Navigation Bar',
  component: 'navbar-atom',
  argTypes: {},
} as Meta;

const Template: Story<NavbarAtomProperties> = ({brand}: NavbarAtomProperties) => html`
    <navbar-atom .brand="${brand}"></navbar-atom>
`;

export const Light: Story<NavbarAtomProperties> = Template.bind({});
Light.args = {
  brand: 'Storybook Template',
};
