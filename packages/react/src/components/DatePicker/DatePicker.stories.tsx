import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
} from "components/Icons";
import { TooltipProvider } from "components/Tooltip";
import { addDays, getDayOfYear } from "date-fns";
import { useState } from "react";

export default { component: DatePicker } as Meta<typeof DatePicker>;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          height: "400px",
        }}
      >
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
  render: ({ date, ...args }) => {
    const [dateState, setDate] = useState<Date>(date || new Date());
    return (
      <DatePicker
        {...args}
        date={dateState}
        onChange={(d) => {
          setDate(d);
          console.log("Date:", d.toString());
          action("onChange");
        }}
      />
    );
  },
};

export const DateFormatting: Story = {
  ...Default,
  args: {
    formatString: "MM/dd/yyyy",
    minWidth: 88,
  },
};

export const MinMax: Story = {
  ...Default,
  args: {
    date: new Date("2033-01-01T00:00:00.000Z"),
    min: new Date("2030-01-01T00:00:00.000Z"),
    max: new Date("2035-01-01T00:00:00.000Z"),
  },
};

export const ControlledError: Story = {
  ...Default,
  args: {
    date: new Date("2024-03-06"),
  },
  render: ({ date, ...args }) => {
    const validate = (d: Date): string => {
      if (d.toISOString().indexOf("4") > -1) {
        return "Number '4' not allowed";
      } else if (d.getUTCDate() % 2 === 0) {
        return "Even days not permitted";
      }
      return "";
    };
    const [dateState, setDate] = useState<Date>(date as Date);
    const [errorState, setError] = useState<string>(validate(date as Date));
    return (
      <DatePicker
        {...args}
        date={dateState}
        errorString={errorState}
        onChange={(d) => {
          console.log("Date:", d.toISOString());
          if (d.toISOString().indexOf("4") > -1) {
            setError("Number '4' not allowed");
          } else if (d.getUTCDate() % 2 === 0) {
            setError("Even days not permitted");
          } else {
            setError("");
            action("onChange");
          }
          setDate(d);
        }}
      />
    );
  },
};

export const FooterAndHeader: Story = {
  ...Default,
  args: {
    renderHeader: (setDateState, setOpen) => {
      const setPickerDate = (date: Date) => {
        setDateState(date);
        setOpen(false);
      };
      return (
        <div
          style={{
            display: "flex",
            gap: "8px",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Button
            variant="secondary"
            style={{ display: "flex", gap: "8px", width: "100%" }}
            size="large"
            onClick={() => setPickerDate(new Date())}
          >
            <IconCalendar /> Now
          </Button>
          <Button
            variant="secondary"
            style={{ display: "flex", gap: "8px", width: "100%" }}
            size="large"
            onClick={() => {
              const newDate = new Date();
              newDate.setHours(0);
              newDate.setMinutes(0);
              newDate.setSeconds(0);
              newDate.setMilliseconds(0);
              console.log("newDate :>> ", newDate);
              setPickerDate(newDate);
            }}
          >
            <IconCalendar /> Today
          </Button>
        </div>
      );
    },
    renderFooter: (setDateState, setOpen) => {
      const setPickerDate = (date: Date) => {
        setDateState(date);
        setOpen(false);
      };
      return (
        <div
          style={{
            display: "flex",
            gap: "8px",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Button
            variant="secondary"
            style={{ display: "flex", gap: "8px", width: "100%" }}
            size="large"
            onClick={() => setPickerDate(new Date())}
          >
            <IconCalendar /> Now
          </Button>
          <Button
            variant="secondary"
            style={{ display: "flex", gap: "8px", width: "100%" }}
            size="large"
            onClick={() => {
              const newDate = new Date();
              newDate.setHours(0);
              newDate.setMinutes(0);
              newDate.setSeconds(0);
              newDate.setMilliseconds(0);
              console.log("newDate :>> ", newDate);
              setPickerDate(newDate);
            }}
          >
            <IconCalendar /> Today
          </Button>
        </div>
      );
    },
  },
  render: ({ date, ...args }) => {
    const [dateState, setDate] = useState<Date>(date || new Date());
    return (
      <DatePicker
        {...args}
        date={dateState}
        onChange={(d) => {
          setDate(d);
          console.log("Date:", d.toString());
          action("onChange");
        }}
      />
    );
  },
};

export const LocalTime1: Story = {
  ...Default,
  args: {
    formatString: "yyyy-MM-dd",
    date: new Date("2020-01-01 01:00:00"),
    minWidth: 120,
    utc: false,
  },
};

export const LocalTime2: Story = {
  ...Default,
  args: {
    formatString: "yyyy-MM-dd HH:mm:ss",
    date: new Date("2020-01-01 20:00:00"),
    minWidth: 148,
    utc: false,
  },
};

export const Adornment: Story = {
  ...Default,
  render: ({ date, ...args }) => {
    const [dateState, setDate] = useState<Date>(date || new Date());
    return (
      <DatePicker
        {...args}
        date={dateState}
        onChange={(d) => {
          setDate(d);
          console.log("Date:", d.toString());
          action("onChange");
        }}
        rightAdornment={
          <div
            style={{
              display: "flex",
              gap: "4px",
              width: "100%",
              marginRight: "4px",
            }}
          >
            <Button
              style={{ height: "16px", minWidth: "16px" }}
              variant="icon"
              icon={<IconChevronLeft />}
              onClick={() => setDate(addDays(dateState, -1))}
            />
            <Button
              style={{ height: "16px", minWidth: "16px" }}
              variant="icon"
              icon={<IconChevronRight />}
              onClick={() => setDate(addDays(dateState, 1))}
            />
          </div>
        }
      />
    );
  },
};

export const CustomDay: Story = {
  ...Default,
  render: ({ date, ...args }) => {
    const [dateState, setDate] = useState<Date>(date || new Date());
    return (
      <DatePicker
        {...args}
        date={dateState}
        onChange={(d) => {
          setDate(d);
          console.log("Date:", d.toString());
          action("onChange");
        }}
        renderDay={(props) => {
          return (
            <div>
              <div>{props.date.getDate()}</div>
              <div style={{opacity: 0.6}}>{getDayOfYear(props.date)}</div>
            </div>
          );
        }}
      />
    );
  },
};
