import React from "react";
import { render } from "@testing-library/react";

import DataTables from "./DataTables";

import "./DataTables.scss";
import { columnsDataTable, rowDataTable } from "../../__mocks__/mockData";

const onChangePagination = (page: number, pageSize: number) => {
  console.log("page :>> ", page);
  console.log("pageSize :>> ", pageSize);
};

const onSort = (columnName: string, sortType: string) => {
  console.log("columnName :>> ", columnName);
  console.log("sortType :>> ", sortType);
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});

describe("DataTables Component", () => {
  test("renders the DataTables component", () => {
    render(
      <DataTables
        onChangePagination={onChangePagination}
        column={columnsDataTable}
        row={rowDataTable?.data}
        isPagination={true}
        pageSize={10}
        total={rowDataTable?.totalItems}
        page={1}
        onSort={onSort}
        isShowBorderLine={true}
      />
    );
  });
});
