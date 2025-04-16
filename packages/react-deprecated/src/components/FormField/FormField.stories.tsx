import { FormField } from "components/FormField";
import { Label } from "components/Label";
import { Input } from "components/Input";

import { Meta, StoryObj } from "@storybook/react";
import { Error } from "components/Error";

export default { component: FormField } as Meta<typeof FormField>;
type Story = StoryObj<typeof FormField>;

export const HorizontalFormField: Story = {
  args: {
    flow: "horizontal",
    children: (
      <>
        <Label required={true}>Name</Label>

        <FormField flow="vertical">
          <Input defaultValue="foo" />
          <Error>This is an error!</Error>
        </FormField>
      </>
    ),
  },
};

export const VerticalFormField: Story = {
  args: {
    flow: "vertical",
    children: (
      <>
        <Label required={true}>Name</Label>
        <Input defaultValue="foo" />
      </>
    ),
  },
};
