import React, { useState } from "react";
import "./Calculator.css";
import Container from '@mui/material/Container';

export default function Calculator() {

  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const inputNum = (e) => {
    var input = e.target.value;
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  const operatorHandler = (e) => {
    var operator = e.target.value;
    setOperator(operator);
    setOldNum(num);
    setNum(0);
  }

  const clear = () => {
    setNum(0)
    setOldNum(0)
  }

  const changeSign = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  const porcentage = () => {
    setNum(num / 100)
  }

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <Container className='Container' maxWidth="xs">
      <div>
        <h1>{num}</h1>
        <div>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button onClick={operatorHandler} value="+">+</button>
          <button onClick={inputNum} value={7}>7</button>
          <button onClick={inputNum} value={8}>8</button>
          <button onClick={inputNum} value={9}>9</button>
          <button onClick={operatorHandler} value="/">/</button>
          <button onClick={inputNum} value={4}>4</button>
          <button onClick={inputNum} value={5}>5</button>
          <button onClick={inputNum} value={6}>6</button>
          <button onClick={operatorHandler} value="X">x</button>
          <button onClick={inputNum} value={1}>1</button>
          <button onClick={inputNum} value={2}>2</button>
          <button onClick={inputNum} value={3}>3</button>
          <button onClick={operatorHandler} value="-">-</button>
          <button onClick={inputNum} value={0} className="zero">0</button>
          <button onClick={inputNum} value={"."}>.</button>
          <button  onClick={calculate} 
          value="=">=</button>
        </div>
      </div>
    </Container>
  )
}
