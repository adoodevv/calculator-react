import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));;
  }

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
      <div className="row">
          <button
            className="col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>
      </div>
      <br></br>
      <div className="row">
          <button
            className=" col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
        </div>
      </div>
      <br></br>
      <div className="row">
          <button
            className="col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("*")}
          >
            *
          </button>
        </div>
      </div>
      <br></br>
      <div className="row">
          <button
            className="col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={handleDelete}
          >
            Del
          </button>
        </div>
      </div>
      <div className="d-grid gap-2 mt-2">
        <button className="btn btn-secondary" onClick={handleClear}>
          C
        </button>
        <button className="btn btn-primary" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
