import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverClose } from "components/Popover";
import { Button, Checkbox } from "index";

export default { component: Popover } as Meta<typeof Popover>;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    children: (
      <>
        <div>
          <div
            style={{ marginBottom: "8px" }}
            className="st-typography-small-caps"
          >
            Option Group 1
          </div>
          <Checkbox label="Group1 1" />
          <Checkbox label="Group1 2" />
          <Checkbox label="Group1 3" />
          <Checkbox label="Group1 4" />
        </div>
        <br />
        <div>
          <div
            style={{ marginBottom: "8px" }}
            className="st-typography-small-caps"
          >
            Option Group 2
          </div>
          <Checkbox label="Group2 1" />
          <Checkbox label="Group2 2" />
          <Checkbox label="Group2 3" />
          <Checkbox label="Group2 4" />
        </div>
        <br />
        <PopoverClose asChild>
          <Button variant="secondary" style={{ width: "100%" }}>
            Close
          </Button>
        </PopoverClose>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export const OverridingRadixProps: Story = {
  args: {
    ...Default.args,
    // All other props are spread to the Radix Popover Root.
    // See https://www.radix-ui.com/docs/primitives/components/popover#root
    // for a full list of Root props
    modal: true, // Radix Popover Root prop example
    onOpenChange: action("open changed"), // Radix Popover Root prop example
    // Control the majority of the Popover behaviors by setting Radix Popover Content props.
    // See https://www.radix-ui.com/docs/primitives/components/popover#content
    // for a full list of Content props.
    // Common props include "side", "sideOffset", "align", and "avoidCollisions".
    contentProps: {
      sideOffset: 18,
      alignOffset: 32,
      onInteractOutside: (evt) => evt.preventDefault(),
      onPointerDownOutside: (evt) => evt.preventDefault(),
      onEscapeKeyDown: (evt) => evt.preventDefault(),
    },
    trigger: <Button>Open Popover</Button>,
  },
};
