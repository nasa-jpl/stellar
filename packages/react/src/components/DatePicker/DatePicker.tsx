import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "react-day-picker/dist/style.css";
import { DayContentProps, DayPicker, useNavigation } from "react-day-picker";
import { Dropdown, OptionType } from "components/Dropdown";
import { TextField } from "components/Fields/TextField";
import { format, isAfter, isBefore, isValid, parse, parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { Button } from "components/Button";
import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
} from "components/Icons";
import { Tooltip } from "components/Tooltip";
import classNames from "classnames";
import * as Popover from "@radix-ui/react-popover";

function validate(
  dateString: string,
  formatString: string,
  required?: boolean,
  min?: Date,
  max?: Date,
) {
  try {
    if (required && !dateString) {
      throw new Error("Date required");
    }
    const parsedDate = parseDate(dateString, formatString);
    if (!isValid(parsedDate)) {
      throw new Error("Invalid date");
    }
    if (
      (min && isBefore(parsedDate, min)) ||
      (max && isAfter(parsedDate, max))
    ) {
      throw new Error("Date out of range");
    }
    return "";
  } catch (e) {
    return (e as Error).message;
  }
}

function getMonthDate(year: number, month: number): Date {
  const monthDate = new Date();
  monthDate.setUTCFullYear(year);
  monthDate.setUTCMonth(month);
  return monthDate;
}

function monthsForLocale(localeName = "en-US") {
  const fmt = new Intl.DateTimeFormat(localeName, { month: "long" }).format;
  const year = new Date().getFullYear();
  return [...Array(12).keys()].map((m) =>
    fmt(new Date(Date.UTC(year, (m + 1) % 12))),
  );
}

interface CustomCaptionProps {
  month: number;
  year: number;
  min?: Date;
  max?: Date;
  updateMonth: (month: number) => void;
  updateYear: (year: number) => void;
}

function CustomCaption({
  month,
  year,
  min,
  max,
  updateMonth,
  updateYear,
}: CustomCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  const updateMonthCallback = useCallback(
    (option: OptionType) => updateMonth(option.value),
    [updateMonth],
  );
  const updateYearCallback = useCallback(
    (option: OptionType) => updateYear(option.value),
    [updateYear],
  );

  const currentYear = new Date().getUTCFullYear();
  const fromMonth = min || new Date(currentYear - 10, 0);
  const toMonth = max || new Date(currentYear + 10, 11); // add 10 years
  const locale = new Intl.NumberFormat().resolvedOptions().locale;
  const months = monthsForLocale(locale);
  // TODO ISO vs local time?
  const years: number[] = [];
  for (
    let i = fromMonth.getUTCFullYear();
    i <= toMonth.getUTCFullYear();
    i += 1
  ) {
    years.push(i);
  }

  return (
    <div className="date-picker-caption">
      <Button
        variant="icon"
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        <IconChevronLeft />
      </Button>
      <div className="date-picker-caption--dropdowns">
        <Dropdown
          className="date-picker-caption--month"
          defaultValue={{ value: month, label: months[month] }}
          onChange={(o) => updateMonthCallback(o as OptionType)}
          name="month"
          options={months.map((m, i) => ({ value: i, label: m }))}
        />
        <Dropdown
          className="date-picker-caption--year"
          defaultValue={{ value: year, label: year }}
          onChange={(o) => updateYearCallback(o as OptionType)}
          name="year"
          options={years.map((y) => ({ value: y, label: y }))}
        />
      </div>
      <div className="date-picker-caption--buttons">
        <Button
          variant="icon"
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          <IconChevronRight />
        </Button>
      </div>
    </div>
  );
}

interface PickerProps {
  opened: boolean;
  date: Date;
  year: number;
  month: number;
  min?: Date;
  max?: Date;
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  renderDay?: (props: DayContentProps) => JSX.Element | null;
  updateDay: (day: Date) => void;
  updateMonthYear: (date: Date) => void;
  updateMonth: (month: number) => void;
  updateYear: (year: number) => void;
  onBlur: () => void;
}

function Picker({
  opened,
  date,
  year,
  month,
  updateDay,
  updateMonthYear,
  updateMonth,
  updateYear,
  min,
  max,
  renderHeader,
  renderFooter,
  renderDay,
}: PickerProps) {
  const disabled = [];
  if (min) disabled.push({ from: new Date("1900"), to: min });
  if (max) disabled.push({ from: max, to: new Date("9999") });
  if (opened)
    return (
      <div className="date-picker--calendar-container">
        {renderHeader && (
          <div className="date-picker--header">
            <div className="date-picker--header-content">{renderHeader()}</div>
          </div>
        )}
        <DayPicker
          formatters={{
            formatWeekdayName: (weekday, options) => {
              return format(weekday, "ccc", options);
            },
          }}
          showOutsideDays
          disabled={disabled}
          className="date-picker--picker st-typography-body"
          month={getMonthDate(year, month)}
          selected={date}
          onDayClick={(newDate) => updateDay(newDate)}
          onMonthChange={(newDate) => updateMonthYear(newDate)}
          components={{
            ...(renderDay ? { DayContent: renderDay } : null),
            Caption: (props) => (
              <CustomCaption
                {...props}
                year={year}
                month={month}
                updateYear={(y) => updateYear(y)}
                updateMonth={updateMonth}
                min={min}
                max={max}
              />
            ),
          }}
        />
        {renderFooter && (
          <div className="date-picker--footer">
            <div className="date-picker--footer-content">{renderFooter()}</div>
          </div>
        )}
      </div>
    );

  return null;
}

export interface DatePickerProps {
  onChange: (date: Date) => void;
  label?: string;
  year?: number;
  month?: number;
  min?: Date;
  max?: Date;
  date?: Date;
  utc?: boolean;
  errorString?: string;
  required?: boolean;
  labelPosition?: "left" | "top";
  minWidth?: number;
  placeholder?: string;
  renderHeader?: (
    setDateState: (date: Date) => void,
    setOpen: Dispatch<SetStateAction<boolean>>,
  ) => React.ReactNode;
  renderFooter?: (
    setDateState: (date: Date) => void,
    setOpen: Dispatch<SetStateAction<boolean>>,
  ) => React.ReactNode;
  renderDay?: (props: DayContentProps) => JSX.Element | null;
  formatString?: "ISO" | string;
  rightAdornment?: React.ReactNode;
}

const now = new Date();

function formatDate(
  date: Date,
  formatString: "ISO" | string,
  utc: boolean,
): string {
  if (formatString === "ISO") {
    return date.toISOString();
  }
  if (utc) {
    return formatInTimeZone(date, "UTC", formatString);
  }
  return format(date, formatString);
}

function parseDate(dateString: string, formatString: "ISO" | string): Date {
  if (formatString === "ISO") {
    return parseISO(dateString);
  }
  return parse(dateString, formatString, new Date());
}

/** A date picker component that supports UTC and local time.
 *
 * Built using React-Day-Picker, styled for Stellar.
 *
 * [react-day-picker Docs](https://react-day-picker.js.org/)
 */

export function DatePicker({
  label = "Date",
  labelPosition = "left",
  date = now,
  errorString: errorStringProp,
  required = false,
  utc = true,
  onChange,
  renderHeader,
  renderFooter,
  renderDay,
  min,
  max,
  rightAdornment,
  formatString = "ISO",
  minWidth = 182,
  placeholder = "",
}: DatePickerProps) {
  const [dateState, setDateState] = useState<Date>(date);
  const [dateStringState, setDateStringState] = useState<string>(() =>
    formatDate(date, formatString, utc),
  );
  const [inputValue, setInputValue] = useState<string>(dateStringState);
  const [yearState, setYearState] = useState<number>(date.getUTCFullYear());
  const [monthState, setMonthState] = useState<number>(date.getUTCMonth());
  const [opened, setOpened] = useState<boolean>(false);
  const [errorString, setErrorString] = useState<string>(() => {
    return dateStringState
      ? validate(dateStringState, formatString, required, min, max)
      : "";
  });

  const wrapperRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDateState(date);
    const newDateString = formatDate(date, formatString, utc);
    setDateStringState(newDateString);
    const error = validate(newDateString, formatString, required, min, max);
    setInputValue(newDateString);
    setErrorString(error);
    setInputValue(newDateString);
  }, [date, dateState, required, min, max, formatString, utc]);

  const datePickerCloseCallback = useCallback(() => {
    setOpened(false);
    setYearState(yearState);
    setMonthState(monthState);
  }, [yearState, monthState]);

  const windowKeyupCallback = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        document.activeElement?.role !== "combobox"
      ) {
        datePickerCloseCallback();
      }
    },
    [datePickerCloseCallback],
  );

  const updateDayCallback = useCallback(
    (newDate: Date) => {
      let finalDate = newDate;
      if (utc) {
        // Unshift date since it is shifted going into the picker to account for
        // lack of UTC support from the library
        finalDate = new Date(
          newDate.getTime() - newDate.getTimezoneOffset() * 60000,
        );
      }
      onChange(finalDate);
      datePickerCloseCallback();
    },
    [datePickerCloseCallback, utc],
  );

  useEffect(() => {
    if (opened === true) {
      window.addEventListener("keyup", windowKeyupCallback);
    } else {
      window.removeEventListener("keyup", windowKeyupCallback);
    }
    return () => {
      window.removeEventListener("keyup", windowKeyupCallback);
    };
  }, [opened, windowKeyupCallback]);

  const updateMonthYearCallback = useCallback((monthYearDate: Date) => {
    setMonthState(monthYearDate.getUTCMonth());
    setYearState(monthYearDate.getUTCFullYear());
  }, []);

  const validateTimeCallback = useCallback(
    (dateToValidate: string) => {
      const error = validate(dateToValidate, formatString, required, min, max);
      if (errorString !== error) {
        setErrorString(error);
      }
      return error;
    },
    [required, errorString, min, max, formatString],
  );

  const onKeyUpCallback = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { target, key } = event;
      if (key === "Enter" || key === "Escape") {
        const { value } = target as HTMLInputElement;
        setOpened(false);
        const error = validateTimeCallback(value);
        if (!error) {
          onChange(parseDate(value, formatString));
        }
      }
    },
    [validateTimeCallback, onChange],
  );

  const onInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target as HTMLInputElement;
    setInputValue(value);
  };

  const onBlurCallback = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = event;
      setDateStringState(value);
      const error = validateTimeCallback(value);
      if (value !== dateStringState && !error) {
        onChange(parseDate(value, formatString));
      }
    },
    [onChange, validateTimeCallback],
  );

  return (
    <Popover.Root open>
      <div className="date-picker--container">
        <TextField
          labelPosition={labelPosition}
          label={label}
          value={inputValue}
          onKeyUp={onKeyUpCallback}
          onChange={onInputChange}
          onBlur={onBlurCallback}
          error={errorString || errorStringProp}
          placeholder={
            placeholder ||
            `Ex: ${formatDate(new Date("2030"), formatString, utc)}`
          }
          {...(typeof minWidth === "number"
            ? { style: { minWidth: `${minWidth}px` } }
            : null)}
          required={required}
          rightAdornment={
            <div>
              {rightAdornment}
              <Popover.Anchor>
                <Tooltip content={`${opened ? "Close" : "Open"} calendar`}>
                  <Button
                    ref={wrapperRef}
                    className={classNames(
                      "date-picker--calendar-button",
                      opened ? "date-picker--calendar-button--active" : "",
                    )}
                    variant="icon"
                    icon={<IconCalendar />}
                    onClick={() => {
                      if (opened === false) {
                        setMonthState(date.getUTCMonth());
                        setYearState(date.getUTCFullYear());
                      }
                      setOpened(!opened);
                    }}
                  />
                </Tooltip>
              </Popover.Anchor>
            </div>
          }
        />
        <Popover.Portal>
          <Popover.Content
            side="bottom"
            align="center"
            sideOffset={14}
            onPointerDownOutside={(event) => {
              if (
                (event.target instanceof HTMLElement ||
                  event.target instanceof SVGElement) &&
                wrapperRef &&
                !wrapperRef.current?.contains(event.target)
              ) {
                datePickerCloseCallback();
              }
            }}
          >
            <Picker
              opened={opened}
              date={
                // Shift date forwards to account for timezone offset since
                // react-day-picker only deals in local time internally
                // see https://github.com/gpbl/react-day-picker/discussions/1415
                utc
                  ? new Date(date.getTime() + date.getTimezoneOffset() * 60000)
                  : date
              }
              year={yearState}
              month={monthState}
              onBlur={datePickerCloseCallback}
              updateDay={updateDayCallback}
              updateMonthYear={updateMonthYearCallback}
              updateMonth={setMonthState}
              updateYear={setYearState}
              min={min}
              max={max}
              renderHeader={
                renderHeader
                  ? () => renderHeader(onChange, setOpened)
                  : undefined
              }
              renderFooter={
                renderFooter
                  ? () => renderFooter(onChange, setOpened)
                  : undefined
              }
              renderDay={renderDay}
            />
          </Popover.Content>
        </Popover.Portal>
      </div>
    </Popover.Root>
  );
}

export default DatePicker;
