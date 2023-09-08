import React from "react";
import { Row, Col, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableFlightHistoryData.scss";

import "../../styles/custom.scss";

interface ratingProps {
  days: string;
  time: string;
  amounthour: string;
}
interface TableFlightHistoryDataProps {
  data: ratingProps[];
}
const TableFlightHistoryData = (props: TableFlightHistoryDataProps) => {
  const { data } = props;

  return (
    <Row>
      <Col xl={12}>
        <div className="me-3">
          <h4
            style={{
              fontSize: 20,
              fontWeight: 600,
              paddingLeft: 20,
              paddingTop: 10,
              fontFamily: "Kanit",
              color: "#495057",
            }}
          >
            ประวัติการบินทั้งหมด
          </h4>
        </div>

        <div>
          <p
            className="mb-4 text-muted"
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "#495057",
              paddingLeft: 20,
              fontFamily: "Kanit",
            }}
          >
            ประวัติการบินจากโดรน
          </p>
        </div>
      </Col>
      <Col xl={12}>
        <div className="d-flex">
          <div className="me-2">
            <h5
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#000000",
                paddingLeft: 20,
                fontFamily: "Kanit",
              }}
            >
              อันดับเวลาการบิน
            </h5>
          </div>
        </div>
      </Col>

      <Col xl={12}>
        <div
          className="type-drone"
          style={{
            paddingTop: 20,
            paddingLeft: 20,
          }}
        >
          <Table className="table-nowrap">
            <tbody>
              {data.length ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        fontFamily: "Inter",
                        color: "#000",
                      }}
                    >
                      {index + 1}.
                    </td>
                    <td
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        fontFamily: "Inter",
                        color: "#000",
                      }}
                    >
                      {item?.days ?? "-"}
                    </td>
                    <td>
                      <span
                        className="ms-2 text-truncate"
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          fontFamily: "Inter",
                          color: "#000",
                        }}
                      >
                        {item?.amounthour ?? "-"}
                      </span>
                      <span
                        className="ms-2 text-truncate"
                        style={{
                          fontSize: 14,
                          fontWeight: 300,
                          fontFamily: "Kanit",
                          color: "#495057",
                        }}
                      >
                        ชม.
                      </span>
                    </td>
                    <td>
                      <span
                        className="ms-2 text-truncate"
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          fontFamily: "Inter",
                          color: "#000",
                        }}
                      >
                        {item?.time ?? "-"}
                      </span>
                      <span
                        className="ms-2 text-truncate"
                        style={{
                          fontSize: 14,
                          fontWeight: 300,
                          fontFamily: "Kanit",
                          color: "#495057",
                        }}
                      >
                        น.
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      fontFamily: "Kanit",
                      color: "gray",
                      textAlign: "center",
                    }}
                    colSpan={4}
                  >
                    ไม่พบข้อมูล
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default TableFlightHistoryData;
