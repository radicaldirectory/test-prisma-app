import React from "react";
import Button, { ButtonProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "MyComponents/Button",
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>My button text time</Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.args = {};
