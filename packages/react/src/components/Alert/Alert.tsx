import { Ref, forwardRef } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import classNames from "classnames";
import { ModalActionRow } from "components/Modal";

export type ActionContentProps = {
  children?: string | React.ReactNode;
} & AlertDialog.DialogContentProps;

export const AlertContent = forwardRef(
  (props: ActionContentProps, forwardedRef: Ref<HTMLDivElement>) => {
    const { children, className = "", ...alertProps } = props;
    const modalClass = classNames({
      "st-react-modal": true,
      "st-react-alert": true,
      [className]: !!className,
    });
    return (
      <AlertDialog.Content
        ref={forwardedRef}
        className={modalClass}
        {...alertProps}
      >
        {children}
      </AlertDialog.Content>
    );
  },
);

export const AlertTrigger = AlertDialog.Trigger;
export const AlertTitle = AlertDialog.Title;
export const AlertDescription = AlertDialog.Description;
export const AlertCancel = AlertDialog.Cancel;
export const AlertAction = AlertDialog.Action;

export type AlertProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: string | React.ReactNode;
  trigger?: React.ReactNode;
  alertContentProps?: AlertDialog.AlertDialogContentProps;
  className?: string;
} & AlertDialog.DialogProps;

/** A modal dialog that interrupts the user with important content and expects a response.
 *
 * Built using Radix Alert Dialog, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5489-8659&t=zo3DlK1qdZkFhVCG-4),
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/alert-dialog)
 */
export const Alert = (props: AlertProps) => {
  const {
    title,
    description,
    children,
    trigger,
    className = "",
    alertContentProps,
    ...alertProps
  } = props;

  return (
    <AlertDialog.Root {...alertProps}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="st-react-modal--overlay" />
        <AlertContent className={className} {...alertContentProps}>
          <div className="st-react-modal--header">
            <div className="st-react-modal--header--title-row">
              <AlertTitle asChild>
                <div className="st-react-modal--header--text st-typography-header">
                  {title}
                </div>
              </AlertTitle>
            </div>
          </div>
          <div className="st-react-modal--content">
            <AlertDescription asChild>
              <div className="st-react-modal--description--text st-typography-body">
                {description}
              </div>
            </AlertDescription>
          </div>
          <ModalActionRow>{children}</ModalActionRow>
        </AlertContent>
      </AlertDialog.Portal>

      {trigger && <AlertTrigger asChild>{trigger}</AlertTrigger>}
    </AlertDialog.Root>
  );
};
