import type { Meta, StoryObj } from "@storybook/react";

import CardDetail from "./CardDetail";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "ReactComponentLibrary/CardDetail",
  component: CardDetail,
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
} satisfies Meta<typeof CardDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const changeTitle: Story = {
  args: {
    data: { title: "จำนวนเที่ยวบินทั้งหมด", total: 1234.56, unit: "เที่ยว" },
    colorCard: "#F0F0F0",
  },
};
export const changeTotalColor: Story = {
  args: {
    data: { title: "จำนวนเที่ยวบินทั้งหมด", total: 1234.56, unit: "เที่ยว" },
    colorCard: "#F0F0F0",
    textColorTotal: "red",
  },
};
export const ChangeCardColor: Story = {
  args: {
    data: { title: "จำนวนเที่ยวบินทั้งหมด", total: 1234.56, unit: "เที่ยว" },
    colorCard: "white",
    textColorTotal: "red",
  },
};
