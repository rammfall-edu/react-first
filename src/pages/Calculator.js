import React, { useEffect, useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (operation === '+') {
      setResult(+firstNumber + +secondNumber);
    }
    if (operation === '-') {
      setResult(+firstNumber - +secondNumber);
    }
    if (operation === '*') {
      setResult(+firstNumber * +secondNumber);
    }
    if (operation === '/') {
      setResult(+firstNumber / +secondNumber);
    }
  }, [firstNumber, secondNumber, operation]);

  return (
    <div>
      <input
        type="number"
        name="firstNumber"
        value={firstNumber}
        onInput={({ target: { value } }) => {
          setFirstNumber(value);
        }}
      />
      <select
        value={operation}
        onInput={({ target: { value } }) => {
          setOperation(value);
        }}
        name="operation"
      >
        <option value="+">plus</option>
        <option value="-">minus</option>
        <option value="*">multiply</option>
        <option value="/">diff</option>
      </select>
      <input
        value={secondNumber}
        onInput={({ target: { value } }) => {
          setSecondNumber(value);
        }}
        type="number"
        name="lastNumber"
      />

      <div>Your result: {result}</div>
    </div>
  );
};

export default Calculator;
