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
  filter: any;
  dataMap: any[];
  data: any[];
  title: string;
  unit: string;
  tabData: string;
  percentChart: any[];
}

const MapALL = ({ data = [] }: any) => {
  const options: any = {
    region: "TH",
    displayMode: "regions",
    resolution: "provinces",

    colorAxis: { colors: ["#EAEBEA", "#B2E8CB", "#5CD295", "#1ABF69", "#17834A"], values: [0, 1, 2, 3, 4] },

    backgroundColor: {
      fill: "transparent",
      stroke: "transparent",
      strokeWidth: 0,
    },

    datalessRegionColor: "transparent",

    keepAspectRatio: true,
    tooltip: {
      trigger: ["hover"],
    },
    legend: "none",

    enableRegionInteractivity: "true",
  };

  return (
    <Chart
      style={{ position: "relative", left: "-70px", top: "10px", transform: "scale(1.1)" }}
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            // const chart = chartWrapper.getChart();
            // const selection = chart.getSelection();
            // const region = data[selection[0].row + 1];
          },
        },
      ]}
      data={data}
      chartType="GeoChart"
      options={options}
      width="800px"
      height="700px"
    />
  );
};

const MapLA = ({ data = [] }: any) => {
  const options: any = {
    region: "LA",
    // displayMode: "regions",
    // resolution: "provinces",
    defaultColor: "transparent",
    colorAxis: { colors: ["#EAEBEA", "#B2E8CB", "#5CD295", "#1ABF69", "#17834A"], values: [0, 1, 2, 3, 4] },

    backgroundColor: {
      fill: "transparent",
      stroke: "transparent",
      strokeWidth: 0,
    },

    datalessRegionColor: "transparent",
    keepAspectRatio: true,
    tooltip: {
      trigger: ["hover"],
    },
    legend: "none",

    enableRegionInteractivity: "true",
  };

  return (
    <Chart
      style={{ position: "relative", left: "-70px", top: "10px" }}
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            // const chart = chartWrapper.getChart();
            // const selection = chart.getSelection();
            // const region = data[selection[0].row + 1];
            // console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="880px"
      height="600px"
      data={data}
      options={options}
    />
  );
};

const MapKH = ({ data = [] }: any) => {
  const options: any = {
    region: "KH",
    // displayMode: "regions",
    // resolution: "provinces",
    defaultColor: "transparent",
    colorAxis: { colors: ["#EAEBEA", "#B2E8CB", "#5CD295", "#1ABF69", "#17834A"], values: [0, 1, 2, 3, 4] },

    backgroundColor: {
      fill: "transparent",
      stroke: "transparent",
      strokeWidth: 0,
    },

    datalessRegionColor: "transparent",
    keepAspectRatio: true,
    tooltip: {
      trigger: ["hover"],
    },
    legend: "none",

    enableRegionInteractivity: "true",
  };

  return (
    <Chart
      style={{ position: "relative", left: "-70px", top: "10px" }}
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            // const chart = chartWrapper.getChart();
            // const selection = chart.getSelection();
            // const region = data[selection[0].row + 1];
            // console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="880px"
      height="600px"
      data={data}
      options={options}
    />
  );
};

const MapPercentChartsData = (props: MapPercentChartsDataProps) => {
  const { filter = {}, dataMap = [], data = [], title = "", percentChart = [], unit = "", tabData = "" } = props;

  const [dataOpen, setDataOpen] = useState<boolean>(false);
  const [sortTab, setSortTab] = useState<string>("0");
  const [sortData, setSortData] = useState<any[]>([]);
  const [menuDropDawnitems, setMenuDropDawnitems] = useState<any[]>([
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
  ]);

  useEffect(() => {
    setDataToTableBySort();
  }, []);
  useEffect(() => {
    setDataToTableBySort();
  }, [dataOpen]);

  const handleMenuClick = (e: any) => {
    setDataOpen(false);
    setSortTab(e.key);
  };

  const handleOpenChange = (flag: boolean) => {
    setDataOpen(flag);
  };

  const setDataToTableBySort = () => {
    const newDataSort: any[] = [];
    if (data?.length > 0) {
      if (sortTab === "0") {
        const sliceDataCountry =
          data?.filter((item: any) => item.prov_name_th === "ลาว" || item.prov_name_th === "กัมพูชา") ?? [];
        const sliceDataSort =
          data?.filter((item: any) => item.prov_name_th !== "ลาว" && item.prov_name_th !== "กัมพูชา") ?? [];
        newDataSort?.push(...sliceDataCountry, ...sliceDataSort);
        setSortData(newDataSort);
      }

      if (sortTab === "1" && (filter?.country === "all" || filter?.country === "th")) {
        if (filter?.country === "all") {
          const sliceDataCountry = data?.filter(
            (item: any) => item.prov_name_th === "ลาว" || item.prov_name_th === "กัมพูชา"
          );
          const sliceDataSort = data?.filter(
            (item: any) => item.prov_name_th !== "ลาว" && item.prov_name_th !== "กัมพูชา"
          );
          const sortData = [...sliceDataSort]?.sort((a, b) => a.prov_name_th.localeCompare(b.prov_name_th, "th"));

          newDataSort.push(...sliceDataCountry, ...sortData);
          setSortData(newDataSort);
        } else {
          setSortData([...data].sort((a, b) => a.prov_name_th.localeCompare(b.prov_name_th, "th")));
        }
      } else if (sortTab == "2" && (filter?.country === "all" || filter?.country === "th")) {
        if (filter?.country === "all") {
          const sliceDataCountry = data?.filter(
            (item: any) => item.prov_name_th === "ลาว" || item.prov_name_th === "กัมพูชา"
          );
          const sliceDataSort = data?.filter(
            (item: any) => item.prov_name_th !== "ลาว" && item.prov_name_th !== "กัมพูชา"
          );

          const sortDataMax = sliceDataSort.sort((a: any, b: any) => b.total - a.total);
          newDataSort.push(...sliceDataCountry, ...sortDataMax);
          setSortData(newDataSort);
        } else {
          setSortData([...data]?.sort((a, b) => b.total - a.total));
        }
      } else if (sortTab == "3" && (filter?.country === "all" || filter?.country === "th")) {
        if (filter?.country === "all") {
          const sliceDataCountry = data?.filter(
            (item: any) => item.prov_name_th === "ลาว" || item.prov_name_th === "กัมพูชา"
          );
          const sliceDataSort = data?.filter(
            (item: any) => item.prov_name_th !== "ลาว" && item.prov_name_th !== "กัมพูชา"
          );
          const sortDataMin = sliceDataSort.sort((a: any, b: any) => a.total - b.total);
          newDataSort.push(...sliceDataCountry, ...sortDataMin);

          setSortData(newDataSort);
        } else {
          setSortData([...data]?.sort((a, b) => a.total - b.total));
        }
      }
    } else {
      setSortData(newDataSort);
    }
  };

  return (
    <Col xl={12}>
      <Row style={{ margin: 0, padding: 0 }}>
        <Col xl={5}>
          {filter?.country === "all" || filter?.country === "th" ? (
            <div className="div-map-all" style={{ height: "100%" }}>
              <MapALL data={dataMap}></MapALL>
            </div>
          ) : (
            <></>
          )}
          {filter?.country === "la" ? (
            <div className="div-map-la">
              <MapLA data={dataMap}> </MapLA>
            </div>
          ) : (
            <></>
          )}
          {filter?.country === "kh" ? (
            <div className="div-map-kh">
              <MapKH data={dataMap}></MapKH>
            </div>
          ) : (
            <></>
          )}
        </Col>
        <Col xl={7} className="data-table">
          <Row className="container-header">
            <Col xl={4}>
              <p className="title">{title ?? "-"}</p>
            </Col>
            <Col xl={8}>
              <div className="container-percent-data">
                <div className="group-percent">
                  <div className="box-data-0"></div>
                  <div className="title-percent">{percentChart?.[0]?.min}%</div>
                </div>
                <div className="group-percent">
                  <div className="box-data-25"></div>
                  <div className="title-percent">
                    {"> " + percentChart?.[1]?.min}% - {percentChart?.[1]?.max}%
                  </div>
                </div>
                <div className="group-percent">
                  <div className="box-data-50"></div>
                  <div className="title-percent">
                    {"> " + percentChart?.[2]?.min}% - {percentChart?.[2]?.max}%
                  </div>
                </div>
                <div className="group-percent">
                  <div className="box-data-75"></div>
                  <div className="title-percent">
                    {"> " + percentChart?.[3]?.min}% - {percentChart?.[3]?.max}%
                  </div>
                </div>
                <div className="group-percent">
                  <div className="box-data-100"></div>
                  <div className="title-percent">
                    {"> " + percentChart?.[4]?.min}% - {percentChart?.[4]?.max}%
                  </div>
                </div>
                <div className="group-percent">
                  <Dropdown
                    menu={{
                      items: menuDropDawnitems,
                      onClick: handleMenuClick,
                    }}
                    onOpenChange={handleOpenChange}
                    open={dataOpen}
                    placement="bottomLeft"
                  >
                    <a onClick={e => e.preventDefault()}>
                      <img src={sortIcon} alt="sortIcon" height="26" />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <PerfectScrollbar style={{ height: "500px" }}>
              {sortData?.length > 0 ? (
                <>
                  {sortData?.map((item, index) => {
                    let percentColor = "";
                    if (item?.prov_name_th === "ไม่ระบุ") {
                      percentColor = "#D6DDE4";
                    } else if (item.v === 0) {
                      percentColor = "#EAEBEA";
                    } else if (item.v === 1) {
                      percentColor = "#B2E8CB";
                    } else if (item.v === 2) {
                      percentColor = "#5CD295";
                    } else if (item.v === 3) {
                      percentColor = "#1ABF69";
                    } else {
                      percentColor = "#17834a";
                    }
                    return (
                      <Row key={`${index.toString()}-${item}`} className="row-data-drone-table">
                        <Col xl={4}>
                          <p className="title-name">{item?.prov_name_th}</p>
                        </Col>
                        <Col xl={8}>
                          <ProgressBarPercent
                            data={item.total}
                            percent={item.percent}
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
    </Col>
  );
};

export default MapPercentChartsData;
