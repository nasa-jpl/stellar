import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { isAfter, isBefore, isValid, startOfDay } from 'date-fns';
import { CalendarArrowDown, Eraser } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';
import { DateRange, TZDate } from 'react-day-picker';
import { toast } from 'sonner';
import './App.css';
import { Button } from './components/ui/button';
import { Calendar } from './components/ui/calendar';
import DatePicker, { DateRangePicker, formatDateISO, parseDateStringISO } from './components/ui/date-picker';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { ThemeProvider } from './components/ui/theme-provider';
import { Toaster } from './components/ui/toaster';

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date('2025-02-01T00:00:00Z'));
  const [dateError, setDateError] = useState<string>('');
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date('2025-02-01T00:00:00Z'),
    to: new Date('2025-02-15T00:00:00Z'),
  });
  const [dateRangeError, setDateRangeError] = useState<string>('');

  const minDate = new Date('2020-02-01T00:00:00Z');
  const maxDate = new Date('2040-12-01T00:00:00Z');

  const onDatePickerKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === 'Enter') {
      handleDatePickerEvent(e);
    }
  };

  const handleDatePickerEvent = (e: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
    const dateString = (e.target as HTMLInputElement).value;
    const date = parseDateStringISO(dateString);
    if (!dateString) {
      setDateError('Date required');
    } else if (!date || !isValid(date)) {
      setDateError('Invalid date');
    } else if (isBefore(date, minDate) || isAfter(date, maxDate)) {
      setDateError('Date out of range');
    } else {
      setDateError('');
      setDate(date);
    }
  };

  const onDateRangeKeyUp = (
    e: KeyboardEvent<HTMLInputElement>,
    which: 'from' | 'to',
    inputValues: { from: string; to: string },
  ) => {
    const { key } = e;
    if (key === 'Enter') {
      handleDateRangePickerEvent(e, which, inputValues);
    }
  };

  const handleDateRangePickerEvent = (
    e: KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
    which: 'from' | 'to',
    inputValues: { from: string; to: string },
  ) => {
    const dateString = (e.target as HTMLInputElement).value;
    const eventDate = parseDateStringISO(dateString);
    const eventVerb = which === 'from' ? 'start' : 'end';
    const otherDate = parseDateStringISO(inputValues[which === 'from' ? 'to' : 'from']);
    const otherDateVerb = which === 'from' ? 'end' : 'start';
    if (!dateString) {
      setDateRangeError(`${eventVerb === 'start' ? 'Start' : 'End'} date required`);
    } else if (!eventDate || !isValid(eventDate)) {
      setDateRangeError(`Invalid ${eventVerb} date`);
    } else if (isBefore(eventDate, minDate) || isAfter(eventDate, maxDate)) {
      setDateRangeError('Date out of range');
    } else if (!otherDate || !isValid(otherDate)) {
      setDateRangeError(`Invalid ${otherDateVerb} date`);
    } else {
      const startDate = which === 'from' ? eventDate : otherDate;
      const endDate = which === 'to' ? eventDate : otherDate;
      if (isBefore(endDate, startDate)) {
        setDateRangeError('Start date must precede end date');
      } else {
        setDateRangeError('');
        setDateRange({ from: startDate, to: endDate });
      }
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col items-start">
        <DatePicker
          size="sm"
          startMonth={new Date('2020-02-01T00:00:00Z')}
          endMonth={new Date('2040-12-01T00:00:00Z')}
          timezone="UTC"
          selected={date}
          onCalendarSelect={d => {
            setDate(d);
            setDateError('');
          }}
          inputProps={{ onKeyUp: onDatePickerKeyUp, onBlur: handleDatePickerEvent }}
          formatDate={formatDateISO}
          footer={
            <div className="mt-2 flex flex-col gap-2">
              <Button size="lg" className="w-full" variant="outline" onClick={() => setDate(undefined)}>
                <Eraser size={16} /> Clear
              </Button>
              <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => {
                  setDate(startOfDay(new TZDate(new Date(), 'UTC')));
                  setDateError('');
                }}
              >
                <CalendarArrowDown size={16} /> Today
              </Button>
            </div>
          }
        />
        <div className="p-1 text-xs font-medium text-destructive">{dateError}</div>
      </div>
      <br />
      <div className="flex flex-col items-start">
        <DateRangePicker
          size="sm"
          timezone="UTC"
          selected={dateRange}
          onKeyUp={onDateRangeKeyUp}
          onBlur={handleDateRangePickerEvent}
          onCalendarSelect={d => {
            setDateRange(d);
            setDateRangeError('');
          }}
          formatDate={formatDateISO}
          footer={
            <div className="mt-2 flex flex-col gap-2">
              <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => setDateRange({ from: undefined, to: undefined })}
              >
                <Eraser size={16} /> Clear
              </Button>
              <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => setDateRange({ from: startOfDay(new TZDate(new Date(), 'UTC')), to: undefined })}
              >
                <CalendarArrowDown size={16} /> Today
              </Button>
            </div>
          }
        />
        <div className="p-1 text-xs font-medium text-destructive">{dateRangeError}</div>
      </div>
      <Select>
        <SelectTrigger size="xs" className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent size="xs">
          <SelectGroup>
            <SelectLabel size="xs">Fruits</SelectLabel>
            <SelectItem size="xs" value="apple">
              Apple
            </SelectItem>
            <SelectItem size="xs" value="banana">
              Banana
            </SelectItem>
            <SelectItem size="xs" value="blueberry">
              Blueberry
            </SelectItem>
            <SelectItem size="xs" value="grapes">
              Grapes
            </SelectItem>
            <SelectItem size="xs" value="pineapple">
              Pineapple
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Toaster />
      <div>
        <Calendar captionLayout="dropdown" mode="single" />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.info('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
