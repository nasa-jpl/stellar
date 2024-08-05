import classNames from "classnames";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { IconCheck, IconMinus } from "components/Icons";
import { forwardRef } from "react";

export type MenuContentProps = {
  children?: React.ReactNode;
  className?: string;
} & DropdownMenuPrimitive.DropdownMenuContentProps;

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  ({ children, className = "", ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className={classNames("st-react-menu-content", className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <DropdownMenuPrimitive.Arrow className="st-react-menu-arrow" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    );
  },
);

export type MenuProps = {
  trigger?: React.ReactNode;
  modal?: Pick<DropdownMenuPrimitive.DropdownMenuProps, "modal">;
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuProps;

export const MenuTrigger = DropdownMenuPrimitive.Trigger;

/** Displays a menu to the user. Supports labels, groups, checkable items, submenus, and more.
 *
 * Built using Radix Dropdown Menu, styled for Stellar.
 * Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * Figma Docs TODO,
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/dropdown-menu)
 */
export const Menu = ({
  children,
  trigger,
  modal = false,
  ...props
}: MenuProps) => (
  <DropdownMenuPrimitive.Root modal={modal} {...props}>
    <DropdownMenuPrimitive.Portal>
      <MenuContent>{children}</MenuContent>
    </DropdownMenuPrimitive.Portal>
    {trigger && <MenuTrigger asChild>{trigger}</MenuTrigger>}
  </DropdownMenuPrimitive.Root>
);

export type MenuLabelProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuLabelProps;

export const MenuLabel = ({
  children,
  className = "",
  ...props
}: MenuLabelProps) => (
  <DropdownMenuPrimitive.Label
    className={classNames("st-react-menu-label", className)}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Label>
);

export type MenuItemProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuItemProps;

export const MenuItem = ({
  children,
  className = "",
  ...props
}: MenuItemProps) => (
  <DropdownMenuPrimitive.Item
    className={classNames("st-react-menu-item", className)}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
);

export type MenuGroupsProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuGroupProps;

export const MenuGroup = ({
  children,
  className = "",
  ...props
}: MenuGroupsProps) => (
  <DropdownMenuPrimitive.Group
    className={classNames("st-react-menu-group", className)}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Group>
);

export type MenuItemIndicatorProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuItemIndicatorProps;

export const MenuItemIndicator = ({
  children,
  className = "",
  ...props
}: MenuItemIndicatorProps) => (
  <DropdownMenuPrimitive.DropdownMenuItemIndicator
    className={classNames("st-react-menu-item-indicator", className)}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.DropdownMenuItemIndicator>
);

export type MenuCheckboxItemProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuCheckboxItemProps;

export const MenuCheckboxItem = forwardRef<
  HTMLDivElement,
  MenuCheckboxItemProps
>(({ children, className = "", ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={classNames("st-react-menu-checkbox-item", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <MenuItemIndicator>
        {props.checked === "indeterminate" && <IconMinus />}
        {props.checked === true && <IconCheck />}
      </MenuItemIndicator>
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

export const MenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export type MenuRadioItemProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuRadioItemProps;

export const MenuRadioItem = forwardRef<HTMLDivElement, MenuRadioItemProps>(
  ({ children, className = "", ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.RadioItem
        className={classNames("st-react-menu-radio-item", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <MenuItemIndicator>
          <IconCheck />
        </MenuItemIndicator>
      </DropdownMenuPrimitive.RadioItem>
    );
  },
);

export type MenuSeparatorProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuSeparatorProps;

export const MenuSeparator = ({
  className = "",
  ...props
}: MenuSeparatorProps) => (
  <DropdownMenuPrimitive.Separator
    className={classNames("st-react-menu-separator", className)}
    {...props}
  />
);

export type MenuSubTriggerProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuSubTriggerProps;

export const MenuSubTrigger = ({
  children,
  className = "",
  ...props
}: MenuSubTriggerProps) => (
  <DropdownMenuPrimitive.SubTrigger
    className={classNames("st-react-menu-sub-trigger", className)}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.SubTrigger>
);

export type MenuSubProps = {
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuSubProps;

export const MenuSub = ({ children, ...props }: MenuSubProps) => (
  <DropdownMenuPrimitive.Sub {...props}>{children}</DropdownMenuPrimitive.Sub>
);

export type MenuSubContentProps = {
  className?: string;
  children?: React.ReactNode;
} & DropdownMenuPrimitive.DropdownMenuSubContentProps;

export const MenuSubContent = forwardRef<HTMLDivElement, MenuSubContentProps>(
  ({ children, className = "", ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.SubContent
          className={classNames("st-react-menu-subcontent", className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </DropdownMenuPrimitive.SubContent>
      </DropdownMenuPrimitive.Portal>
    );
  },
);

export type MenuRightSlotProps = {
  className?: string;
  children?: React.ReactNode;
};

export const MenuRightSlot = ({
  children,
  className = "",
  ...props
}: MenuRightSlotProps) => (
  <div className={classNames("st-react-menu-right-slot", className)} {...props}>
    {children}
  </div>
);
