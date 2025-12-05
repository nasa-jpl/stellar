import { Button } from '@/components/ui/button';
import DatePicker, { formatDateISO, parseDateStringISO } from '@/components/ui/date-picker';
import { isAfter, isBefore, isValid, startOfDay } from 'date-fns';
import { CalendarArrowDown, Eraser } from 'lucide-react';
import { useState } from 'react';
import { TZDate } from 'react-day-picker';

export function DatePickerDefault() {
  const [date, setDate] = useState<Date | undefined>(new Date('2025-02-01T00:00:00Z'));
  const [dateError, setDateError] = useState<string>('');

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

  return (
    <div className="flex flex-col items-start">
      <DatePicker
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
  );
}
