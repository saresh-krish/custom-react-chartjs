import React from "react";

import DoughnutChart from "./Doughnut";
import data from "../../data/data.json";

const ChartData = ({ name, title, colour }) => {
  const propertiesNameIndex = data.properties.columns.findIndex(
    (column) => column.name === name
  );

  const totalCosts = {};
  data.properties.rows.forEach((row) => {
    const cost = row[0];
    const propertiesName = row[propertiesNameIndex];

    if (totalCosts[propertiesName]) {
      totalCosts[propertiesName] += cost;
    } else {
      totalCosts[propertiesName] = cost;
    }
  });

  const graphData = Object.values(totalCosts);
  const labels = Object.keys(totalCosts);

  return (
    <>
      <h3>{title}</h3>
      <DoughnutChart labels={labels} graphData={graphData} colour={colour} />
    </>
  );
};

export default ChartData;
