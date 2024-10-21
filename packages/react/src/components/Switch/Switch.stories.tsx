import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "components/Switch";

export default { component: Switch } as Meta<typeof Switch>;
type Story = StoryObj<typeof Switch>;

export const LabelLeft: Story = {
  args: {
    onCheckedChange: action("checked changed"),
    label: "Switch label 1",
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
    label: "Switch label 2",
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
      <Switch {...args} label="Switch label 3" />
      <Switch {...args} label="Switch label 4" />
      <Switch {...args} label="Switch label 5" />
      <Switch {...args} label="Switch label 6" />
    </div>
  ),
};
