import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handler for button click
  const handleClick = value => {
    setInput(input + value);
  };

  // Handler for evaluating the input string as a mathematical expression
  const calculate = () => {
    try {
      setResult(evaluate(input)); // Evaluates the string as a math expression
    } catch (error) {
      setResult('Error');
    }
  };

  // Handler for clearing input
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <input type="text" value={input} disabled />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => clearInput()}>C</button>
      </div>
    </div>
  );
}

export { App };