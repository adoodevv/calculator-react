import React from "react";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Calculator</h1>
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
