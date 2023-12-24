import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    transitionTime: { control: { type: "range", min: 0, max: 3, step: 0.05 } },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: "Label",
    transitionTime: 0.25,
    moreClass: "button-1",
  },
};

export const Secondary = {
  args: {
    label: "Label",
    transitionTime: 0.25,
    moreClass: "button-2",
  },
};

export const Large = {
  args: {
    label: "Label",
    transitionTime: 0.25,
  },
};

export const Small = {
  args: {
    label: "Label",
    transitionTime: 0.25,
  },
};
