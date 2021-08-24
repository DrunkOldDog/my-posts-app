import React from "react";

import Bio from "./Bio";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = (args) => <Bio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headshot:
    "https://pbs.twimg.com/profile_images/1402813219404718084/Bz7PAiAK_400x400.jpg",
  name: "Juani Reyes",
  tagline: "Hey, just trying new tools!",
  role: "Frontend Developer @Dreamcode.io",
};
