import { Warning } from "components/Warning";
import { IconWarning } from "index";

import { Meta, StoryObj } from "@storybook/react";

export default { component: Warning } as Meta<typeof Warning>;

export const Default: StoryObj = {
  args: {
    children: "Warning, something is awry",
  },
};

export const WarningWithIcon: StoryObj = {
  args: {
    children: (
      <>
        <IconWarning />
        Warning, something is awry
        <IconWarning />
      </>
    ),
  },
};
