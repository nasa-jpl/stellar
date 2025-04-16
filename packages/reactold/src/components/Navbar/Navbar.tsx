import {
  AnchorHTMLAttributes,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import classNames from "classnames";
import { IconClose, IconHamburger } from "components/Icons";
import { Button } from "components/Button";
import { PropsWithChildren } from "react";

type ReactJSXElement = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: any;
};

export type NavbarMobileMenuProps = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * [Figma Link](TODO)
 */
export const NavbarMobileMenu = (props: NavbarMobileMenuProps) => {
  const { children, className = "" } = props;

  const navbarMobileMenuClass = classNames({
    "st-react-navbar-mobile-menu": true,
    [className]: !!className,
  });
  return <div className={navbarMobileMenuClass}>{children}</div>;
};

type NavbarBreakpointProps = {
  min?: number;
  max?: number;
} & PropsWithChildren;

export const NavbarBreakpoint = (props: NavbarBreakpointProps) => {
  return <>{props.children}</>;
};

type NavbarContentProps = {
  full?: boolean;
  children?: React.ReactNode;
  align?: "left" | "right" | "center";
  responsiveBreakpointMin?: number;
  responsiveBreakpointMax?: number;
  className?: string;
};

export const NavbarContent = (props: NavbarContentProps) => {
  const { children, align = "left", full = false, className = "" } = props;

  const navbarContentClass = classNames("st-react-navbar-content", {
    "st-react-navbar-content--full": full,
    "st-react-navbar-content--align-left": align === "left",
    "st-react-navbar-content--align-right": align === "right",
    "st-react-navbar-content--align-center": align === "center",
    [className]: !!className,
  });
  return <div className={navbarContentClass}>{children}</div>;
};

export type NavbarLinkProps = {
  active?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * [Figma Link](TODO)
 */
export const NavbarLink = (props: NavbarLinkProps) => {
  const {
    children,
    active = false,
    href = "",
    className = "",
    ...other
  } = props;

  const navbarLinkClass = classNames({
    "st-react-navbar-link": true,
    "st-react-navbar-link--active": active,
    [className]: !!className,
  });
  return (
    <a href={href} className={navbarLinkClass} {...other}>
      {children}
    </a>
  );
};

export type NavbarBrandProps = {
  logo?: React.ReactNode;
  title?: React.ReactNode;
  version?: React.ReactNode;
  link?: string;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarBrand = (props: NavbarBrandProps) => {
  const { logo, title, version, link = "", className = "", ...args } = props;

  const navbarBrandClass = classNames({
    "st-react-navbar-brand": true,
    [className]: !!className,
  });

  const innerContent = (
    <>
      {logo && <div className="st-react-navbar-brand--logo">{logo}</div>}
      {title && (
        <div className="st-react-navbar-brand--title">
          {title}
          {version && (
            <div className="st-react-navbar-brand--version">{version}</div>
          )}
        </div>
      )}
    </>
  );

  return !link ? (
    <div className={navbarBrandClass}>{innerContent}</div>
  ) : (
    <a className={navbarBrandClass} href={link} {...args}>
      {innerContent}
    </a>
  );
};

export const NavbarSpacer = () => (
  <div className="st-react-navbar--mobile-spacer" />
);

export type NavbarProps = {
  children?: React.ReactNode;
  enableMobileMenu?: boolean;
  mobileBreakpoint?: number;
  mobileMenuPosition?: "left" | "right";
  renderMobileMenuToggle?: (
    open: boolean,
    toggleOpen: () => void,
  ) => JSX.Element;
  className?: string;
};

/** A component that appears at the top of an app screen to help users navigate through the application content and access
 * global functionality. The react-stellar Navbar is designed to be composed to suit different needs and provides solutions
 * for responsive content rendering.
 *
 * [Figma Link](TODO)
 */
export const Navbar = (props: NavbarProps) => {
  const {
    children,
    enableMobileMenu = true,
    mobileBreakpoint = 800,
    mobileMenuPosition = "left",
    renderMobileMenuToggle,
    className = "",
  } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const toggleMobileMenuOpen = () => setMobileMenuOpen(!mobileMenuOpen);

  const showMobileMenu =
    enableMobileMenu && document.body.clientWidth < mobileBreakpoint;

  const navbarClass = classNames({
    "st-react-navbar": true,
    "st-react-navbar--mobile": showMobileMenu,
    [className]: !!className,
  });

  const handleResize = useCallback(() => {
    setClientWidth(document.body.clientWidth);
    if (mobileMenuOpen && document.body.clientWidth >= mobileBreakpoint) {
      setMobileMenuOpen(false);
    }
  }, [clientWidth]);
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const visibleChildren: React.ReactNode[] = [];
  let mobileMenu;
  ((children as ReactJSXElement[]) || []).forEach((child) => {
    if (child.type.name === NavbarMobileMenu.name) {
      // Pull out the mobile menu as we will render it separately
      mobileMenu = child;
    } else if (child.type.name === NavbarBreakpoint.name) {
      // Enforce min and max breakpoints
      const childProps = child.props as NavbarBreakpointProps;
      if (
        !(
          (typeof childProps.min === "number" &&
            clientWidth <= childProps.min) ||
          (typeof childProps.max === "number" && clientWidth > childProps.max)
        )
      ) {
        visibleChildren.push(child);
      }
    } else {
      visibleChildren.push(child);
    }
  });

  const mobileMenuComponent =
    showMobileMenu &&
    (typeof renderMobileMenuToggle === "function" ? (
      renderMobileMenuToggle(mobileMenuOpen, toggleMobileMenuOpen)
    ) : (
      <>
        <Button variant="icon" onClick={toggleMobileMenuOpen}>
          {!mobileMenuOpen ? <IconHamburger /> : <IconClose />}
        </Button>
      </>
    ));

  return (
    <>
      <div className={navbarClass}>
        {mobileMenuPosition === "left" && mobileMenuComponent}
        {visibleChildren}
        {mobileMenuPosition === "right" && mobileMenuComponent}
      </div>
      {showMobileMenu && mobileMenuOpen && mobileMenu}
    </>
  );
};
