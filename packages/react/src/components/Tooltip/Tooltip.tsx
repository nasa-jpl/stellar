import classNames from "classnames";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipProps = {
  content?: React.ReactNode;
  arrowWidth?: number;
  arrowHeight?: number;
  className?: string;
  contentProps?: TooltipPrimitive.TooltipContentProps;
} & TooltipPrimitive.TooltipProps;

export const TooltipProvider = TooltipPrimitive.TooltipProvider;

/** A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * Built using Radix Tooltip, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * Note: In order for Tooltips to function you must wrap your application with a TooltipProvider.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5489-8803&t=J0nts8M4a18lZboq-4),
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/tooltip)
 */
export const Tooltip = (props: TooltipProps) => {
  const {
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    className = "",
    contentProps = {},
    arrowWidth = 11,
    arrowHeight = 5,
    ...otherTooltipProps
  } = props;

  const contentClass = classNames({
    "st-react-tooltip": true,
    "st-typography-body": true,
    [className]: !!className,
  });
  const { sideOffset = 4, ...otherContentProps } = contentProps;

  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      {...otherTooltipProps}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side="top"
          align="center"
          className={contentClass}
          sideOffset={sideOffset}
          {...otherContentProps}
        >
          {content}
          <TooltipPrimitive.Arrow
            width={arrowWidth}
            height={arrowHeight}
            className="st-react-tooltip--arrow"
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
