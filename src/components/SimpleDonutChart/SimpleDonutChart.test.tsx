import React from "react";
import { render } from "@testing-library/react";

import SimpleDonutChart from "./SimpleDonutChart";
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

describe("SimpleDonutChart Component", () => {
  test("renders the SimpleDonutChart component", () => {
    render(<SimpleDonutChart series={donutChartsSeries} labels={donutChartsLabels} colors={donutChartsColors} />);
  });
});
