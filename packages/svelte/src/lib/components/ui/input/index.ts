import Root from './input.svelte';

export type FormInputEvent<T extends Event = Event> = T & {
  currentTarget: EventTarget & HTMLInputElement;
};
export type InputEvents = {
  blur: FormInputEvent<FocusEvent>;
  change: FormInputEvent<Event>;
  click: FormInputEvent<MouseEvent>;
  focus: FormInputEvent<FocusEvent>;
  focusin: FormInputEvent<FocusEvent>;
  focusout: FormInputEvent<FocusEvent>;
  keydown: FormInputEvent<KeyboardEvent>;
  keypress: FormInputEvent<KeyboardEvent>;
  keyup: FormInputEvent<KeyboardEvent>;
  mouseover: FormInputEvent<MouseEvent>;
  mouseenter: FormInputEvent<MouseEvent>;
  mouseleave: FormInputEvent<MouseEvent>;
  mousemove: FormInputEvent<MouseEvent>;
  paste: FormInputEvent<ClipboardEvent>;
  input: FormInputEvent<InputEvent>;
  wheel: FormInputEvent<WheelEvent>;
};

export type InputSize = 'default' | 'sm' | 'xs';

const inputVariants = {
  size: {
    default: 'h-10 px-3 py-2',
    sm: 'h-8 px-2 text-xs',
    xs: 'h-6 px-2 text-xs',
  },
};

export {
  //
  Root as Input,
  inputVariants,
  Root,
};
