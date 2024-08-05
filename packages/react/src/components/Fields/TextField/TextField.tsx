import { forwardRef, useState } from "react";
import { FormField } from "components/FormField";
import { Label } from "components/Label";
import { Input, InputProps } from "components/Input";
import { Error } from "components/Error";
import { Warning } from "components/Warning";
import { simpleUniqueId } from "../../../util";

export interface TextFieldProps
  extends Omit<InputProps, "ref" | "error" | "warning"> {
  inputClassName?: string;
  label?: string;
  error?: string;
  warning?: string;
  isError?: boolean;
  isWarning?: boolean;
  helperText?: string;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  labelPosition?: "top" | "left";
}

/** Configurable form component
 *
 * [Figma Link](https://www.figma.com/file/rWFjkQTNSOwbx2UJgX84WK/%2356%3A-Component-Property-Refactor?type=design&node-id=4834-0&t=T5nPBuxTNuzVE26h-4)
 */
export const TextField = forwardRef(
  (
    {
      inputClassName,
      id,
      label,
      labelPosition = "top",
      required,
      error,
      warning,
      isError,
      isWarning,
      helperText,
      leftAdornment,
      rightAdornment,
      ...inputProps
    }: TextFieldProps,
    forwardedRef: React.Ref<HTMLInputElement>,
  ) => {
    const [formId] = useState(() => id || simpleUniqueId("textfield-"));
    return (
      <FormField
        flow={labelPosition === "left" ? "horizontal" : "vertical"}
        className="st-react-text-field"
      >
        <Label required={required} htmlFor={formId}>
          {label}
        </Label>

        <FormField flow="vertical">
          <Input
            ref={forwardedRef}
            id={formId}
            className={inputClassName}
            leftAdornment={leftAdornment}
            rightAdornment={rightAdornment}
            error={!!error || isError}
            warning={!!warning || isWarning}
            {...inputProps}
          />
          <div className="st-react-text-field-helper-text">
            {error ? <Error>{error}</Error> : <></>}
            {!error && warning ? <Warning>{warning}</Warning> : <></>}
            {!error && !warning && helperText ? (
              <span className="st-react-input-helper-text">{helperText}</span>
            ) : (
              <></>
            )}
          </div>
        </FormField>
      </FormField>
    );
  },
);

export default TextField;
