import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "components/Checkbox";

export default { component: Checkbox } as Meta<typeof Checkbox>;
type Story = StoryObj<typeof Checkbox>;

export const LabelLeft: Story = {
  args: {
    onCheckedChange: action("checked changed"),
    label: "Checkbox label 1",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "200px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const LabelRight: Story = {
  args: {
    ...LabelLeft.args,
    labelPosition: "right",
  },
  decorators: LabelLeft.decorators,
};

export const Unlabeled: Story = {
  args: {},
  decorators: LabelLeft.decorators,
};

export const List: Story = {
  decorators: LabelLeft.decorators,
  render: (args) => (
    <div>
      <Checkbox {...args} label="Checkbox label 3" />
      <Checkbox {...args} label="Checkbox label 4" />
      <Checkbox {...args} label="Checkbox label 5" />
      <Checkbox {...args} label="Checkbox label 6" />
    </div>
  ),
};
