import {html} from 'lit';
import {Meta, Story} from "@storybook/web-components";
import './main.molecule';
import {MainMoleculeProperties} from "./main.molecule";

export default {
  title: 'Molecules / Main Content',
  component: 'main-molecule',
  argTypes: {}
} as Meta;

const Template: Story<MainMoleculeProperties> = ({}: MainMoleculeProperties) => html`
  <main-molecule></main-molecule>
`;

export const Transparent: Story<MainMoleculeProperties> = Template.bind({});
Transparent.args = {};
Transparent.parameters = {
  controls: {hideNoControlsWarning: true},
};
