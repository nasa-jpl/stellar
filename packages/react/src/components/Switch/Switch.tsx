import { forwardRef } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import classNames from "classnames";
import { Label } from "components/Label";

export type SwitchProps = {
  label?: string;
  labelPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
} & SwitchPrimitive.SwitchProps;

/** A control that allows the user to toggle between checked and not checked. Intended for usage in a list where the parent element will supply a width.

 * Built using Radix Switch, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5379%3A7122&t=hcGqixx7MZ4qSgbd-1),
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/switch)
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    const {
      disabled = false,
      className = "",
      label = "",
      labelPosition = "left",
      ...other
    } = props;

    const switchClass = classNames({
      "st-react-switch": true,
      "st-react-switch--label-right": labelPosition === "right",
      "st-react-switch--unlabeled": !label,
      [className]: !!className,
    });
    return (
      <div className={switchClass}>
        {label && (
          <Label htmlFor={label} className="st-react-switch--label">
            {label}
          </Label>
        )}
        <SwitchPrimitive.Root
          id={label}
          className="st-react-switch--box"
          disabled={disabled}
          ref={ref}
          {...other}
        >
          <SwitchPrimitive.Thumb className="st-react-switch--thumb" />
        </SwitchPrimitive.Root>
      </div>
    );
  },
);
