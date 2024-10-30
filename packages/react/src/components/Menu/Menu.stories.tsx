import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import {
  IconArrowRight,
  IconChevronDown,
  IconChevronRight,
  IconSettings,
  IconThreeDot,
} from "components/Icons";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRightSlot,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
} from "components/Menu";
import { useState } from "react";

export default { component: Menu } as Meta<typeof Menu>;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [itemChecked, setItemChecked] = useState(true);
    const [radioItem, setRadioItem] = useState("item 1");

    return (
      <Menu
        {...args}
        trigger={
          <Button variant="icon">
            <IconSettings />
          </Button>
        }
      >
        <MenuLabel>Ship Functions</MenuLabel>
        <MenuItem>Open Cargo Bay Doors</MenuItem>
        <MenuGroup>
          <MenuCheckboxItem
            checked={itemChecked}
            onCheckedChange={setItemChecked}
          >
            Ludicrous Mode
            <MenuRightSlot>⌘+L</MenuRightSlot>
          </MenuCheckboxItem>
          <MenuItem>Engage Thrusters</MenuItem>
          <MenuItem disabled>
            System Power Off <MenuRightSlot>⌘+O</MenuRightSlot>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Movement</MenuLabel>
        <MenuRadioGroup onValueChange={setRadioItem} value={radioItem}>
          <MenuRadioItem value="item 1">
            Orbital Maneuvering Thrusters
          </MenuRadioItem>
          <MenuRadioItem value="item 2">Hyperdrive</MenuRadioItem>
        </MenuRadioGroup>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger>
            Holodeck
            <MenuRightSlot>
              <IconChevronRight />
            </MenuRightSlot>
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>Training Program 1</MenuItem>
            <MenuItem>Special Program</MenuItem>
          </MenuSubContent>
        </MenuSub>
      </Menu>
    );
  },
};

/** Only one menu can be open at once.
 *
 */
export const Multiple: Story = {
  ...Default.args,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    return (
      <>
        <Menu
          {...args}
          trigger={
            <Button variant="icon">
              <IconThreeDot />
            </Button>
          }
        >
          <MenuItem>Action 1</MenuItem>
          <MenuItem>Action 2</MenuItem>
        </Menu>
        <Menu
          {...args}
          trigger={
            <Button
              size="large"
              variant="tertiary"
              style={{ padding: "0 var(--st-grid-unit)", gap: "4px" }}
            >
              <Avatar text="K" />
              <IconChevronDown />
            </Button>
          }
        >
          <MenuLabel>Welcome kjaneway</MenuLabel>
          <MenuItem>Account Settings</MenuItem>
          <MenuItem>
            Logout
            <MenuRightSlot>
              <IconArrowRight />
            </MenuRightSlot>
          </MenuItem>
        </Menu>
      </>
    );
  },
};
