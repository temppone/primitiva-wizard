import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={Step1} />
        <Route path="/" element={Step2} />
        <Route path="/" element={Step3} />
        <Route path="/" element={Step4} />
        <Route path="/" element={Result} />
      </Router>
    </div>
  );
}

export default App;
