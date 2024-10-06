import React, { useState } from "react";
import "./style.scss";

// Convert value to Indian currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
};

const CustomLegend = ({ labels, data, visibleDatasets, toggleDataset }) => {
  return (
    <div className="chart_label">
      {labels.map((label, index) => (
        <div
          key={label}
          onClick={() => toggleDataset(index)}
          className="label-sec"
          style={{
            opacity: visibleDatasets[index] ? 1 : 0.5,
          }}
        >
          <span
            className="label-line"
            style={{
              border: `4px solid ${data.datasets[0].backgroundColor[index]}`,
            }}
          />
          <div>
            <div className="label-text">{label}</div>
            <div className="label-amount">
              {formatCurrency(data.datasets[0].data[index])}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
