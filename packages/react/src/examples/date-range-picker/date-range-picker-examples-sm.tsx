import { Button } from '@/components/ui/button';
import { DateRangePicker, formatDateISO, parseDateStringISO } from '@/components/ui/date-picker';
import { endOfDay, isAfter, isBefore, isValid, startOfDay } from 'date-fns';
import { CalendarArrowDown, Eraser } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';
import { DateRange, TZDate } from 'react-day-picker';

export function DateRangePickerSm() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date('2025-02-01T00:00:00Z'),
    to: new Date('2025-02-15T00:00:00Z'),
  });
  const [dateRangeError, setDateRangeError] = useState<string>('');

  const minDate = new Date('2020-02-01T00:00:00Z');
  const maxDate = new Date('2040-12-01T00:00:00Z');

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
    <div className="flex flex-col items-start">
      <DateRangePicker
        size="sm"
        startMonth={new Date('2020-02-01T00:00:00Z')}
        endMonth={new Date('2040-12-01T00:00:00Z')}
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
              onClick={() => {
                setDateRange({
                  from: startOfDay(new TZDate(new Date(), 'UTC')),
                  to: endOfDay(new TZDate(new Date(), 'UTC')),
                });
                setDateRangeError('');
              }}
            >
              <CalendarArrowDown size={16} /> Today
            </Button>
          </div>
        }
      />
      <div className="p-1 text-xs font-medium text-destructive">{dateRangeError}</div>
    </div>
  );
}
