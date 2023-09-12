import React from "react";
import { render } from "@testing-library/react";

import MapPercentChartsData from "./MapPercentChartsData";

import "./MapPercentChartsData.scss";
import { color, percentChart, provinceData } from "../../__mocks__/mockData";

// โหลด mock สำหรับรูปภาพ
jest.mock("./assets/icons/sort.png", () => require("../../__mocks__/imageMock"));

jest.mock("use-resize-observer", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
}));
describe("MapPercentChartsData Component", () => {
  test("renders the MapPercentChartsData component", () => {
    render(
      <MapPercentChartsData
        title="ชั่วโมงการทำงานทั้งหมด"
        data={provinceData}
        country={"all"}
        unit="ชม."
        percentChart={percentChart}
        colorsPercent={color}
      />
    );
  });
});
