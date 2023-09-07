import React from "react";
import { Row, Col } from "reactstrap";

import ReactApexChart from "react-apexcharts";

import "./ChartsFlightHistory.scss";
import "../../styles/custom.scss";

interface DataSeries {
  x: string;
  y: string;
}
interface SeriesType {
  name: string;
  totalHours: number;
  highestHoursInday: number;
  data: DataSeries[];
}

interface RangesType {
  from?: number;
  to?: number;
  color?: string;
  foreColor?: string;
  name?: string;
}
interface ChartsFlightHistoryProps {
  series: SeriesType[];
  ranges: RangesType;
}

const ChartsFlightHistory = (props: ChartsFlightHistoryProps) => {
  const { series = [], ranges } = props;
  let nf = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (
    <Row style={{ width: "100%" }}>
      <Col xl={12}>
        {series?.length != 0 ? (
          <div
            id="chart"
            style={{
              paddingLeft: 20,
              paddingRight: 30,
              // backgroundColor:"red",
              marginTop: -40,
            }}
          >
            <ReactApexChart
              options={{
                chart: {
                  height: 350,
                  toolbar: {
                    show: false,
                  },
                },
                legend: {
                  show: false,
                  position: "top",
                  horizontalAlign: "center",
                  fontSize: "17px",
                  fontWeight: 500,
                },
                plotOptions: {
                  heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    // useFillColorAsStroke: true,
                    colorScale: {
                      ranges: [ranges],
                    },
                  },
                },
                dataLabels: {
                  enabled: false,
                },

                yaxis: {
                  // max: 70,
                  title: {
                    text: "วัน",
                    // rotate: -90,
                    offsetX: 13,
                    offsetY: 0,
                    style: {
                      fontSize: "12px",
                      fontFamily: "Kanit",
                    },
                  },
                  labels: {
                    style: {
                      fontSize: "12px",
                      fontFamily: "Kanit",
                    },
                  },
                },
                tooltip: {
                  style: {
                    fontSize: "12px",
                    fontFamily: "Kanit",
                  },
                  y: {
                    formatter: function (val, index) {
                      return nf.format(val) + " ชม.";
                    },
                  },
                },
                xaxis: {
                  title: {
                    text: "เวลา",
                    // rotate: -90,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                      fontSize: "12px",
                      color: "#495057",
                      fontFamily: "Kanit",
                    },
                  },
                },
              }}
              series={series}
              type="heatmap"
              height={450}
            />
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: 330,
              paddingLeft: 10,
              paddingRight: 30,
              marginTop: 30,
              textAlign: "center",
              paddingTop: 100,
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "Kanit",
                color: "gray",
                textAlign: "center",
                marginTop: 50,
              }}
            >
              ไม่พบข้อมูล
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ChartsFlightHistory;
