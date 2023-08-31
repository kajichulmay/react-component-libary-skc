import React, { Component, useState } from "react";
import { Row, Col, Progress } from "reactstrap";

import { Chart } from "react-google-charts";
import { Dropdown } from "antd";

import PerfectScrollbar from "react-perfect-scrollbar";
import "./MapPercentChartsData.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import ProgressBarPercent from "./ProgressBarPercent";

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

const MapALL = ({ data }: any) => {
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
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();

            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
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

const MapLA = ({ data }: any) => {
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
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();

            const region = data[selection[0].row + 1];
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

const MapKH = ({ data }: any) => {
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
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();

            const region = data[selection[0].row + 1];
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

const MapPercentChartsData = (props: any) => {
  const { filter, dataMap, title, percentChart, unit, tabData } = props;

  const [dataOpen, setDataOpen] = useState<boolean>(false);
  const [sortTab, setSortTab] = useState<string>("0");
  const [sortData, setSortData] = useState<any[]>([]);

  const handleMenuClick = (e: any) => {
    setDataOpen(false);
    setSortTab(e.key);
  };

  const handleOpenChange = (flag: boolean) => {
    setDataOpen(flag);
  };

  return (
    <Row style={{ margin: 0, padding: 0 }}>
      <Col xl={5}>
        {filter?.country === "all" || filter?.country === "th" ? (
          <div className="div-map-all">
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
                    <img src={require("../../assets/icons/sort.png")} alt="" height="26" />
                  </a>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <PerfectScrollbar style={{ height: "500px" }}>
            {sortTab == "0" ? (
              <>
                {sortData.length > 0 ? (
                  <>
                    {sortData?.map((item, index) => {
                      // console.log("data :>> ", data);
                      let percentColor = "";
                      if (item.v === 0) {
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
              </>
            ) : (
              <>
                {sortData.length > 0 ? (
                  <>
                    {sortData.map((item, index) => {
                      let percentColor = "";
                      if (item.v === 0) {
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
              </>
            )}
          </PerfectScrollbar>
        </Row>
      </Col>
    </Row>
  );
};

export default MapPercentChartsData;
