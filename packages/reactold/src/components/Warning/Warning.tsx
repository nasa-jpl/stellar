import classNames from "classnames";

export interface WarningProps {
  children: React.ReactNode;
}

/** Displays the child content with warning styling. Used primarily for inputs.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5981-14607&t=Ib4BYaUOqoKlAPlk-4)
 */
export const Warning = ({ children }: WarningProps) => {
  return <div className={classNames("st-react-warning")}>{children}</div>;
};
