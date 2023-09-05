import React from "react";

function ProgressBarPercent(props: any) {
  const { color = "", data = 0, unit = "", percent = 0, tab = "", typeNotSpecified = false } = props;

  const setDataFromTab = () => {
    let newData = 0;
    if (tab === "drone" || tab === "amount_working") {
      newData = parseInt(data);

      return newData.toLocaleString();
    } else {
      newData = parseFloat(data);
      return newData.toLocaleString();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="progress-bar" style={{ background: color, width: `${percent}%` }}></div>
      <p className="data">{setDataFromTab()}</p>
      <p className="unit">{unit ?? "-"}</p>
      <div className={`${typeNotSpecified ? "percent-not-specified-box" : "percent-box"}`}>{percent} %</div>
    </div>
  );
}

export default ProgressBarPercent;
