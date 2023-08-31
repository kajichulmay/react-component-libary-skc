import React from "react";
import { render } from "@testing-library/react";

import CardDetail from "./CardDetail";

import "./CardDetail.css";

const cardData = {
  title: "My Card Title",
  total: 1234.56,
  unit: "เที่ยว",
};

describe("CardDetail Component", () => {
  test("renders the CardDetail component", () => {
    render(<CardDetail data={cardData} colorCard="#F0F0F0" />);
  });
});
