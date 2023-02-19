import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const Datapointvalues = props.datapoints.map((datapoint) => datapoint.value);

  const TotalMaximum = Math.max(...Datapointvalues);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={TotalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
