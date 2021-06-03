import React from "react";
import Header from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Header",
  component: Header
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
HeaderStory.args = {};
