import {html} from 'lit';
import {Meta, Story} from "@storybook/web-components";
import './home.page';
import {HomePageProperties} from "./home.page";

export default {
  title: 'Pages / Home',
  component: 'home-page',
  argTypes: {},
} as Meta;

const Template: Story<HomePageProperties> = ({}: HomePageProperties) => html`
  <home-page></home-page>
`;

export const Light: Story<HomePageProperties> = Template.bind({});
Light.args = {};
Light.parameters = {
  controls: {hideNoControlsWarning: true},
};
