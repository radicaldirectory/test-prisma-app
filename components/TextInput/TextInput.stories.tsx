import React from "react";
import TextInput, { TextInputProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "MyComponents/TextInput",
  component: TextInput
} as Meta;

const Template: Story<TextInputProps> = (args) => (
  <TextInput {...args} placeholder="TextInput" value="" />
);

export const TextInputStory = Template.bind({});
TextInputStory.args = {};
