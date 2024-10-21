import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProvider } from "components/Tooltip";
import { Button, IconSol } from "index";

export default {
  component: Tooltip,
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div
          className="st-typography-medium"
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} as Meta<typeof Tooltip>;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <Button>Hover over me</Button>,
    content: "Tooltip Content",
  },
};

export const DelayDuration: Story = {
  ...Default,
  args: {
    delayDuration: 0,
    children: <Button>No Delay</Button>,
    content: "Tooltip Content",
  },
};

export const PreferredSide: Story = {
  ...Default,
  args: {
    contentProps: { side: "bottom", align: "start" },
    children: <Button>Bottom Start</Button>,
    content: "Tooltip Content",
  },
};

export const JSXChildren: Story = {
  ...Default,
  args: {
    children: <Button>Hover over me</Button>,
    content: (
      <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
        <IconSol />
        Tooltip Content
      </div>
    ),
  },
};

export const DisabledContent: Story = {
  ...Default,
  args: {
    children: (
      <Button disabled style={{ pointerEvents: "none" }}>
        Disabled Content
      </Button>
    ),
    content: (
      <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
        <IconSol />
        Tooltip Content
      </div>
    ),
  },
};
