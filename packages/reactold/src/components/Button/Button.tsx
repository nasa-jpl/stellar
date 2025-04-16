import { forwardRef } from "react";
import classNames from "classnames";

export type ButtonProps = {
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  variant?: "secondary" | "tertiary" | "icon";
  size?: "medium" | "large";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=4835-60&t=zo3DlK1qdZkFhVCG-4)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = "",
      type = "button",
      size = "medium",
      onClick,
      icon,
      disabled = false,
      className = "",
      ...other
    } = props;

    const buttonClass = classNames({
      "st-button": true,
      secondary: variant === "secondary",
      tertiary: variant === "tertiary",
      icon: variant === "icon",
      large: size === "large",
      [className]: !!className,
    });
    return (
      <button
        ref={ref}
        onClick={onClick}
        type={type}
        className={buttonClass}
        disabled={disabled}
        {...other}
      >
        {icon && icon}
        {children}
      </button>
    );
  },
);
