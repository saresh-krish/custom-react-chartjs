import React, { Suspense } from "react";

import LandingPage from "./pages/LandingPage/landing";

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Cost Management</h1>
      </div>
      <LandingPage />
    </div>
  );
};

export default App;
