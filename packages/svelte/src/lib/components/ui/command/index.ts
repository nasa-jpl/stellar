import { Command as CommandPrimitive } from 'cmdk-sv';
import { getContext, setContext } from 'svelte';

import Dialog from './command-dialog.svelte';
import Empty from './command-empty.svelte';
import Group from './command-group.svelte';
import Input from './command-input.svelte';
import Item from './command-item.svelte';
import List from './command-list.svelte';
import Separator from './command-separator.svelte';
import Shortcut from './command-shortcut.svelte';
import Root from './command.svelte';

const Loading = CommandPrimitive.Loading;

export type CommandSize = 'default' | 'sm' | 'xs';

export const commandSizeVariants = {
  input: {
    default: 'h-11 py-3',
    sm: 'h-9 py-2',
    xs: 'h-7 py-1.5',
  },
  inputWrapper: {
    default: 'px-2',
    sm: 'px-2',
    xs: 'px-1.5',
  },
  inputIcon: {
    default: 'h-4 w-4 mr-2',
    sm: 'h-4 w-4 mr-2',
    xs: 'h-3 w-3 mr-1.5',
  },
  item: {
    default: 'px-2 py-1.5',
    sm: 'px-2 py-1',
    xs: 'px-1.5 py-1',
  },
  group: {
    default: 'p-1 [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5',
    sm: 'p-1 [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1',
    xs: 'p-0.5 [&_[data-cmdk-group-heading]]:px-1.5 [&_[data-cmdk-group-heading]]:py-1.5',
  },
  shortcut: {
    default: 'text-xs',
    sm: 'text-xs',
    xs: 'text-[10px]',
  },
  empty: {
    default: 'py-6 text-sm',
    sm: 'py-4 text-sm',
    xs: 'py-3 text-xs',
  },
  text: {
    default: 'text-sm',
    sm: 'text-sm',
    xs: 'text-xs',
  },
};

export function setCommandCtx(size: CommandSize) {
  setContext('command', { size });
}

export function getCommandCtx() {
  return getContext<{ size: CommandSize }>('command') ?? { size: 'default' };
}

export {
  //
  Root as Command,
  Dialog as CommandDialog,
  Empty as CommandEmpty,
  Group as CommandGroup,
  Input as CommandInput,
  Item as CommandItem,
  List as CommandList,
  Loading as CommandLoading,
  Separator as CommandSeparator,
  Shortcut as CommandShortcut,
  Dialog,
  Empty,
  Group,
  Input,
  Item,
  List,
  Loading,
  Root,
  Separator,
  Shortcut,
};
