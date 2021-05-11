import React from "react";
import Post, { PostProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "MyComponents/Post",
  component: Post
} as Meta;

const post = {
  id: 1,
  title: "Title",
  author: null,
  content: "Content",
  published: true
};

const Template: Story<PostProps> = (args) => (
  <Post post={post} {...args}>
    My text time
  </Post>
);

export const PostStory = Template.bind({});
PostStory.args = {};
