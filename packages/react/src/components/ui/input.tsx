import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputSize = 'default' | 'sm' | 'xs';

const inputVariants = {
  size: {
    default: 'h-10 px-3 py-2',
    sm: 'h-8 px-2 text-xs',
    xs: 'h-6 px-2 text-xs',
  },
};

export interface InputProps extends React.ComponentProps<'input'> {
  sizeVariant?: InputSize;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, sizeVariant = 'default', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full rounded-md border border-input bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          inputVariants.size[sizeVariant],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
