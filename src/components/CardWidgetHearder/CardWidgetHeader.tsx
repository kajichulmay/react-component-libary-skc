import React from "react";
import { Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardWidgetHeader.scss";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import "../../styles/custom.scss";

import ChartsPercent from "./ChartsPercent";
interface CardWidgetHeaderProps {
  data: { icon: string; title: string; value: number; percentage: number; series?: any[] };
  filterType: "year" | "month" | "week";
  showCharts?: boolean;
  fontStyle?: { fontFamily: string; fontSize: number };
}

function CardWidgetHeader(props: CardWidgetHeaderProps) {
  const { data, filterType, showCharts = false, fontStyle = { fontFamily: "Kanit", fontSize: 14 } } = props;

  return (
    <Card
      style={{
        borderRadius: 8,
        boxShadow: "0px 12px 24px rgb(240, 240, 240)",
        // height: 178,
      }}
    >
      <CardBody>
        <div className="d-flex align-items-center mb-3">
          <div className="icon">
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
              fontWeight: 600,
              color: "#495057",
              fontFamily: fontStyle.fontFamily,
              fontSize: fontStyle.fontSize,
            }}
          >
            {data?.title ?? "-"}
          </h5>
        </div>
        <div className="text-muted mt-4">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4
              style={{
                fontSize: 24,
                fontWeight: 700,
                fontFamily: "Inter",
                color: "#495057",
                // marginLeft: 48,
              }}
            >
              {data?.value?.toLocaleString() ?? "-"}

              {data?.percentage > 0 ? (
                <ChevronUp style={{ marginLeft: 8 }} color={"#34C38F"} size={16} />
              ) : data?.percentage < 0 ? (
                <ChevronDown style={{ marginLeft: 8 }} color={"#F46A6A"} size={16} />
              ) : (
                ""
              )}
            </h4>
            <div style={{ position: "absolute", right: 20 }}>
              {showCharts && <ChartsPercent data={data?.series ?? []} />}
            </div>
          </div>
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
                fontFamily: "Kanit",
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
