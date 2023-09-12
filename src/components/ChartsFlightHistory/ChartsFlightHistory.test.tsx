import React from "react";
import { render } from "@testing-library/react";

import ChartsFlightHistory from "./ChartsFlightHistory";
import "./ChartsFlightHistory.scss";
import { flightHistoryData } from "../../__mocks__/mockData";

describe("ChartsFlightHistory Component", () => {
  test("renders the ChartsFlightHistory component", () => {
    render(<ChartsFlightHistory series={flightHistoryData?.series} ranges={flightHistoryData?.ranges} />);
  });
});
