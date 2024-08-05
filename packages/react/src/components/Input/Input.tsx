import { FocusEvent, forwardRef, useCallback, useState } from "react";
import classNames from "classnames";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  inputClassName?: string;
  error?: boolean;
  warning?: boolean;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
}

/**
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5981-14044&t=Ib4BYaUOqoKlAPlk-4)
 */
export const Input = forwardRef(
  (
    {
      className = "",
      inputClassName = "",
      error,
      warning,
      leftAdornment,
      rightAdornment,
      onFocus,
      onBlur,
      ...inputProps
    }: InputProps,
    forwardedRef: React.Ref<HTMLInputElement>,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const focusCallback = useCallback(
      (event: FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(true);
        onFocus?.(event);
      },
      [onFocus],
    );
    const blurCallback = useCallback(
      (event: FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(false);
        onBlur?.(event);
      },
      [onBlur],
    );
    return (
      <div
        className={classNames("st-react-input", {
          [className]: !!className,
        })}
      >
        <div
          className={classNames("st-react-input--container", {
            focus: isFocused,
            error,
            warning: !error && warning,
          })}
        >
          {leftAdornment && (
            <div className="st-react-input--adornment">{leftAdornment}</div>
          )}
          <input
            className={classNames("st-react-input--input", {
              [inputClassName]: !!inputClassName,
            })}
            ref={forwardedRef}
            {...inputProps}
            onFocus={focusCallback}
            onBlur={blurCallback}
          />
          {rightAdornment && (
            <div className="st-react-input--adornment">{rightAdornment}</div>
          )}
        </div>
      </div>
    );
  },
);
