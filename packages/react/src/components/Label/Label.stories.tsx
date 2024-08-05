import { Label } from "components/Label";

import { Meta } from "@storybook/react";

export default { component: Label } as Meta<typeof Label>;

export const StringLabel = {
  args: {
    children: "Name",
  },
};

export const RequiredLabel = {
  args: {
    required: true,
    children: "Required Name",
  },
};
