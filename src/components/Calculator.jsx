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
      <div className="row justify-content-center">
          <button
            className="col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
      </div>
      <br></br>
      <div className="row justify-content-center">
          <button
            className=" col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
      </div>
      <br></br>
      <div className="row justify-content-center">
          <button
            className="col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("*")}
          >
            *
          </button>
      </div>
      <br></br>
      <div className="row justify-content-center">
          <button
            className="col-2 btn btn-outline-primary"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="col-2 btn btn-outline-primary ms-3"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
          <button
            className="col-2 btn btn-primary ms-3"
            onClick={handleDelete}
          >
            Del
          </button>
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
