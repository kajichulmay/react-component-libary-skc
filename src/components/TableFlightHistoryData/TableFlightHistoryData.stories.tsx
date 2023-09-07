import type { Meta, StoryObj } from "@storybook/react";

import TableFlightHistoryData from "./TableFlightHistoryData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: any = {
  title: "ReactComponentLibrary/TableFlightHistoryData",
  component: TableFlightHistoryData,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof TableFlightHistoryData>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const haveData: Story = {
  args: {
    data: [
      {
        days: "อังคาร",
        time: "08:00",
        amounthour: "105.22",
      },
      {
        days: "อังคาร",
        time: "07:00",
        amounthour: "99.00",
      },
      {
        days: "พุธ",
        time: "07:00",
        amounthour: "95.48",
      },
      {
        days: "พุธ",
        time: "08:00",
        amounthour: "94.01",
      },
      {
        days: "พุธ",
        time: "17:00",
        amounthour: "93.58",
      },
    ],
  },
};
export const NoData: Story = {
  args: {
    data: [],
  },
};
