import classNames from "classnames";

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
  required?: boolean;
}

/** Component used to label various user input components
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=1-4445&t=Ib4BYaUOqoKlAPlk-4)
 */
export const Label = ({
  children,
  className = "",
  required,
  htmlFor,
}: LabelProps): JSX.Element => {
  const optionalProps: { htmlFor?: string } = {};
  if (htmlFor) optionalProps.htmlFor = htmlFor;
  return (
    <label
      className={classNames("st-react-label st-typography-body", {
        [className]: !!className,
      })}
      {...optionalProps}
    >
      {required && <span className="st-react-label--required-mark">*</span>}
      {children}
    </label>
  );
};
