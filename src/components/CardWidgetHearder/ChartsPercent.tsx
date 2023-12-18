import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartsPercentProps {
  data: any[];
  color?: string;
  labels: any[];
}

const ChartsPercent = (props: ChartsPercentProps) => {
  const { data, color, labels } = props;
  return (
    <ReactApexChart
      options={{
        colors: [color ?? "#556EE6", "#F6F1F1"], // กำหนดสีของแต่ละชิ้น (slice) ของ Pie Chart
        tooltip: {
          enabled: true,
          theme: "light",
          fillSeriesColor: true,
        },

        dataLabels: {
          enabled: false,
          formatter: function (val, opts) {
            return val + "%";
          },

          style: {
            // fontSize: "18px",
            // fontFamily: "Inter",
          },

          dropShadow: {
            enabled: true,
          },
        },
        stroke: {
          width: 0,
        },
        yaxis: {
          labels: {
            formatter: function (val, index) {
              return val.toFixed(2) + "%";
            },
            style: {
              colors: ["red"],
            },
          },
        },

        legend: {
          show: false,
        },

        plotOptions: {
          pie: {
            customScale: 1,
            dataLabels: {
              offset: -30,
            },
          },
        },
        labels: labels,
      }}
      series={[data[0], data[1]]} // ข้อมูลสำหรับ Pie Chart
      type="pie"
      width={100}
      height="80"
    />
  );
};

export default ChartsPercent;
