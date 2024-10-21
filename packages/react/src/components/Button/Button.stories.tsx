import { StoryObj, Meta } from "@storybook/react";
import { Button } from "components/Button";
import IconSol from "components/Icons/Sol";

export default { component: Button } as Meta<typeof Button>;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
};

export const JSXChildren: Story = {
  args: {
    children: (
      <>
        <IconSol />
        <span>JSX Children</span>
        <IconSol />
      </>
    ),
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    icon: <IconSol />,
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "secondary",
    size: "large",
  },
};
