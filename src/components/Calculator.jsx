import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="container mt-5">
      <input className="form-control mb-2" type="text" value={input} readOnly />
      <div className="d-grid gap-2">
        <button
          className="btn btn-outline-primary"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
      </div>
      <div className="d-grid gap-2 mt-2">
        
      </div>
      <div className="d-grid gap-2 mt-2">
        
      </div>
      <div className="d-grid gap-2 mt-2">
        
      </div>
      <div className="d-grid gap-2 mt-2">
        
      </div>
      <div className="d-grid gap-2 mt-2">
        <button className="btn btn-outline-primary" onClick={handleClear}>
          C
        </button>
        <button className="btn btn-outline-primary" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
