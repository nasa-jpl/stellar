import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "components/Slider";
import { useState } from "react";

export default { component: Slider } as Meta<typeof Slider>;
type Story = StoryObj<typeof Slider>;

export const Single: Story = {
  args: {
    onValueChange: action("value changed"),
    onValueCommit: action("value committed"),
    label: "Slider label",
    value: [50],
    min: 0,
    max: 100,
    step: 1,
    showRange: false,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "400px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState([50]);
    return <Slider {...args} value={value} onValueChange={setValue} />;
  },
};

export const Multiple: Story = {
  args: {
    ...Single.args,
    label: "Switch label",
  },
  decorators: Single.decorators,
  render: (args) => {
    const [value, setValue] = useState([0, 100]);
    return <Slider {...args} value={value} onValueChange={setValue} />;
  },
};

export const LabelRight: Story = {
  args: {
    ...Single.args,
    label: "Switch label",
    labelPosition: "right",
  },
  decorators: Single.decorators,
  render: Single.render,
};

export const InputRight: Story = {
  args: {
    ...Single.args,
    label: "Switch label",
    inputPosition: "right",
  },
  decorators: Single.decorators,
  render: Single.render,
};

export const WithRangeShown: Story = {
  args: {
    ...Single.args,
    label: "Switch label",
    showRange: true,
  },
  decorators: Single.decorators,
  render: Single.render,
};

export const Unlabeled: Story = {
  args: {},
  decorators: Single.decorators,
  render: Single.render,
};

export const WithoutInput: Story = {
  args: {
    onValueChange: action("value changed"),
    onValueCommit: action("value committed"),
    label: "Slider label",
    min: 0,
    max: 100,
    step: 1,
    showInputs: false,
    showRange: false,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "600px",
        }}
      >
        <div style={{ marginBottom: "16px" }} className="st-typography-label">
          <i>
            Note: Without inputs, Sliders can be used as uncontrolled
            components.
          </i>
        </div>
        <Story />
      </div>
    ),
  ],
};
