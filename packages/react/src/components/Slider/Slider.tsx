import { forwardRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import classNames from "classnames";
import { Label } from "components/Label";
import { Input } from "components/Input";

export type SliderProps = {
  label?: string;
  labelPosition?: "left" | "right";
  inputPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  showInputs?: boolean;
  showRange?: boolean;
  min?: number;
  max?: number;
  onValueChange?(value: number[]): void;
  onValueCommit?(value: number[]): void;
  step?: number;
} & SliderPrimitive.SliderProps;

/** A control that allows the user to slide between a fixed range of values. Intended for usage in a list where the parent element will supply a width.

 * Built using Radix Slider, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component. Note that this component must be controlled from parent state unless the `showInputs` is set to `false`.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5379-7122&mode=design&t=X6TCgolgFRZIWdSR-4),
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/slider)
 */
export const Slider = forwardRef<HTMLButtonElement, SliderProps>(
  (props, ref) => {
    const {
      disabled = false,
      className = "",
      label = "",
      labelPosition = "left",
      inputPosition = "left",
      value: propsValue,
      defaultValue = [50],
      min = 0,
      max = 100,
      showInputs = true,
      showRange = true,
      step = 1,
      onValueChange = () => {},
      ...other
    } = props;

    const formatRangeLabel = (x: number) => {
      // Round to at most three decimal places
      return Math.round((x + Number.EPSILON) * 1000) / 1000;
    };

    const renderInput = (
      value: number,
      onChange: (evt: React.FormEvent<HTMLInputElement>) => void,
    ) => {
      if (showInputs) {
        return (
          <Input
            className="st-react-slider--input"
            value={value}
            type="number"
            min={min}
            max={max}
            onChange={onChange}
          />
        );
      }
      return null;
    };

    const value = propsValue || defaultValue;
    const sliderClass = classNames({
      "st-react-slider": true,
      "st-react-slider--label-right": labelPosition === "right",
      "st-react-slider--unlabeled": !label,
      [className]: !!className,
    });

    const showFirstInput = showInputs && value.length > 0;
    const showSecondInput = showInputs && value.length > 1;
    const onFirstInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
      const newValue = [parseFloat(evt.currentTarget.value)];
      if (value.length > 1) newValue.push(value[1]);
      onValueChange(newValue);
    };
    return (
      <div className={sliderClass}>
        {label && (
          <Label htmlFor={label} className="st-react-slider--label">
            {label}
          </Label>
        )}
        <div className="st-react-slider--container">
          {showFirstInput &&
            inputPosition === "left" &&
            renderInput(value[0], onFirstInputChange)}
          <SliderPrimitive.Slider
            defaultValue={value}
            disabled={disabled}
            ref={ref}
            className="st-react-slider--root"
            onValueChange={onValueChange}
            step={step}
            min={min}
            max={max}
            {...(showInputs ? { value } : "")}
            {...other}
          >
            <SliderPrimitive.Track className="st-react-slider--track">
              <SliderPrimitive.Range className="st-react-slider--range" />
            </SliderPrimitive.Track>
            {value.map((_, i) => (
              <SliderPrimitive.SliderThumb
                key={i}
                className="st-react-slider--thumb"
              />
            ))}
            {showRange && (
              <div className="st-react-slider--min-max st-typography-label">
                <div className="st-react-slider--min">
                  {formatRangeLabel(min)}
                </div>
                <div className="st-react-slider--max">
                  {formatRangeLabel(max)}
                </div>
              </div>
            )}
          </SliderPrimitive.Slider>
          {showFirstInput &&
            inputPosition === "right" &&
            renderInput(value[0], onFirstInputChange)}
          {showSecondInput && (
            <Input
              className="st-react-slider--input"
              value={value[1]}
              type="number"
              min={min}
              max={max}
              onChange={(evt) => {
                onValueChange([value[0], parseFloat(evt.currentTarget.value)]);
              }}
            />
          )}
        </div>
      </div>
    );
  },
);
