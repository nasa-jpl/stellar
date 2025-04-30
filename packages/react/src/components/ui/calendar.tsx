'use client';

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from 'lucide-react';
import { DayFlag, DayPicker, SelectionState, UI } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  components,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3 w-max', className)}
      classNames={{
        [UI.Dropdowns]: 'relative inline-flex items-center gap-2',
        [UI.DropdownRoot]: 'relative inline-flex items-center',
        [UI.Dropdown]: cn(
          'z-[2] opacity-0 appearance-none absolute w-full m-0 p-0 border-none leading-[inherit] peer px-1.5 py-1',
          captionLayout === 'label' ? 'cursor-[inherit]' : 'cursor-pointer',
        ),
        [UI.Months]: 'relative',
        [UI.Month]: 'space-y-4 ml-0',
        [UI.MonthCaption]: 'flex justify-center items-center h-7',
        [UI.CaptionLabel]: cn(
          'text-sm font-medium flex items-center whitespace-nowrap peer-focus-visible:ring-ring peer-focus-visible:ring-2 peer-hover:bg-accent transition-colors rounded px-1.5 py-1 hover gap-0.5',
          captionLayout === 'label' ? 'cursor-[inherit]' : 'cursor-pointer',
        ),
        [UI.PreviousMonthButton]: cn(
          buttonVariants({ variant: 'outline' }),
          'absolute left-1 top-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        [UI.NextMonthButton]: cn(
          buttonVariants({ variant: 'outline' }),
          'absolute right-1 top-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        [UI.MonthGrid]: 'w-full border-collapse space-y-1',
        [UI.Weekdays]: 'flex',
        [UI.Weekday]: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        [UI.Week]: 'flex w-full mt-2',
        [UI.Day]:
          'h-9 w-9 items-center justify-center inline-flex text-center rounded-md text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        [UI.DayButton]: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal text-sm aria-selected:opacity-100 hover:bg-primary hover:text-primary-foreground',
        ),
        [SelectionState.range_end]: 'day-range-end',
        [SelectionState.selected]:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        [SelectionState.range_middle]: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        [DayFlag.today]: 'bg-accent text-accent-foreground',
        [DayFlag.outside]:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        [DayFlag.disabled]: 'text-muted-foreground opacity-50',
        [DayFlag.hidden]: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) => <Chevron {...props} />,
        ...components,
      }}
      captionLayout={captionLayout}
      {...props}
    />
  );
};

const Chevron = ({ orientation = 'left', className = '' }) => {
  switch (orientation) {
    case 'left':
      return <ChevronLeftIcon className={cn('h-4 w-4', className)} />;
    case 'right':
      return <ChevronRightIcon className={cn('h-4 w-4', className)} />;
    case 'up':
      return <ChevronUpIcon className={cn('h-4 w-4', className)} />;
    case 'down':
      return <ChevronDownIcon className={cn('h-4 w-4', className)} />;
    default:
      return null;
  }
};
