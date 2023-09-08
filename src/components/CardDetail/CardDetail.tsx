import React from "react";
import { Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardDetail.scss";
import "../../styles/custom.scss";
interface CardDetailProps {
  data: { title: string; total: number; unit: string };
  colorCard: string;
  textColorTotal?: string;
}

function CardDetail(props: CardDetailProps) {
  const { data, colorCard = "#FFFFFF", textColorTotal = "black" } = props;

  let nf = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  let nn = new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <Card
      style={{
        background: colorCard,
        borderRadius: "8px",
      }}
    >
      <CardBody>
        <p
          style={{
            color: "#898989",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Kanit",
          }}
        >
          {data?.title ?? "-"}
        </p>
        <div>
          <span
            style={{
              marginRight: "8px",
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "20px",
              color: textColorTotal,
            }}
          >
            {data?.title == "จำนวนเที่ยวบินทั้งหมด" ? nn.format(data?.total) : nf.format(data?.total)}
          </span>
          <span style={{ color: "#898989", fontFamily: "Kanit" }}>{data?.unit ?? "-"}</span>
        </div>
        {/* <Button type="dashed">Primary Button</Button> */}
      </CardBody>
    </Card>
  );
}

export default CardDetail;
