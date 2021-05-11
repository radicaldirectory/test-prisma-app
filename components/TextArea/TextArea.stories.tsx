import React from "react";
import TextArea, { TextAreaProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "MyComponents/TextArea",
  component: TextArea
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <TextArea cols={50} placeholder="Content" rows={8} value={""} {...args} />
);

export const TextAreaStory = Template.bind({});
TextAreaStory.args = {};
