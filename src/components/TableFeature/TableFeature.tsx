import React from "react";
import "../../styles/custom.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "./TableFeature.scss";
type FilterType = "week" | "year" | "month";

interface TableFeatureProps {
  data: any;
  filterType: FilterType;
}

function FormattedDate(props: any) {
  return props.date == "year" ? "ปี" : props.date == "month" ? "เดือน" : "สัปดาห์";
}

const TableFeature = (props: TableFeatureProps) => {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th>Feature</th>
          <th className="normal">
            <FormattedDate date={props.filterType} />
          </th>
          <th className="active">
            <FormattedDate date={props.filterType} />
            ที่แล้ว
          </th>
        </tr>
      </thead>
      <tbody>
        {props?.data?.map((item: any, index: number) => (
          <tr key={index}>
            <td style={{ display: "flex", alignItems: "center", width: 300 }}>
              <span className="px-1">
                <div style={{ background: item.color, height: 14, width: 14, marginRight: 8 }}></div>
              </span>
              {item?.name}
            </td>
            <td className="normal">{item?.present ?? "-"}</td>
            <td className="active">{item?.past ?? "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableFeature;
