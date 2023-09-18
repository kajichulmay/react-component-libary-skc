import React from "react";
import { render } from "@testing-library/react";

import DonutChart from "./DonutChart";
import { donutChartsColors, donutChartsLabels, donutChartsSeries } from "../../__mocks__/mockData";

jest.mock("use-resize-observer", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
}));

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

describe("DonutChart Component", () => {
  test("renders the DonutChart component", () => {
    render(
      <DonutChart
        series={donutChartsSeries}
        labels={donutChartsLabels}
        colors={donutChartsColors}
        unit="ครั้ง"
        fontStyle={{ fontSize: 16, fontFamily: "Inter" }}
      />
    );
  });
});
