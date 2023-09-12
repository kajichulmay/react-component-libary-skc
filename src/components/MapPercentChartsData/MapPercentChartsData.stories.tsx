import type { Meta, StoryObj } from "@storybook/react";

import MapPercentChartsData from "./MapPercentChartsData";
import { color, color2, percentChart, provinceData } from "../../__mocks__/mockData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: any = {
  title: "ReactComponentLibrary/MapPercentChartsData",
  component: MapPercentChartsData,
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
} satisfies Meta<typeof MapPercentChartsData>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const mapAll: Story = {
  args: {
    title: "ชั่วโมงการทำงานทั้งหมด",
    data: provinceData,
    country: "all",
    percentChart: percentChart,
    unit: "ชม",

    colorsPercent: color,
  },
};
export const mapTh: Story = {
  args: {
    title: "ชั่วโมงการทำงานทั้งหมด",
    data: provinceData,
    country: "th",
    percentChart: percentChart,
    unit: "ชม",
    colorsPercent: color2,
  },
};
export const mapLA: Story = {
  args: {
    title: "ชั่วโมงการทำงานทั้งหมด",
    data: [
      {
        id: "af84553c-ea6e-4d6b-8ba4-e83ca27c81aa",
        prov_name_th: "ลาว",
        code_jvector: "LA",
        total: 4,
        percent: "1.27",
        v: 1,
      },
      {
        id: "other",
        prov_name_th: "ไม่ระบุ",
        code_jvector: "TH-XX",
        total: 111,
        percent: "25.81",
        v: 4,
      },
    ],
    country: "la",

    percentChart: percentChart,
    unit: "ชม",
    colorsPercent: color,
  },
};
