import React from "react";
import { render } from "@testing-library/react";

import MapPercentChartsData from "./MapPercentChartsData";

import "./MapPercentChartsData.scss";

const data = {
  icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  title: "จำนวนลูกค้าที่ลงทะเบียน K-iDrone",
  value: 1234.56,
  percentage: 0,
};
const filterType = "month";

describe("MapPercentChartsData Component", () => {
  test("renders the MapPercentChartsData component", () => {
    render(<MapPercentChartsData />);
  });
});
