import classNames from "classnames";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

export type PopoverContentProps = {
  className?: string;
  children?: React.ReactNode;
} & PopoverPrimitive.PopoverContentProps;

export const PopoverContent = forwardRef(
  (props: PopoverContentProps, forwardedRef) => {
    const { children, className = "", ...popoverContentProps } = props;
    const popoverContentClass = classNames({
      "st-react-popover": true,
      [className]: !!className,
    });
    return (
      <PopoverPrimitive.Content
        className={popoverContentClass}
        sideOffset={8}
        // @ts-ignore
        ref={forwardedRef}
        {...popoverContentProps}
      >
        {children}
        {/* <PopoverPrimitive.Arrow /> */}
      </PopoverPrimitive.Content>
    );
  },
);

export type PopoverProps = {
  children?: string | React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  contentProps?: PopoverPrimitive.PopoverContentProps;
} & PopoverPrimitive.PopoverProps;

/** Displays rich content in a portal, triggered by a button.
 * Built using Radix Popover, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * Figma Design TODO,
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/popover)
 */
export const Popover = (props: PopoverProps) => {
  const {
    children,
    trigger,
    className = "",
    contentProps,
    ...popoverProps
  } = props;

  return (
    <PopoverPrimitive.Root {...popoverProps}>
      <PopoverContent className={className} {...contentProps}>
        {children}
      </PopoverContent>
      {trigger && <PopoverTrigger asChild>{trigger}</PopoverTrigger>}
    </PopoverPrimitive.Root>
  );
};
