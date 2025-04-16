export interface ErrorProps {
  children: React.ReactNode;
}

/** Displays the child content with error styling. Used primarily for inputs.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5981-14607&t=Ib4BYaUOqoKlAPlk-4)
 */
export const Error = ({ children }: ErrorProps) => {
  return <div className="st-react-error">{children}</div>;
};
