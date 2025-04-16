import { Error } from "components/Error";
import { IconWarning } from "index";

import { Meta } from "@storybook/react";

export default { component: Error } as Meta<typeof Error>;

export const Default: Story = {
  args: {
    children: "An error has occurred",
  },
};

export const ErrorWithIcon: Story = {
  args: {
    children: (
      <>
        <IconWarning />
        An error has occurred
        <IconWarning />
      </>
    ),
  },
};
