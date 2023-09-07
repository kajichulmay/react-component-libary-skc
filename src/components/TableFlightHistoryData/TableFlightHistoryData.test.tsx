import React from "react";
import { render } from "@testing-library/react";

import TableFlightHistoryData from "./TableFlightHistoryData";

import "./TableFlightHistoryData.scss";

const data = [
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
];

describe("TableFlightHistoryData Component", () => {
  test("renders the TableFlightHistoryData component", () => {
    render(<TableFlightHistoryData data={data} />);
  });
});
