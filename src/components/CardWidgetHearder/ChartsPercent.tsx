import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartsPercentProps {
  data: any[];
  color?: string;
}

const ChartsPercent = (props: ChartsPercentProps) => {
  const { data, color } = props;
  return (
    <ReactApexChart
      options={{
        colors: [color ?? "#556EE6", "#F6F1F1"], // กำหนดสีของแต่ละชิ้น (slice) ของ Pie Chart
        tooltip: {
          enabled: false,
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
      }}
      series={[data[0], data[1]]} // ข้อมูลสำหรับ Pie Chart
      type="pie"
      width={100}
      height="80"
    />
  );
};

export default ChartsPercent;
