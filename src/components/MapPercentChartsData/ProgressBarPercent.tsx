import React from "react";

function ProgressBarPercent(props: any) {
  const { color, data, unit, percent, tab } = props;

  const setDataFromTab = () => {
    let newData;
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
      <p className="unit">{unit}</p>
      <div className="percent-box">{percent} %</div>
    </div>
  );
}

export default ProgressBarPercent;
