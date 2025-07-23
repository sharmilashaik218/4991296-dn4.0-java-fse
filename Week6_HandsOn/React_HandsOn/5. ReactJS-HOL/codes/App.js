import React from "react";
import CohortDetails from "./CohortDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      <CohortDetails
        name="React Bootcamp"
        status="ongoing"
        startDate="July 10, 2025"
        endDate="August 20, 2025"
      />
      <CohortDetails
        name="Node.js Workshop"
        status="completed"
        startDate="May 5, 2025"
        endDate="June 1, 2025"
      />
    </div>
  );
}

export default App;
