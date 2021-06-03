import React from "react";
import Title, { TitleProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Title",
  component: Title
} as Meta;

const Template: Story<TitleProps> = (args) => (
  <Title {...args}>My text time</Title>
);

export const TitleStory = Template.bind({});
TitleStory.args = {};
