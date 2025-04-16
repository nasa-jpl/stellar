import {
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
} from "components/Icons";
import { StoryObj, Meta } from "@storybook/react";
import { Input } from "components/Input";
import { Button } from "components/Button";

export default { component: Input } as Meta<typeof Input>;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
  },
};

export const IconInput: Story = {
  args: {
    leftAdornment: <IconSearch />,
    placeholder: "placeholder",
  },
};

export const MultipleButtonIconInput: Story = {
  args: {
    placeholder: "placeholder",
    rightAdornment: (
      <div style={{ display: "flex", height: "16px", alignItems: "center" }}>
        <span>kg</span>
        <div>
          <Button icon={<IconChevronLeft />} variant="icon" />
          <Button icon={<IconChevronRight />} variant="icon" />
        </div>
        <IconSearch />
      </div>
    ),
  },
};

export const UnitInput: Story = {
  args: {
    placeholder: "placeholder",
    leftAdornment: <IconSearch />,
    rightAdornment: "kg",
  },
};

export const ErrorInput: Story = {
  args: {
    placeholder: "placeholder",
    error: true,
    defaultValue: "text",
    leftAdornment: <IconSearch />,
    rightAdornment: "kg",
  },
};

export const WarningInput: Story = {
  args: {
    placeholder: "placeholder",
    warning: true,
    defaultValue: "text",
    leftAdornment: <IconSearch />,
    rightAdornment: "kg",
  },
};

export const DisabledInput: Story = {
  args: {
    placeholder: "placeholder",
    defaultValue: "text",
    disabled: true,
  },
};
