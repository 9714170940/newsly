import React from "react";
import { Chart } from "react-google-charts";

const CustomChart = ({ data, chartType, ...props }) => {
  return  <Chart {...props} data={data} chartType={chartType}/>
};

export default CustomChart;
