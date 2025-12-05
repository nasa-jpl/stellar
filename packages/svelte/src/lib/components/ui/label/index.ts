import Root from './label.svelte';

export type LabelSize = 'default' | 'sm';

const labelVariants = {
  size: {
    default: 'text-sm font-medium',
    sm: 'text-xs font-normal',
  },
};

export {
  //
  Root as Label,
  labelVariants,
  Root,
};
