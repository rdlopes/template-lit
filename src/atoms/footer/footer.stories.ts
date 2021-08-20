import {html} from 'lit';
import {Meta, Story} from "@storybook/web-components";
import './footer.atom';
import {FooterAtomProperties} from "./footer.atom";

export default {
  title: 'Atoms / Footer',
  component: 'footer-atom',
  argTypes: {},
} as Meta;

const Template: Story<FooterAtomProperties> = ({author, link}: FooterAtomProperties) => html`
  <footer-atom .author="${author}" .link="${link}"></footer-atom>
`;

export const Light: Story<FooterAtomProperties> = Template.bind({});
Light.args = {
  author: 'A Storybook enthusiast',
};
