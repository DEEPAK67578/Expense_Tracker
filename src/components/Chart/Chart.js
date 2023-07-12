import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoints)=>{
    return dataPoints.value
  })
  const totalMaximum = Math.max(...valueArray)
  return (
    <div className="chart">
      {props.dataPoints.map((val) => (
        <ChartBar key={val.label} value={val.value} maxValue={totalMaximum} label={val.label} />
      ))}
    </div>
  );
};

export default Chart;
