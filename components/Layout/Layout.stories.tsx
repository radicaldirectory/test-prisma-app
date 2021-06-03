import Layout, { LayoutProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout",
  component: Layout
} as Meta;

const Template: Story<LayoutProps> = (args) => (
  <Layout {...args}>My text time</Layout>
);

export const LayoutStory = Template.bind({});
LayoutStory.args = {};
