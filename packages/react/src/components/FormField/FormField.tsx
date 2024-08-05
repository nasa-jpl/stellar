import classNames from "classnames";

export interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
  flow?: "horizontal" | "vertical";
}

/** Provides styling for child form components such as Label, Input, Warning, and Error.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5981-14044&t=Ib4BYaUOqoKlAPlk-4)
 */
export const FormField = ({
  flow = "vertical",
  className,
  children,
}: FormFieldProps) => {
  const containerClassName = classNames("st-react-form-field", {
    ...(className ? { [className]: true } : {}),
    "st-react-form-field--vertical": flow === "vertical",
    "st-react-form-field--horizontal": flow === "horizontal",
  });

  return <div className={containerClassName}>{children}</div>;
};
