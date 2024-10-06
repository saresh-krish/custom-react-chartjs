import React from "react";
import ChartData from "../../components/Charts/ChartData";
import "./landing.scss";

const LandingPage = () => {
  const serviceColor = ["#fdd116", "#ffb902", "#ff8b04", "#e93d01", "#dd5900"];
  const locationColor = ["#c786c3", "#672178", "#47225b", "#9b4f97", "#eb6be4"];
  const ResourceColor = ["#00b294", "#008470", "#016f2f", "#42e084", "#00b44b"];

  return (
    <div className="content">
      <div className="grid-container">
        <div className="grid-item">
          <ChartData
            name="ServiceName"
            title="Service Name"
            colour={serviceColor}
          />
        </div>
        <div className="grid-item">
          <ChartData
            name="ResourceLocation"
            title="Location"
            colour={locationColor}
          />
        </div>
        <div className="grid-item">
          <ChartData
            name="ResourceGroupName"
            title="Resource Group Name"
            colour={ResourceColor}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
