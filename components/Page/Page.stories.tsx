import React from "react";
import Page, { PageProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "MyComponents/Page",
  component: Page
} as Meta;

const Template: Story<PageProps> = (args) => (
  <Page {...args}>My text time</Page>
);

export const PageStory = Template.bind({});
PageStory.args = {};
