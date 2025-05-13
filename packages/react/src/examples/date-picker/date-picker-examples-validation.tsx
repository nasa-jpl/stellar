import { Button } from '@/components/ui/button';
import DatePicker, { formatDateISO, parseDateStringISO } from '@/components/ui/date-picker';
import { startOfDay } from 'date-fns';
import { CalendarArrowDown, Eraser } from 'lucide-react';
import { useState } from 'react';
import { TZDate } from 'react-day-picker';

export function DatePickerValidation() {
  const [date, setDate] = useState<Date | undefined>(new Date('2025-02-01T00:00:00Z'));

  return (
    <DatePicker
      startMonth={new Date('2020-02-01T00:00:00Z')}
      endMonth={new Date('2040-12-01T00:00:00Z')}
      timezone="UTC"
      selected={date}
      onChange={setDate}
      formatDate={formatDateISO}
      parseDateString={parseDateStringISO}
      footer={
        <div className="mt-2 flex flex-col gap-2">
          <Button size="lg" className="w-full" variant="outline" onClick={() => setDate(undefined)}>
            <Eraser size={16} /> Clear
          </Button>
          <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() => setDate(startOfDay(new TZDate(new Date(), 'UTC')))}
          >
            <CalendarArrowDown size={16} /> Today
          </Button>
        </div>
      }
    />
  );
}
