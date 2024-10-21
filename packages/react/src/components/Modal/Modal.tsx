import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "components/Button";
import { IconClose } from "components/Icons";
import classNames from "classnames";
import { forwardRef } from "react";

export interface ModalDescriptionProps {
  children?: string | React.ReactNode;
}

export const ModalDescription = (props: ModalDescriptionProps) => (
  <DialogPrimitive.Description asChild>
    <div className="st-react-modal--description--text st-typography-body">
      {props.children}
    </div>
  </DialogPrimitive.Description>
);

export type ModalContentProps = {
  children?: string | React.ReactNode;
} & DialogPrimitive.DialogContentProps;

export const ModalContent = forwardRef(
  (props: ModalContentProps, forwardedRef) => {
    const { children, className = "", ...modalProps } = props;
    const modalClass = classNames({
      "st-react-modal": true,
      [className]: !!className,
    });
    return (
      <DialogPrimitive.Content
        // @ts-ignore
        ref={forwardedRef}
        className={modalClass}
        {...modalProps}
      >
        {children}
      </DialogPrimitive.Content>
    );
  },
);

export interface ModalActionRowProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalActionRow = (props: ModalActionRowProps) => {
  const { children, className = "" } = props;
  const rootClass = classNames({
    "st-react-modal--action-row": true,
    [className]: !!className,
  });
  return <div className={rootClass}>{children}</div>;
};

export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalClose = DialogPrimitive.Close;
export const ModalTitle = DialogPrimitive.Title;

export interface ModalBodyProps {
  children?: string | React.ReactNode;
}

export const ModalBody = (props: ModalBodyProps) => (
  <div className="st-react-modal--content">{props.children}</div>
);

export type ModalProps = {
  title?: string | React.ReactNode;
  children?: string | React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  modalContentProps?: DialogPrimitive.DialogContentProps;
} & DialogPrimitive.DialogProps;

/** A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * Built using Radix Dialog, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * [Figma Link](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=5489-8659&t=zo3DlK1qdZkFhVCG-4),
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/dialog)
 */
export const Modal = (props: ModalProps) => {
  const {
    title,
    children,
    trigger,
    className = "",
    modalContentProps,
    ...modalProps
  } = props;

  return (
    <DialogPrimitive.Root {...modalProps}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="st-react-modal--overlay">
          <ModalContent className={className} {...modalContentProps}>
            <div className="st-react-modal--header">
              <div className="st-react-modal--header--title-row">
                <ModalTitle asChild>
                  <div className="st-react-modal--header--text st-typography-header">
                    {title}
                  </div>
                </ModalTitle>
                <DialogPrimitive.Close asChild>
                  <Button variant="icon">
                    <IconClose />
                  </Button>
                </DialogPrimitive.Close>
              </div>
            </div>
            {children}
          </ModalContent>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>

      {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}
    </DialogPrimitive.Root>
  );
};
