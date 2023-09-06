import React from "react";

function ProgressBarPercent(props: any) {
  const { color = "", data = 0, unit = "", percent = 0, typeNotSpecified = false } = props;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="progress-bar" style={{ background: color, width: `${percent}%` }}></div>
      <p className="data">{data.toLocaleString()}</p>
      <p className="unit">{unit ?? "-"}</p>
      <div className={`${typeNotSpecified ? "percent-not-specified-box" : "percent-box"}`}>{percent} %</div>
    </div>
  );
}

export default ProgressBarPercent;
