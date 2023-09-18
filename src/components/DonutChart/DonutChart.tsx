import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface DonutChartProps {
  series: number[];
  labels: string[];
  colors: string[];
  fontStyle?: { fontSize: number; fontFamily: string };
  unit: string;
}

const DonutChart = (props: DonutChartProps) => {
  const { series, labels, colors, fontStyle = { fontSize: 16, fontFamily: "Kanit" }, unit } = props;

  const options: ApexOptions = {
    labels: labels,
    colors: colors,
    chart: {
      type: "donut",
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          // size: "65%",
          background: "transparent",
        },
      },
    },
    tooltip: {
      enabled: true,

      fillSeriesColor: false,
      theme: "light",
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          `<div style="padding : 10px; font-family : ${fontStyle.fontFamily}; font-size : ${fontStyle.fontSize}">` +
          `<p >` +
          w.config.labels[seriesIndex] +
          `</p>` +
          "<b>" +
          series[seriesIndex] +
          "</b>" +
          `<span style="margin-left : 8px">${unit}</span>` +
          "</div>"
        );
      },
      style: {
        fontSize: `${fontStyle?.fontSize}px`,
        fontFamily: fontStyle?.fontFamily,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },

      y: {
        formatter: undefined,
        title: {
          formatter: seriesName => seriesName,
        },
      },

      marker: {
        show: false,
      },
      items: {
        display: "flex",
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" height={230} />
    </div>
  );
};

export default DonutChart;
