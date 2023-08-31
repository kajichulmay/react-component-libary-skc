import type { Meta, StoryObj } from "@storybook/react";

import CardWidgetHearder from "./CardWidgetHeader";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "ReactComponentLibrary/CardWidgetHearder",
  component: CardWidgetHearder,
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
} satisfies Meta<typeof CardWidgetHearder>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const percentUp: Story = {
  args: {
    data: {
      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
      title: "จำนวนลูกค้าโดรน KUBOTA (KADs)                                       ",
      value: 1234.56,
      percentage: 15.55,
    },
    filterType: "year",
  },
};
export const percentZero: Story = {
  args: {
    data: {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      title: "จำนวนลูกค้าที่ลงทะเบียน K-iDrone",
      value: 1234.56,
      percentage: 0,
    },
    filterType: "month",
  },
};
export const percentDown: Story = {
  args: {
    data: {
      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
      title: "จำนวนลูกค้าที่ยังไม่ลงทะเบียน K-iDrone",
      value: 1234.56,
      percentage: -15.55,
    },
    filterType: "week",
  },
};
