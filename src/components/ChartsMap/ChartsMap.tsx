import React, { Component, useState, useEffect } from "react";
import { Row, Col, Progress } from "reactstrap";

import { Chart } from "react-google-charts";
import { Dropdown } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChartsMap.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

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

const ChartsMap = () => {
  return <div>ChartsMap</div>;
};

export default ChartsMap;
