import { useState } from "react";
import ReactSelect, {
  ClearIndicatorProps,
  CommonProps,
  components,
  GroupBase,
  MultiValueRemoveProps,
  Props,
  SingleValue,
  SingleValueProps,
} from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import classNames from "classnames";

import { IconClose } from "components/Icons";
import { Label } from "components/Label";
import { FormField } from "components/FormField";

import { simpleUniqueId } from "../../util";
export interface OptionType {
  [string: string]: any;
}
export type OptionsType = OptionType[];
export interface GroupType {
  [string: string]: any; // group label
  options: OptionsType;
}

const ClearIndicator = (
  props: ClearIndicatorProps<OptionType, boolean, GroupType>,
) => {
  const {
    children = <IconClose />,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      className="st-react-dropdown--clear-indicator"
    >
      {children}
    </div>
  );
};

export type DropdownProps = {
  options: OptionsType;
  className?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: "top" | "left" | "inner";
  components?: SelectComponents<OptionType, boolean, GroupType>;
} & Partial<CommonProps<OptionType, boolean, GroupType>> &
  Props;

/** Displays a list of options for the user to pick from.
 * Built using react-select, styled for Stellar. Refer to the react-select docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5379%3A7122&t=hcGqixx7MZ4qSgbd-1),
 * [react-select Docs](https://react-select.com/home)
 */
export const Dropdown = (props: DropdownProps) => {
  const {
    id,
    options,
    disabled = false,
    isSearchable = false, // Set this to be off by default, react-select has it on by default
    label = "",
    labelPosition = "top",
    className = "",
    components: propComponents,
    ...rest
  } = props;

  const [formId] = useState(() => id || simpleUniqueId("dropdown-"));

  const containerClass = classNames({
    "st-react-dropdown": true,
    [className]: !!className,
  });
  const SingleValueComponent: SingleValue<OptionType> = (
    singleValueProps: SingleValueProps,
  ) => {
    const { children, ...otherProps } = singleValueProps;
    return (
      <components.SingleValue {...otherProps}>
        {labelPosition === "inner" && (
          <span className="st-react-dropdown--inner-label">{label}:&nbsp;</span>
        )}
        {children}
      </components.SingleValue>
    );
  };

  const MultiValueRemove = (
    multiValueProps: MultiValueRemoveProps<OptionType>,
  ) => {
    return (
      <components.MultiValueRemove {...multiValueProps}>
        <IconClose />
      </components.MultiValueRemove>
    );
  };

  const selectComponents:
    | Partial<SelectComponents<unknown, boolean, GroupBase<unknown>>>
    | undefined = Object.assign(
    {},
    { SingleValue: SingleValueComponent, ClearIndicator, MultiValueRemove },
    propComponents,
  );

  return (
    <div className={containerClass}>
      <FormField
        flow={labelPosition === "left" ? "horizontal" : "vertical"}
        className="st-react-text-field"
      >
        {label && labelPosition !== "inner" && (
          <Label htmlFor={formId}>{label}</Label>
        )}

        <FormField flow="vertical">
          <ReactSelect
            inputId={formId}
            options={options}
            components={selectComponents}
            isDisabled={disabled}
            isSearchable={isSearchable}
            classNamePrefix="st-react-dropdown--rs"
            className="st-react-dropdown--rs"
            {...rest}
          />
        </FormField>
      </FormField>
    </div>
  );
};
