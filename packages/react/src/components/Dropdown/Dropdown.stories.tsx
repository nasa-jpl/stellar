import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "components/Dropdown";
import { IconSol } from "index";

export default { component: Dropdown } as Meta<typeof Dropdown>;
type Story = StoryObj<typeof Dropdown>;

const longListItems = [];
for (let i = 0; i < 100; i++) {
  longListItems.push({ label: `Label ${i}`, value: i });
}

export const Default: Story = {
  args: {
    onChange: action("changed"),
    options: [
      { label: "Label 1", value: 1 },
      { label: "Label 2", value: 2 },
      { label: "Label 3", value: 3 },
      { label: "Label 4", value: 4 },
      { label: "Label 5", value: 5 },
      { label: "Label 6", value: 6 },
    ],
    label: "Dropdown Label",
    labelPosition: "top",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "200px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const DefaultLeftLabel = {
  ...Default,
  args: {
    options: [
      { label: "Label 1", value: 1 },
      { label: "Label 2", value: 2 },
      { label: "Label 3", value: 3 },
      { label: "Label 4", value: 4 },
      { label: "Label 5", value: 5 },
      { label: "Label 6", value: 6 },
    ],
    label: "Dropdown Left Label",
    labelPosition: "left",
  },
};

export const LongList: Story = {
  ...Default,
  args: {
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "350px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const MaxHeight = {
  ...Default,
  args: {
    maxMenuHeight: 72,
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
  },
};

export const Searchable = {
  ...Default,
  args: {
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
    isSearchable: true,
  },
};

export const Clearable = {
  ...Default,
  args: {
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
    isClearable: true,
  },
};

export const InnerLabel = {
  ...Default,
  args: {
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "inner",
  },
};

export const MultipleSelection = {
  ...Default,
  args: {
    options: [
      { label: "Label 1", value: 1 },
      { label: "Label 2", value: 2 },
      { label: "Label 3", value: 3 },
      { label: "Label 4", value: 4 },
      { label: "Label 5", value: 5 },
      { label: "Label 6", value: 6 },
    ],
    label: "Dropdown Label",
    labelPosition: "top",
    isMulti: true,
  },
};

export const JSXOptions = {
  ...Default,
  args: {
    options: [
      {
        label: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--st-grid-unit)",
            }}
          >
            <IconSol />
            Label 1
          </div>
        ),
        value: 1,
      },
      {
        label: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--st-grid-unit)",
            }}
          >
            <IconSol />
            Label 2
          </div>
        ),
        value: 2,
      },
      {
        label: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--st-grid-unit)",
            }}
          >
            <IconSol />
            Label 3
          </div>
        ),
        value: 3,
      },
    ],
    label: "Dropdown Label",
    labelPosition: "top",
  },
};
