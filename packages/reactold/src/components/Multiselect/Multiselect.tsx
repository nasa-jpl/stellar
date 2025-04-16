import classNames from "classnames";

interface Option {
  value: string;
  label: string | JSX.Element;
}

export interface MultiselectProps {
  options: Array<Option>;
  onChange: (value: string) => unknown;
  selectedValue: string;
  size?: "medium" | "large";
  className?: string;
}

/** A linear set of two or more options, each of which functions as a button.
 * This component does not have any internal state and is meant to be controlled by a parent component.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=4837-8852&t=8XeOQ2eDM7SxDmLO-4)
 */
export const Multiselect = (props: MultiselectProps) => {
  const {
    options,
    selectedValue,
    onChange,
    size = "medium",
    className = "",
  } = props;

  const multiSelectClass = classNames({
    "st-react-multiselect": true,
    [`st-react-multiselect--${size}`]: true,
    [className]: !!className,
  });
  const onOptionClick = (value: string) => {
    if (value !== selectedValue) onChange(value);
  };
  const renderOption = (option: Option) => {
    const optionClass = classNames({
      "st-react-multiselect--option": true,
      "st-react-multiselect--option--selected": option.value === selectedValue,
    });
    return (
      <button
        type="button"
        onClick={() => onOptionClick(option.value)}
        key={option.value}
        className={optionClass}
      >
        <div className="st-react-multiselect--optionText st-typography-medium">
          {option.label}
        </div>
      </button>
    );
  };
  return (
    <div className={multiSelectClass}>
      <div className="st-react-multiselect--background"></div>
      {options.map((option) => renderOption(option))}
    </div>
  );
};
