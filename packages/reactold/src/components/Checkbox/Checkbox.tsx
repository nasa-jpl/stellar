import { forwardRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import classNames from "classnames";
import { Label } from "components/Label";

export type CheckboxProps = {
  label?: string;
  labelPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
} & CheckboxPrimitive.CheckboxProps;

export const CheckSVG = () => (
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.7179 0.303855C8.10237 0.70034 8.09263 1.33343 7.69615 1.7179L3.57115 5.7179C3.18326 6.09403 2.56674 6.09403 2.17885 5.7179L0.303855 3.89972C-0.0926305 3.51525 -0.10237 2.88216 0.2821 2.48567C0.666571 2.08919 1.29966 2.07945 1.69615 2.46392L2.875 3.60705L6.30385 0.2821C6.70034 -0.10237 7.33343 -0.0926305 7.7179 0.303855Z"
      fill="curentColor"
    />
  </svg>
);

/** A control that allows the user to toggle between checked and not checked. Intended for usage in a list where the parent element will supply a width.
 *
 * Built using Radix Dialog, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5379%3A7122&t=hcGqixx7MZ4qSgbd-1),
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/checkbox)
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => {
    const {
      disabled = false,
      className = "",
      label = "",
      labelPosition = "left",
      ...other
    } = props;

    const checkboxClass = classNames({
      "st-react-checkbox": true,
      "st-react-checkbox--label-right": labelPosition === "right",
      "st-react-checkbox--unlabeled": !label,
      [className]: !!className,
    });
    return (
      <div className={checkboxClass}>
        {label && (
          <Label htmlFor={label} className="st-react-checkbox--label">
            {label}
          </Label>
        )}
        <CheckboxPrimitive.Root
          id={label}
          className="st-react-checkbox--box"
          disabled={disabled}
          ref={ref}
          {...other}
        >
          <div className="st-react-checkbox--indicator-check">
            <CheckSVG />
          </div>
        </CheckboxPrimitive.Root>
      </div>
    );
  },
);
