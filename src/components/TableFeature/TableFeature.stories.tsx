import type { Meta, StoryObj } from "@storybook/react";

import TableFeature from "./TableFeature";
import { dataTableFeature } from "../../__mocks__/mockData";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: any = {
  title: "ReactComponentLibrary/TableFeature",
  component: TableFeature,
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
} satisfies Meta<typeof TableFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const dataYear: Story = {
  args: {
    data: dataTableFeature,
    filterType: "year",
  },
};
export const dataMonth: Story = {
  args: {
    data: dataTableFeature,
    filterType: "month",
  },
};
export const dataWeek: Story = {
  args: {
    data: dataTableFeature,
    filterType: "week",
  },
};
