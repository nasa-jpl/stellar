import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

import CheckboxItem from './context-menu-checkbox-item.svelte';
import Content from './context-menu-content.svelte';
import Item from './context-menu-item.svelte';
import Label from './context-menu-label.svelte';
import RadioGroup from './context-menu-radio-group.svelte';
import RadioItem from './context-menu-radio-item.svelte';
import Separator from './context-menu-separator.svelte';
import Shortcut from './context-menu-shortcut.svelte';
import SubContent from './context-menu-sub-content.svelte';
import SubTrigger from './context-menu-sub-trigger.svelte';

const Sub = ContextMenuPrimitive.Sub;
const Root = ContextMenuPrimitive.Root;
const Trigger = ContextMenuPrimitive.Trigger;
const Group = ContextMenuPrimitive.Group;

export type ContextMenuSize = 'default' | 'sm';

const contextMenuVariants = {
  size: {
    default: {
      checkboxItem: 'py-1.5 text-sm',
      item: 'py-1.5 text-sm',
      label: 'py-1.5 text-sm',
      radioItem: 'py-1.5 text-sm',
      subTrigger: 'py-1.5 text-sm',
    },
    sm: {
      checkboxItem: 'py-1 text-xs',
      item: 'py-1 text-xs',
      label: 'py-1 text-xs',
      radioItem: 'py-1 text-xs',
      subTrigger: 'py-1 text-xs',
    },
  },
};

export {
  CheckboxItem,
  Content,
  //
  Root as ContextMenu,
  CheckboxItem as ContextMenuCheckboxItem,
  Content as ContextMenuContent,
  Group as ContextMenuGroup,
  Item as ContextMenuItem,
  Label as ContextMenuLabel,
  RadioGroup as ContextMenuRadioGroup,
  RadioItem as ContextMenuRadioItem,
  Separator as ContextMenuSeparator,
  Shortcut as ContextMenuShortcut,
  Sub as ContextMenuSub,
  SubContent as ContextMenuSubContent,
  SubTrigger as ContextMenuSubTrigger,
  Trigger as ContextMenuTrigger,
  contextMenuVariants,
  Group,
  Item,
  Label,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Shortcut,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
};
