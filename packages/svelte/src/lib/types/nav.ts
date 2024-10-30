export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: any;
  label?: string;
};

export type SidebarNavItem = NavItem & {
  items: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
  items: NavItemWithChildren[];
};
