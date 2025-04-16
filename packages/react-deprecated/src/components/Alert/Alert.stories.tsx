import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertAction, AlertCancel } from "components/Alert";
import { Button } from "index";
import { useState } from "react";

export default { component: Alert } as Meta<typeof Alert>;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Are you sure?",
    trigger: (
      <Button size="large" onClick={() => {}}>
        Open Alert
      </Button>
    ),
    description:
      "This action cannot be undone, are you sure you want to delete this item?",
    onOpenChange: action("open changed"),
    children: (
      <>
        <AlertCancel asChild>
          <Button variant="secondary" onClick={action("action")}>
            Cancel
          </Button>
        </AlertCancel>
        <AlertAction asChild>
          <Button style={{ background: "var(--st-error-red)" }} onClick={action("action")}>
            Delete
          </Button>
        </AlertAction>
      </>
    ),
  },
};

export const OverrideContentProps: Story = {
  args: {
    ...Default.args,
    alertContentProps: {
      onEscapeKeyDown: (evt) => {
        evt.preventDefault();
      },
    },
    description:
      "Escape has been overridden to not automatically close the alert.",
    title: "Are you sure?",
  },
};

/** Directly control the modal using the `open` prop instead of
 * providing a `trigger` `React.ReactNode` prop.
 */
export const Controlled: Story = {
  args: {
    ...Default.args,
    trigger: null,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    return (
      <div>
        <span className="st-typography-medium">
          Open State: {open.toString()}{" "}
        </span>
        <Button size="large" onClick={toggleOpen}>
          Open Alert
        </Button>
        <Alert open={open} {...args} onOpenChange={toggleOpen} />
      </div>
    );
  },
};
