import { StoryObj, Meta } from "@storybook/react";
import { TextField } from "components/Fields/TextField";

export default { component: TextField } as Meta<typeof TextField>;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    type: "string",
    placeholder: "placeholder",
    labelPosition: "left",
    label: "Name",
    required: true,
  },
};

export const StringTextErrorField: Story = {
  args: {
    ...Default.args,
    error: "this field is required",
    labelPosition: "top",
  },
};

export const StringTextWarningField: Story = {
  args: {
    ...Default.args,
    type: "string",
    warning: "this field has a warning",
  },
};

export const TextFieldWithHelper: Story = {
  args: {
    type: "string",
    placeholder: "placeholder",
    helperText: "this is some helper text",
    labelPosition: "left",
    label: "Name",
  },
};
