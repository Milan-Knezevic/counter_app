import "../App.css";
import React, { useState } from "react";

const Calculator = () => {
  const [total, setTotal] = useState("");
  const [result, setResult] = useState("");

  const signs = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if (
      (signs.includes(value) && total === "") ||
      (signs.includes(value) && signs.includes(total.slice(-1)))
    ) {
      return;
    }

    setTotal(total + value);

    if (!signs.includes(value)) {
      setResult(eval(total + value).toString());
    }
  };

  const numbers = () => {
    let res = [];
    for (let i = 1; i < 10; i++) {
      res.push(
        <button onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return res;
  };

  const clearDisplay = () => {
    setResult("")
    setTotal("");
  }

  const calculate = () => {
    setTotal(eval(total).toString());
  }

  return (
    <div className="calculator">
      <div className="display">
        {result ? <span>({result})</span> : ""} {total || "0"}
      </div>

      <div className="functions">
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={clearDisplay}>C</button>
      </div>

      <div className="numbers">
        {numbers()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;

// import { useEffect, useState } from "react";

// const useTotal = () => {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);
//   const [sign, setSign] = useState("+");
//   const [result, setResult] = useState(0);

//   useEffect(() => {
//     if (number1 && number2) {
//       getTotal();
//     }
//   }, [sign]);

//   useEffect(() => {
//     if (number1 && number2) {
//       getTotal();
//     }
//   }, [number1, number2]);

//   const getTotal = () => {
//     if (sign === "+") {
//       return adding();
//     } else if (sign === "-") {
//       return subtraction();
//     } else if (sign === "*") {
//       return multiplication();
//     } else if (sign === "/") {
//       return division();
//     }
//   };

//   const setSignTotal = (value) => {
//     setSign(value);
//   };

//   const adding = () => {
//     setResult(number1 + number2);
//   };

//   const subtraction = () => {
//     setResult(number1 - number2);
//   };

//   const multiplication = () => {
//     setResult(number1 * number2);
//   };

//   const division = () => {
//     setResult(number1 / number2);
//   };

//   return {
//     getTotal,
//     result,
//     sign,
//     setSignTotal,
//     setNumber1,
//     setNumber2,
//     adding,
//     subtraction,
//     multiplication,
//     division,
//   };
// };

// const Calculator = () => {
//   const {
//     result,
//     number1,
//     number2,
//     setNumber1,
//     setNumber2,
//     sign,
//     getTotal,
//     setSignTotal,
//   } = useTotal();

//   return (
//     <div className="calculator-container">
//       <h1>Calculator</h1>

//       <input
//         type="number"
//         value={number1}
//         onChange={(event) => setNumber1(+event.target.value)}
//       />

//       <select
//         value={sign}
//         onChange={(event) => setSignTotal(event.target.value)}
//       >
//         <option value="+">+</option>
//         <option value="-">-</option>
//         <option value="*">*</option>
//         <option value="/">/</option>
//       </select>

//       <input
//         type="number"
//         value={number2}
//         onChange={(event) => setNumber2(+event.target.value)}
//       />

//       <button onClick={getTotal}>=</button>
//       <input value={result} />
//     </div>
//   );
// };

// export default Calculator;

/////////////

// import React from "react";



// const Calculator = () => {

//   const [total, setTotal] = useState('')
//   const [result, setResult] = useState('')
  
//   const signs = ['+', '-', '*', '/', '.']

//   const updateTotal = value => {
//     if (signs.includes(value) && total === '' || 
//         signs.includes(value) && total.slice(0, -1)    
//     ) {
//       return;
//     }

//     setTotal(total + value)
//   }

//   const numbers = () => {
//     let res = [];
//     for (let i = 1; i < 10; i++) {
//       res.push(
//         <button>
//           {i}
//         </button>
//       )
//     }
//     return res;
//   }

//   const clearDisplay = () => {}

//   return (
//     <div>
//       <div className="display">
//         <span>{result}</span>
//       </div>
//       <div className="functions">
//         <button onClick={() =>  updateTotal()}>+</button>
//         <button onClick={() =>  updateTotal()}>-</button>
//         <button onClick={() =>  updateTotal()}>*</button>
//         <button onClick={() =>  updateTotal()}>/</button>
//         <button onClick={}>C</button>
//       </div>
//       <div className="numbers">
//         {numbers}
//         <button onClick={() =>  updateTotal()}>=</button>
//         <button onClick={() =>  updateTotal()}>.</button>
//       </div>
//     </div>
//   );
// };

// export default Calculator;
