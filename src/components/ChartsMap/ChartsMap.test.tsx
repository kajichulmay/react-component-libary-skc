import React from "react";
import { render } from "@testing-library/react";

import ChartsMap from "./ChartsMap";

import "./ChartsMap.scss";
import { color, mapChartsValue, mapData } from "../../__mocks__/mockData";

describe("ChartsMap Component", () => {
  test("renders the ChartsMap component", () => {
    render(<ChartsMap data={mapData} country="all" colorsMaps={color} valueColorMaps={mapChartsValue} />);
  });
});
