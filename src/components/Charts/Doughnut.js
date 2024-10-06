import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CustomLegend from "./CustomLegend";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ labels, graphData, colour }) => {
  const labelsList = labels || [];
  const [visibleDatasets, setVisibleDatasets] = useState(
    labelsList.map(() => true)
  );

  const data = {
    labels: labelsList,
    datasets: [
      {
        label: "# of Amount",
        data: graphData || [],
        backgroundColor: colour,
      },
    ],
  };

  const toggleDataset = (index) => {
    const newVisibleDatasets = [...visibleDatasets];
    newVisibleDatasets[index] = !newVisibleDatasets[index];
    setVisibleDatasets(newVisibleDatasets);
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: "right",
        display: false,
      },
    },
    cutout: "65%",
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="chart-view">
        <Doughnut
          data={{
            ...data,
            datasets: [
              {
                ...data.datasets[0],
                data: visibleDatasets.map((visible, index) =>
                  visible ? data.datasets[0].data[index] : 0
                ),
              },
            ],
          }}
          options={options}
        />
      </div>
      <CustomLegend
        labels={labelsList}
        data={data}
        visibleDatasets={visibleDatasets}
        toggleDataset={toggleDataset}
      />
    </div>
  );
};

export default DoughnutChart;
