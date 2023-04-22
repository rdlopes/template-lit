import {html} from 'lit';
import {Meta, StoryFn} from "@storybook/web-components";
import './footer.atom';
import {FooterAtomProperties} from "./footer.atom";

export default {
  title: 'Atoms / Footer',
  component: 'footer-atom',
  argTypes: {},
} as Meta;

const Template: StoryFn<FooterAtomProperties> = ({author, link}: FooterAtomProperties) => html`
  <footer-atom .author="${author}" .link="${link}"></footer-atom>
`;

export const Light: StoryFn<FooterAtomProperties> = Template.bind({});
Light.args = {
  author: 'A Storybook enthusiast',
};
