//Calculator.js ----inside component


import React, { useState } from 'react';

function Calculator() {
  const [val, setVal] = useState("");
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='display-5 fw-bolder text-primary'><i>Calculator</i></h1>
        </div>
      </div>
      <input type='text' value={val} readOnly />
      <div className='row'>
        <button onClick={() => setVal("")}>C</button>
        <button value="1" onClick={(e) => setVal(val + e.target.value)}>1</button>
        <button value="2" onClick={(e) => setVal(val + e.target.value)}>2</button>
        <button value="3" onClick={(e) => setVal(val + e.target.value)}>3</button>
        <button value="+" onClick={(e) => setVal(val + e.target.value)}>+</button>
      </div>
      <div className='row'>
        <button value="4" onClick={(e) => setVal(val + e.target.value)}>4</button>
        <button value="5" onClick={(e) => setVal(val + e.target.value)}>5</button>
        <button value="6" onClick={(e) => setVal(val + e.target.value)}>6</button>
        <button value="%" onClick={(e) => setVal(val + e.target.value)}>%</button>
        <button value="-" onClick={(e) => setVal(val + e.target.value)}>-</button>
      </div>
      <div className='row'>
        <button value="7" onClick={(e) => setVal(val + e.target.value)}>7</button>
        <button value="8" onClick={(e) => setVal(val + e.target.value)}>8</button>
        <button value="9" onClick={(e) => setVal(val + e.target.value)}>9</button>
        <button value="*" onClick={(e) => setVal(val + e.target.value)}>*</button>
        <button onClick={() => setVal(String(eval(val) * eval(val)))}>x<sup>2</sup></button>
      </div>
      <div className='row'>
        <button value="0" onClick={(e) => setVal(val + e.target.value)}>0</button>
        <button value="." onClick={(e) => setVal(val + e.target.value)}>.</button>
        <button value="/" onClick={(e) => setVal(val + e.target.value)}>/</button>
        <button value="!" onClick={(e) => setVal(val + e.target.value)}>!</button>
        <button onClick={() => setVal(String(eval(val)))}>=</button>
      </div>
    </div>
  );
}


export default Calculator;




//app.css


/* Input Field (Text area) */
input[type='text'] {
  width: 50%;
  padding: 15px;
  font-size: 32px;
  text-align: right;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  color: #333;
  font-weight: bold;
}

/* Buttons */
button {
  width: 10%;
  padding: 20px;
  font-size: 24px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #e0e0e0;
  color: #333;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Button hover effect */
button:hover {
  background-color: #d5d5d5;
  transform: scale(1.1);
}

/* Button active effect */
button:active {
  transform: scale(0.95);
}
