import React from "react";

import Post from "./Post";

const DUMMY_POST = {
  content:
    "I’m working in Figma trying to design a new website that shows allof my tweets!",
  date: "02/26/2021",
};

export default {
  title: "Example/Post",
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...DUMMY_POST,
};
