import React from "react";
import { Button } from "./";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button
} as Meta;

const Template: Story = (args) => (
  <Button {...args}>My button text time</Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.args = {};
