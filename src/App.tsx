import React,{useState} from "react";
import "./App.css";


const CalculatorApp = () => {
const [input,setInput] = useState(" ");
 
const handleButtonPress = (value: string) => {
  const newValue = (input + value);
   setInput(newValue)
};
const clearInput = () =>{
  setInput ("");
}
function calculateResult (){
  try {
    const result = eval(input)
    setInput (result.toString())
  } catch (error) {
    setInput("error")
  }
}

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="buttons">
        <button onClick={() => handleButtonPress('7')}>7</button>
        <button onClick={() => handleButtonPress('8')}>8</button>
        <button onClick={() => handleButtonPress('9')}>9</button>
        <button onClick={() => handleButtonPress('+')}>+</button>
        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button onClick={() => handleButtonPress('-')}>-</button>
        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button onClick={() => handleButtonPress('*')}>*</button>
        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonPress('/')}>/</button>
      </div>
    </div>
  );
};

export default CalculatorApp;
