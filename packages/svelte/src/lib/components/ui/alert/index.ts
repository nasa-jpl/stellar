import type { VariantProps } from '$lib/types/tailwind.js';
import { tv } from 'tailwind-variants';
import Description from './alert-description.svelte';
import Title from './alert-title.svelte';
import Root from './alert.svelte';

const alertSizeVariants = {
  size: {
    default: {
      alert: 'p-2.5 [&:has(svg)]:pl-10 [&>svg]:left-3 [&>svg]:top-3',
      title: 'text-sm mb-0',
      description: 'text-xs leading-5',
    },
    lg: {
      alert: '',
      title: '',
      description: '',
    },
  },
};

export const alertVariants = tv({
  base: 'relative w-full rounded-lg border p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',

  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive:
        'border-destructive/50 text-destructive text-destructive dark:border-destructive [&>svg]:text-destructive',
    },
    ...alertSizeVariants,
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type AlertSize = 'default' | 'lg';

export type Variant = VariantProps<typeof alertVariants>['variant'];
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export {
  //
  Root as Alert,
  Description as AlertDescription,
  alertSizeVariants,
  Title as AlertTitle,
  Description,
  Root,
  Title,
};
