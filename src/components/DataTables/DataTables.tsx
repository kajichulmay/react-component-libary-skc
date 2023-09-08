import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/custom.scss";
import "./DataTables.scss";

import { Table } from "reactstrap";
import { Pagination } from "antd";

import { ArrowDownUp } from "react-bootstrap-icons";

interface columnType {
  key: string;
  title: string;
  textAlign: string;
  sort: boolean;
  width: string;
}
interface DataTablesType {
  isShowBorderLine?: boolean;
  showIndex?: boolean;
  column: columnType[];
  row: any[];
  page?: number;
  pageSize?: number;
  action?: any;
  total: number;
  onSort: (columnName: string, sortBy: string) => void;
  onChangePagination: (page: number, pageSize: number) => void;
  isPagination: boolean;
}
const DataTables = (props: DataTablesType) => {
  const {
    isShowBorderLine = true,
    showIndex = true,
    column = [],
    row = [],
    action,
    page = 1,
    pageSize = 10,
    isPagination = true,
    total,
    onSort,

    onChangePagination,
  } = props;

  const [sortType, setSortType] = useState("ASC");

  const handleSort = (columnName: string) => {
    let sortBy;

    if (sortType == "ASC") {
      sortBy = "DESC";
    } else {
      sortBy = "ASC";
    }
    setSortType(sortBy);
    onSort(columnName, sortBy);
  };
  const handleChangePagnation = (page: number, pageSize: number) => {
    onChangePagination(page, pageSize);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="table-responsive ">
        <Table
          className="table table-hover  table-bordered  mb-0 data-table"
          style={{
            borderLeft: isShowBorderLine ? "" : "none",
            borderRight: isShowBorderLine ? "" : "none",
          }}
        >
          <thead className="table-header  table-light">
            <tr style={{ background: "red" }}>
              {showIndex && <th className="column-index">#</th>}
              {column.map((itm: any, index: number) => (
                <th
                  key={`${itm.key}-${index}`}
                  style={{
                    textAlign: itm.textAlign,
                    borderRight: isShowBorderLine ? "" : "none",
                    borderLeft: isShowBorderLine ? "" : "none",
                  }}
                >
                  <div className="container-text-column">
                    {itm.title}
                    {itm.sort && <ArrowDownUp className="icon-sort" onClick={() => handleSort(itm.key)} />}
                  </div>
                </th>
              ))}
              {action?.length > 0 && <th className="column-action">Action</th>}
            </tr>
          </thead>
          <tbody>
            {row.length > 0 ? (
              row.map((itemRow: any, indexRow: number) => (
                <tr key={`${itemRow}-${indexRow}`}>
                  {showIndex && (
                    <th scope="row" style={{ textAlign: "center", width: "3%" }}>
                      {(page - 1) * pageSize + (indexRow + 1)}
                    </th>
                  )}
                  {column.map((itemColumn: any, columnIndex: number) => (
                    <td
                      key={`${itemRow[itemColumn.key]}-${columnIndex}`}
                      style={{
                        width: itemColumn?.width,
                        color: itemColumn?.color,
                        borderLeft: isShowBorderLine ? "" : "none",
                        borderRight: isShowBorderLine ? "" : "none",
                      }}
                      className="row-data"
                    >
                      {itemColumn.setColor ? (
                        <div
                          style={{
                            background:
                              itemRow[itemColumn.key] === itemColumn.checkChangeColor
                                ? itemColumn.background1
                                : itemColumn.background2,
                            color:
                              itemRow[itemColumn.key] === itemColumn.checkChangeColor
                                ? itemColumn.color1
                                : itemColumn.color2,
                            borderRadius: "16px",
                            width: 66,
                            height: "100%",
                            padding: "4px",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "20px",
                          }}
                        >
                          <p style={{ margin: 0, padding: 0, fontFamily: "Kanit, sans-serif" }}>
                            {itemRow[itemColumn.key]}
                          </p>
                        </div>
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            margin: 0,
                            padding: 0,
                            height: "100%",
                            marginLeft: "20px",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              padding: 0,
                              fontFamily: "Kanit, sans-serif",
                              fontWeight: 300,
                              fontSize: 14,
                              color: "#495057",
                            }}
                          >
                            {itemRow[itemColumn.key]}
                          </p>
                        </div>
                      )}
                    </td>
                  ))}
                  {action?.length > 0 && (
                    <td
                      style={{
                        margin: 0,
                        padding: 0,
                        borderLeft: isShowBorderLine ? "" : "none",
                        borderRight: isShowBorderLine ? "" : "none",
                      }}
                      className="row-action"
                      width="5%"
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "4px",
                          padding: 0,
                        }}
                      >
                        {action.map((itm: any, index: number) => (
                          <div
                            key={index}
                            style={{
                              margin: 2,
                            }}
                            onClick={() => itm.onClick(itemRow.id)}
                          >
                            {itm.button}
                          </div>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr key={0} className="text-center py-5 px-4">
                <th style={{ fontFamily: "Kanit, sans-serif", fontSize: 16 }} colSpan={column.length + 2}>
                  ไม่พบข้อมูล
                </th>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {isPagination && (
        <div
          className="container-pagination"
          style={{
            marginTop: 20,
            marginBottom: 16,
          }}
        >
          <Pagination
            defaultCurrent={1}
            total={total}
            defaultPageSize={pageSize}
            onChange={(page, pageSize) => handleChangePagnation(page, pageSize)}
          />
        </div>
      )}
    </div>
  );
};

export default DataTables;
