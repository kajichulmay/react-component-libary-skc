import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardWidgetHeader.scss";
import { ChevronUp } from "react-bootstrap-icons";

interface CardWidgetHeaderProps {
  data: { icon: string; title: string; value: number; percentage: number };
  filterType: "year" | "month" | "week";
  showCharts?: boolean;
}

function CardWidgetHeader(props: CardWidgetHeaderProps) {
  const { data, filterType, showCharts = false } = props;

  return (
    <Card
      style={{
        borderRadius: 8,
        boxShadow: "0px 12px 24px rgb(240, 240, 240)",
      }}
    >
      <CardBody>
        <div className="d-flex align-items-center mb-3">
          <div className="icon">
            {/* <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18"> */}

            <img
              src={data?.icon ?? "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"}
              alt=""
              height="18"
              width={18}
            />
          </div>
          <h5
            className="mb-0"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#495057",
            }}
          >
            {data?.title ?? "-"}
          </h5>
        </div>
        <div className="text-muted mt-4">
          <h4
            style={{
              fontSize: 24,
              fontWeight: 700,
              fontFamily: "Inter",
              color: "#495057",
            }}
          >
            {data?.value?.toLocaleString() ?? "-"}
            {/* <i className="mdi mdi-chevron-up ms-1 text-success" /> */}
            <ChevronUp
              style={{ marginLeft: 8 }}
              color={data?.percentage > 0 ? "#34C38F" : data?.percentage < 0 ? "#F46A6A" : "#FAAF41"}
              size={16}
            />
          </h4>
          <div className="d-flex">
            <span
              className="box-percent"
              style={{
                background: data?.percentage > 0 ? "#DAF4EB" : data?.percentage < 0 ? "#FFEAEA" : "#FFEFD9 ",
                color: data?.percentage > 0 ? "#34C38F" : data?.percentage < 0 ? "#F46A6A" : "#FAAF41",
              }}
            >
              {data?.percentage > 0 ? "+" : ""} {data?.percentage ?? "-"}%
            </span>
            <span
              className="ms-2 text-truncate"
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: "#79829C",
              }}
            >
              {filterType === "year"
                ? "จากปีที่แล้ว"
                : filterType === "month"
                ? "จากเดือนที่แล้ว"
                : "จากสัปดาห์ที่แล้ว"}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardWidgetHeader;
