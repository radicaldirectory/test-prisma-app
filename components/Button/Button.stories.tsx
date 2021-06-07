import React from "react";
import { Button } from "./";
import { Story, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story = (args) => (
  <>
    <Button type="solid" size="sm" {...args}>
      Button
    </Button>
    <Button type="outline" size="md" {...args}>
      Button
    </Button>
    <Button type="ghost" size="lg" {...args}>
      Button
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {};
