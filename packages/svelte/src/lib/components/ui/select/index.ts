import { Select as SelectPrimitive } from 'bits-ui';

import Content from './select-content.svelte';
import Item from './select-item.svelte';
import Label from './select-label.svelte';
import Separator from './select-separator.svelte';
import Trigger from './select-trigger.svelte';

const Root = SelectPrimitive.Root;
const Group = SelectPrimitive.Group;
const Input = SelectPrimitive.Input;
const Value = SelectPrimitive.Value;

export type SelectSize = 'default' | 'sm' | 'xs';

const selectVariants = {
  size: {
    default: {
      trigger: 'h-10 px-3 py-2',
      content: 'p-1',
      item: 'py-1.5 pl-8 pr-2 text-sm',
      label: 'py-1.5 pl-8 pr-2 text-sm',
      icon: 'left-2 h-3.5 w-3.5',
    },
    sm: {
      trigger: 'h-8 px-2 py-1.5 text-sm',
      content: 'p-0.5',
      item: 'py-1 pl-6 pr-1.5 text-sm',
      label: 'py-1 pl-6 pr-1.5 text-sm',
      icon: 'left-1.5 h-3 w-3',
    },
    xs: {
      trigger: 'h-6 px-2 py-1 text-xs',
      content: 'p-0.5',
      item: 'py-0.5 pl-5 pr-1 text-xs',
      label: 'py-0.5 pl-5 pr-1 text-xs',
      icon: 'left-1 h-2.5 w-2.5',
    },
  },
};

export {
  Content,
  Group,
  Input,
  Item,
  Label,
  Root,
  //
  Root as Select,
  Content as SelectContent,
  Group as SelectGroup,
  Input as SelectInput,
  Item as SelectItem,
  Label as SelectLabel,
  Separator as SelectSeparator,
  Trigger as SelectTrigger,
  Value as SelectValue,
  selectVariants,
  Separator,
  Trigger,
  Value,
};
