import * as React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.id}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
