import { StoryObj, Meta } from "@storybook/react";
import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  IconChevronDown,
  IconChevronUp,
  IconHelicopter,
  IconRover,
  IconSatellite,
  IconSol,
} from "components/Icons";
import { Menu, MenuItem, MenuLabel, MenuRightSlot } from "components/Menu";
import * as NavbarPrimitive from "components/Navbar";

export default { component: NavbarPrimitive.Navbar } as Meta<
  typeof NavbarPrimitive.Navbar
>;
type Story = StoryObj<typeof NavbarPrimitive.Navbar>;

const navigationLinks = [
  <NavbarPrimitive.NavbarLink key="1" href="#">
    <IconRover /> Page 1
  </NavbarPrimitive.NavbarLink>,
  <NavbarPrimitive.NavbarLink key="2" href="#">
    <IconHelicopter /> Page 2
  </NavbarPrimitive.NavbarLink>,
  <NavbarPrimitive.NavbarLink key="3" href="#" active>
    <IconSatellite /> Page 3
  </NavbarPrimitive.NavbarLink>,
];

const mobileNavigationLinks = navigationLinks.concat(
  <NavbarPrimitive.NavbarLink key="4" href="#">
    <IconArrowLeft /> Logout
  </NavbarPrimitive.NavbarLink>,
);

const logo = <IconSol style={{ width: "24px", height: "24px" }} />;

const userMenu = (
  <Menu
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
);

const moreNavigationLinks = navigationLinks.concat([
  <NavbarPrimitive.NavbarLink key="4" href="#">
    <IconCalendar /> Page 4
  </NavbarPrimitive.NavbarLink>,
]);

export const Default: Story = {
  args: {
    mobileBreakpoint: 800,
  },
  render: (args) => {
    return (
      <NavbarPrimitive.Navbar {...args}>
        {/* Content to show when screen width is 1100px or more */}
        <NavbarPrimitive.NavbarBreakpoint min={1100}>
          <NavbarPrimitive.NavbarBrand
            title="Stellar"
            version="1.0.0"
            logo={logo}
            link="#"
          />
          {moreNavigationLinks}
          <NavbarPrimitive.NavbarContent
            full
            align="right"
            responsiveBreakpointMin={1100}
          >
            <div
              style={{
                display: "flex",
                gap: "var(--st-grid-unit2x)",
                alignItems: "center",
              }}
            >
              <Button variant="secondary">Action 1</Button>
              <Button>Action 2</Button>
              <Button variant="tertiary">Help</Button>
              {userMenu}
            </div>
          </NavbarPrimitive.NavbarContent>
        </NavbarPrimitive.NavbarBreakpoint>

        {/* Content to show when screen width is 800-1100px */}
        <NavbarPrimitive.NavbarBreakpoint min={800} max={1100}>
          <NavbarPrimitive.NavbarBrand version="1.0.0" title="Stellar" />
          {navigationLinks}
          <NavbarPrimitive.NavbarContent full align="right">
            <div
              style={{
                display: "flex",
                gap: "var(--st-grid-unit2x)",
                alignItems: "center",
              }}
            >
              <Button variant="secondary">Action 1</Button>
              <Button>Action 2</Button>
              {userMenu}
            </div>
          </NavbarPrimitive.NavbarContent>
        </NavbarPrimitive.NavbarBreakpoint>

        {/* Content to show when screen width is below 800px */}
        <NavbarPrimitive.NavbarBreakpoint max={800}>
          <NavbarPrimitive.NavbarContent full align="center">
            <NavbarPrimitive.NavbarBrand title="Stellar" />
          </NavbarPrimitive.NavbarContent>

          <NavbarPrimitive.NavbarContent align="right">
            {userMenu}
          </NavbarPrimitive.NavbarContent>
        </NavbarPrimitive.NavbarBreakpoint>

        {/* Mobile menu that will only be shown when screen width is less than the NavbarPrimitive.Navbar mobileBreakPoint prop */}
        <NavbarPrimitive.NavbarMobileMenu>
          {mobileNavigationLinks}
        </NavbarPrimitive.NavbarMobileMenu>
      </NavbarPrimitive.Navbar>
    );
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "150px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

/** Customize the mobile menu toggle by supplying a `renderMobileMenuToggle` prop that
 * returns an element when provided with `open` and `toggleOpen`.
 */
export const CustomMobileMenuToggle: Story = {
  args: {
    mobileBreakpoint: 800,
    renderMobileMenuToggle: (open, toggleOpen) => {
      return (
        <Button variant="icon" onClick={toggleOpen}>
          {!open ? <IconChevronDown /> : <IconChevronUp />}
        </Button>
      );
    },
  },
  render: Default.render,
  decorators: Default.decorators,
};
