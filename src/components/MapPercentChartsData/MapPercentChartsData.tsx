import React, { Component, useState, useEffect } from "react";
import { Row, Col, Progress } from "reactstrap";

import { Chart } from "react-google-charts";
import { Dropdown } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MapPercentChartsData.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ProgressBarPercent from "./ProgressBarPercent";
import sortIcon from "../../assets/icons/sort.png";
interface MapPercentChartsDataProps {
  country: string;
  data: any[];
  title: string;
  unit: string;
  tabData: string;
  percentChart: any[];
  colorsPercent: string[];
  onSort: (e: any) => void;
  menuSort: any[];
}

const menuDropDawnitems = [
  {
    label: "ตัวอักษร",
    key: "1",
  },
  {
    label: "จำนวนมากที่สุด",
    key: "2",
  },
  {
    label: "จำนวนน้อยที่สุด",
    key: "3",
  },
];
const MapPercentChartsData = (props: MapPercentChartsDataProps) => {
  const {
    country,
    data = [],
    title = "",
    percentChart = [],
    unit = "",
    tabData = "",
    colorsPercent,
    onSort,
    menuSort = [],
  } = props;

  // const [dataOpen, setDataOpen] = useState<boolean>(false);
  let sortDataMap: any = [];

  // const [sortTab, setSortTab] = useState<string>("0");
  // const [sortData, setSortData] = useState<any[]>([]);

  const handleMenuClick = (e: any) => {
    console.log("e :>> ", e);

    // setDataToTableBySort(e.key);
    onSort(e);
  };

  const setDataToTableBySort = (sortTab: string) => {
    const newDataSort: any[] = [];

    if (data?.length > 0) {
      if (sortTab === "0") {
        const sliceDataCountry =
          data?.filter((item: any) => item?.prov_name_th === "ลาว" || item?.prov_name_th === "กัมพูชา") ?? [];
        const sliceDataSort =
          data?.filter((item: any) => item?.prov_name_th !== "ลาว" && item?.prov_name_th !== "กัมพูชา") ?? [];
        newDataSort?.push(...sliceDataCountry, ...sliceDataSort);
        // setSortData(newDataSort);
        sortDataMap = newDataSort;
      }

      if (sortTab === "1" && (country === "all" || country === "th")) {
        if (country === "all") {
          const sliceDataCountry = data?.filter(
            (item: any) => item?.prov_name_th === "ลาว" || item?.prov_name_th === "กัมพูชา"
          );
          const sliceDataSort = data?.filter(
            (item: any) => item?.prov_name_th !== "ลาว" && item?.prov_name_th !== "กัมพูชา"
          );
          const sortData = [...sliceDataSort]?.sort((a, b) => a.prov_name_th.localeCompare(b.prov_name_th, "th"));

          newDataSort.push(...sliceDataCountry, ...sortData);
          // setSortData(newDataSort);
          sortDataMap = newDataSort;
        } else {
          // setSortData([...data].sort((a, b) => a.prov_name_th.localeCompare(b.prov_name_th, "th")));
          sortDataMap = [...data].sort((a, b) => a.prov_name_th.localeCompare(b.prov_name_th, "th"));
        }
      } else if (sortTab == "2" && (country === "all" || country === "th")) {
        if (country === "all") {
          const sliceDataCountry = data?.filter(
            (item: any) => item?.prov_name_th === "ลาว" || item?.prov_name_th === "กัมพูชา"
          );
          const sliceDataSort = data?.filter(
            (item: any) => item?.prov_name_th !== "ลาว" && item?.prov_name_th !== "กัมพูชา"
          );

          const sortDataMax = sliceDataSort.sort((a: any, b: any) => b.total - a.total);
          newDataSort.push(...sliceDataCountry, ...sortDataMax);
          // setSortData(newDataSort);
          sortDataMap = newDataSort;
        } else {
          // setSortData([...data]?.sort((a, b) => b.total - a.total));
          sortDataMap = [...data]?.sort((a, b) => b.total - a.total);
        }
      } else if (sortTab == "3" && (country === "all" || country === "th")) {
        if (country === "all") {
          const sliceDataCountry = data?.filter(
            (item: any) => item?.prov_name_th === "ลาว" || item?.prov_name_th === "กัมพูชา"
          );
          const sliceDataSort = data?.filter(
            (item: any) => item?.prov_name_th !== "ลาว" && item?.prov_name_th !== "กัมพูชา"
          );
          const sortDataMin = sliceDataSort.sort((a: any, b: any) => a.total - b.total);
          newDataSort.push(...sliceDataCountry, ...sortDataMin);

          // setSortData(newDataSort);
          sortDataMap = newDataSort;
        } else {
          // setSortData([...data]?.sort((a, b) => a.total - b.total));
          sortDataMap = [...data]?.sort((a, b) => a.total - b.total);
        }
      }
    } else {
      // setSortData(newDataSort);
      sortDataMap = newDataSort;
    }
  };

  return (
    <Row style={{ margin: 0, padding: 0 }}>
      <Col xl={12} className="data-table">
        <Row className="container-header">
          <Col xl={4}>
            <p className="title">{title ?? "-"}</p>
          </Col>
          <Col xl={8}>
            <div className="container-percent-data">
              <div className="group-percent">
                <div className="box-sample-percent" style={{ background: colorsPercent[0] }}></div>
                <div className="title-percent">{percentChart?.[0]?.min}%</div>
              </div>
              <div className="group-percent">
                <div className="box-sample-percent" style={{ background: colorsPercent[1] }}></div>
                <div className="title-percent">
                  {"> " + percentChart?.[1]?.min}% - {percentChart?.[1]?.max}%
                </div>
              </div>
              <div className="group-percent">
                <div className="box-sample-percent" style={{ background: colorsPercent[2] }}></div>
                <div className="title-percent">
                  {"> " + percentChart?.[2]?.min}% - {percentChart?.[2]?.max}%
                </div>
              </div>
              <div className="group-percent">
                <div className="box-sample-percent" style={{ background: colorsPercent[3] }}></div>
                <div className="title-percent">
                  {"> " + percentChart?.[3]?.min}% - {percentChart?.[3]?.max}%
                </div>
              </div>
              <div className="group-percent">
                <div className="box-sample-percent" style={{ background: colorsPercent[4] }}></div>
                <div className="title-percent">
                  {"> " + percentChart?.[4]?.min}% - {percentChart?.[4]?.max}%
                </div>
              </div>
              {menuSort.length > 0 && (
                <div className="group-percent">
                  <Dropdown
                    menu={{
                      items: menuSort,
                      onClick: handleMenuClick,
                    }}
                    placement="bottomLeft"
                  >
                    <a onClick={e => e.preventDefault()}>
                      <img src={sortIcon} alt="sortIcon" height="26" />
                    </a>
                  </Dropdown>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <PerfectScrollbar style={{ height: "500px" }}>
            {data?.length > 0 ? (
              <>
                {data?.map((item, index) => {
                  let percentColor = "";
                  if (item?.prov_name_th === "ไม่ระบุ") {
                    percentColor = "#D6DDE4";
                  } else if (item?.v === 0) {
                    percentColor = colorsPercent[0];
                  } else if (item?.v === 1) {
                    percentColor = colorsPercent[1];
                  } else if (item?.v === 2) {
                    percentColor = colorsPercent[2];
                  } else if (item?.v === 3) {
                    percentColor = colorsPercent[3];
                  } else {
                    percentColor = colorsPercent[4];
                  }
                  return (
                    <Row key={`${index.toString()}-${item}`} className="row-data-drone-table">
                      <Col xl={4}>
                        <p className="title-name">{item?.prov_name_th}</p>
                      </Col>
                      <Col xl={8}>
                        <ProgressBarPercent
                          data={item?.total}
                          percent={item?.percent}
                          color={percentColor}
                          unit={unit}
                          tab={tabData}
                          typeNotSpecified={item?.prov_name_th === "ไม่ระบุ" ? true : false}
                        />
                      </Col>
                    </Row>
                  );
                })}
              </>
            ) : (
              <Row className="row-data-drone-table">
                <Col xl={12}>
                  <p className="title-name">ไม่พบข้อมูล</p>
                </Col>
              </Row>
            )}
          </PerfectScrollbar>
        </Row>
      </Col>
    </Row>
  );
};

export default MapPercentChartsData;
