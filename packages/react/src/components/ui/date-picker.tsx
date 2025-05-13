import { cn } from '@/lib/utils';
import { format, formatISO, parse, parseISO } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { FocusEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { DateRange, PropsBase, PropsRange, PropsSingle, TZDate } from 'react-day-picker';
import { Button } from './button';
import { Calendar } from './calendar';
import { Input } from './input';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

type DatePickerProps = {
  className?: string;
  formatDate?: (date: Date, timezone: string) => string;
  timezone?: string;
  size?: 'default' | 'sm';
  placeholder?: string;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onChange?: (date: Date) => void;
  inputProps?: React.ComponentProps<'input'>;
  onCalendarSelect?: (date: Date) => void;
} & Omit<PropsBase, 'mode'> &
  Omit<PropsSingle, 'mode' | 'onSelect'>;

export function formatDateDefault(date: Date) {
  return format(date, 'MM/dd/yyyy');
}

export function parseDateStringDefault(dateString: string, timezone: string) {
  return new TZDate(parse(dateString, 'MM/dd/yyyy', new TZDate(new Date(), timezone)), timezone);
}

export function formatDateISO(date: Date) {
  return formatISO(date);
}

export function parseDateStringISO(dateString: string) {
  return parseISO(dateString);
}

export function DatePicker({
  formatDate = formatDateDefault,
  inputProps = {},
  onChange = () => {},
  onCalendarSelect = () => {},
  timezone = 'UTC',
  size = 'default',
  className = '',
  placeholder = `Ex: ${formatDate(new TZDate('2030-12-01T00:00:00Z', 'UTC'), 'UTC')}`,
  ...props
}: DatePickerProps) {
  const getSelectedDateFromProp = useCallback(
    (selected: Date | undefined, timezone: string) =>
      selected ? new TZDate(selected || new TZDate(), timezone) : undefined,
    [],
  );
  const getSelectedDateStringFromProp = useCallback(
    (selected: Date | undefined, timezone: string, formatDate: DatePickerProps['formatDate']) =>
      selected ? (formatDate || formatDateDefault)(new TZDate(selected, timezone), timezone) : '',
    [],
  );

  // Hold the month in state to control the calendar when the input changes
  const [month, setMonth] = useState<Date | undefined>(getSelectedDateFromProp(props.selected, timezone));
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(getSelectedDateFromProp(props.selected, timezone));
  const [inputValue, setInputValue] = useState(getSelectedDateStringFromProp(props.selected, timezone, formatDate));
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    setMonth(getSelectedDateFromProp(props.selected, timezone));
    setSelectedDate(getSelectedDateFromProp(props.selected, timezone));
    setInputValue(getSelectedDateStringFromProp(props.selected, timezone, formatDate));
  }, [props.selected, timezone, formatDate, getSelectedDateFromProp, getSelectedDateStringFromProp]);

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue('');
      setSelectedDate(undefined);
    } else {
      const tzdate = new TZDate(date, timezone);
      setSelectedDate(tzdate);
      setInputValue(formatDate(tzdate, timezone));
      const nativeDate = new Date(tzdate);
      onChange(nativeDate); // use normal date for change event to preserve native date functions
      onCalendarSelect(nativeDate);
    }
    setPopoverOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value;
    setInputValue(dateString); // keep the input value in sync
  };

  return (
    <div className="flex gap-1">
      <Input
        sizeVariant={size === 'sm' ? 'xs' : 'default'}
        className={cn('w-60', className)}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        {...inputProps}
      />
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button size={size === 'default' ? 'icon-xl' : 'icon'} variant="outline" aria-label="Open calendar">
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-min">
          <Calendar
            timeZone={timezone}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            selected={selectedDate}
            onSelect={handleDayPickerSelect}
            mode="single"
            {...props}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

type DateRangePickerProps = {
  /* TODO add inputProps for start and end */
  className?: string;
  formatDate?: (date: Date, timezone: string) => string;
  timezone?: string;
  size?: 'default' | 'sm';
  placeholder?: string;
  onKeyUp?: (
    event: KeyboardEvent<HTMLInputElement>,
    which: 'from' | 'to',
    inputValues: { from: string; to: string },
  ) => void;
  onBlur?: (
    event: FocusEvent<HTMLInputElement, Element>,
    which: 'from' | 'to',
    inputValues: { from: string; to: string },
  ) => void;
  onChange?: (dateRange: DateRange) => void;
  onCalendarSelect?: (dateRange: DateRange) => void;
} & Omit<PropsBase, 'mode'> &
  Omit<PropsRange, 'mode' | 'onSelect'>;

export function DateRangePicker({
  formatDate = formatDateDefault,
  onKeyUp = () => {},
  onBlur = () => {},
  onChange = () => {},
  onCalendarSelect = () => {},
  timezone = 'UTC',
  size = 'default',
  className = '',
  placeholder = `Ex: ${formatDate(new TZDate(new Date(), 'UTC'), 'UTC')}`,
  ...props
}: DateRangePickerProps) {
  const getSelectedDateFromProp = useCallback(
    (selected: Date | undefined, timezone: string) =>
      selected ? new TZDate(selected || new TZDate(), timezone) : undefined,
    [],
  );
  const getSelectedDateStringFromProp = useCallback(
    (selected: Date | undefined, timezone: string, formatDate: DatePickerProps['formatDate']) =>
      selected ? (formatDate || formatDateDefault)(new TZDate(selected, timezone), timezone) : '',
    [],
  );

  // Hold the month in state to control the calendar when the input changes
  const [month, setMonth] = useState<Date | undefined>(getSelectedDateFromProp(props.selected?.from, timezone));
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>({
    from: getSelectedDateFromProp(props.selected?.from, timezone),
    to: getSelectedDateFromProp(props.selected?.to, timezone),
  });
  const [fromInputValue, setFromInputValue] = useState(
    getSelectedDateStringFromProp(props.selected?.from, timezone, formatDate),
  );
  const [toInputValue, setToInputValue] = useState(
    getSelectedDateStringFromProp(props.selected?.to, timezone, formatDate),
  );
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    setMonth(getSelectedDateFromProp(props.selected?.to, timezone));
    setSelectedDateRange({
      from: getSelectedDateFromProp(props.selected?.from, timezone),
      to: getSelectedDateFromProp(props.selected?.to, timezone),
    });
    setFromInputValue(getSelectedDateStringFromProp(props.selected?.from, timezone, formatDate));
    setToInputValue(getSelectedDateStringFromProp(props.selected?.to, timezone, formatDate));
  }, [props.selected, timezone, formatDate, getSelectedDateFromProp, getSelectedDateStringFromProp]);

  const handleDayPickerSelect = (dateRange: DateRange | undefined) => {
    if (!dateRange) {
      setFromInputValue('');
      setToInputValue('');
      setSelectedDateRange(undefined);
    } else {
      const { from, to } = dateRange;
      if (from && to) {
        const tzdateFrom = new TZDate(from, timezone);
        const tzdateTo = new TZDate(to, timezone);
        setSelectedDateRange({ from: tzdateFrom, to: tzdateTo });
        setFromInputValue(formatDate(tzdateFrom, timezone));
        setToInputValue(formatDate(tzdateTo, timezone));
        onChange(dateRange); // use normal date for change event to preserve native date functions
        onCalendarSelect(dateRange);
      }
    }
  };

  return (
    <div className="flex gap-1">
      <Input
        sizeVariant={size === 'sm' ? 'xs' : 'default'}
        className={cn('w-60', className)}
        type="text"
        value={fromInputValue}
        placeholder={placeholder}
        onChange={e => setFromInputValue(e.target.value)}
        onKeyUp={e => onKeyUp(e, 'from', { from: fromInputValue, to: toInputValue })}
        onBlur={e => onBlur(e, 'from', { from: fromInputValue, to: toInputValue })}
      />
      <Input
        sizeVariant={size === 'sm' ? 'xs' : 'default'}
        className={cn('w-60', className)}
        type="text"
        value={toInputValue}
        placeholder={placeholder}
        onChange={e => setToInputValue(e.target.value)}
        onKeyUp={e => onKeyUp(e, 'to', { from: fromInputValue, to: toInputValue })}
        onBlur={e => onBlur(e, 'to', { from: fromInputValue, to: toInputValue })}
      />
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button size={size === 'default' ? 'icon-xl' : 'icon'} variant="outline" aria-label="Open calendar">
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-min">
          <Calendar
            timeZone={timezone}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            selected={selectedDateRange}
            onSelect={handleDayPickerSelect}
            mode="range"
            {...props}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
