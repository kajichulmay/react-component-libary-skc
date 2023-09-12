import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface SimpleDonutChartProps {
  series: number[];
  labels: string[];
  colors: string[];
}

const SimpleDonutChart = (props: SimpleDonutChartProps) => {
  const { series, labels, colors } = props;

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

export default SimpleDonutChart;
