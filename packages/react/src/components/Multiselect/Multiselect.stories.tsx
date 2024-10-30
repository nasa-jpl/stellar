import { Meta, StoryObj } from "@storybook/react";
import { IconBeaker, IconRover, IconSatellite } from "components/Icons";
import { Multiselect } from "components/Multiselect";
import { useState } from "react";

export default { component: Multiselect } as Meta<typeof Multiselect>;
type Story = StoryObj<typeof Multiselect>;

const options = [
  {
    value: "option1",
    label: (
      <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
        <IconSatellite /> Option 1
      </div>
    ),
  },
  {
    value: "option2",
    label: (
      <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
        <IconRover /> Option 2
      </div>
    ),
  },
  {
    value: "option3",
    label: (
      <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
        <IconBeaker /> Option 3
      </div>
    ),
  },
];

export const Medium: Story = {
  args: {
    options,
  },
  render: (args) => {
    const [value, setValue] = useState(options[0].value);
    return <Multiselect {...args} selectedValue={value} onChange={setValue} />;
  },
};

export const Large: Story = {
  args: {
    ...Medium.args,
    size: "large",
  },
  render: Medium.render,
};
