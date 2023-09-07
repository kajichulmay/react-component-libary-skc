import React from "react";
import { Row, Col } from "reactstrap";

import { Chart } from "react-google-charts";
import "./ChartsMap.scss";
import "../../styles/custom.scss";
interface ChartsMapProps {
  country: string;
  data: any[];
  colorsMaps: string[];
  valueColorMaps: number[];
}

interface MapProps {
  data: any[];
  colors: string[];
  values: number[];
}
const MapALL = ({ data, colors, values }: MapProps) => {
  const options: any = {
    region: "TH",
    displayMode: "regions",
    resolution: "provinces",

    colorAxis: { colors: colors, values: values },

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
          callback: ({ chartWrapper }) => {},
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

const MapLA = ({ data, colors, values }: MapProps) => {
  const options: any = {
    region: "LA",
    defaultColor: "transparent",
    colorAxis: { colors: colors, values: values },

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
          callback: ({ chartWrapper }) => {},
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

const MapKH = ({ data, colors, values }: MapProps) => {
  const options: any = {
    region: "KH",
    defaultColor: "transparent",
    colorAxis: { colors: colors, values: values },

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
          callback: ({ chartWrapper }) => {},
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

const ChartsMap = (props: ChartsMapProps) => {
  const {
    country,
    data,
    colorsMaps = ["#EAEBEA", "#B2E8CB", "#5CD295", "#1ABF69", "#17834A"],
    valueColorMaps = [0, 1, 2, 3, 4],
  } = props;

  return (
    <Row>
      <Col xl={12}>
        {country === "all" || country === "th" ? (
          <div className="div-map-all">
            <MapALL data={data} colors={colorsMaps} values={valueColorMaps}></MapALL>
          </div>
        ) : (
          <></>
        )}
        {country === "la" ? (
          <div className="div-map-la">
            <MapLA data={data} colors={colorsMaps} values={valueColorMaps}></MapLA>
          </div>
        ) : (
          <></>
        )}
        {country === "kh" ? (
          <div className="div-map-kh">
            <MapKH data={data} colors={colorsMaps} values={valueColorMaps}></MapKH>
          </div>
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
};

export default ChartsMap;
