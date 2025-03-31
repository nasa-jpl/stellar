import Root from './checkbox.svelte';

export type CheckboxSize = 'default' | 'sm';

const checkboxVariants = {
  size: {
    default: 'h-4 w-4',
    sm: 'h-3 w-3',
  },
};

export {
  Root as Checkbox,
  checkboxVariants,
  //
  Root,
};
