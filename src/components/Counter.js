// import { useState } from "react";

// function App() {

//   const [state, setState] = useState({ counter: 0, incrementor: 2 });

//   const decrement = () => {
//     setState(prev => {
//       return { ...prev, counter: prev.counter - prev.incrementor }
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Counter</h1>

//       <button onClick={() => {
//         setState(prev => {
//           return { ...prev, counter: prev.counter + prev.incrementor };
//         })
//       }}>Increment +</button>

//       <h3>count: {state.counter}</h3>
//       <h3>{JSON.stringify(state, null, 4)}</h3>

//       <button onClick={decrement}>Decrement -</button>

//       <div>
//         <button onClick={() => {
//           setState(prev => {
//             return { ...prev, incrementor: prev.incrementor + 1 };
//           })
//         }}>Increment Step</button>
//         <button onClick={() => {
//           setState(prev => {
//             return { ...prev, incrementor: prev.incrementor - 1 };
//           })
//         }}>Decrement Step</button>
//       </div>

//       <div>
//           <input type="number" min={-100} max={100} step={5} onChange={event => {
//             setState(value => {
//               return { ...value, incrementor: event.target.value }
//             })
//           }} />
//       </div>

//     </div>

//   );
// }

// export default App;

/////////////////////////////////////////////////////////////
// C L A S S COMPONENT
// import React, { Component } from 'react';

// class App extends Component {

//     state = {
//         counter: 0,
//         incrementor: 2
//     }

//     render() {
//         return (
//             <div>

//                 <h1>Counter</h1>
//                 <button onClick={() => {
//                     this.setState({ counter: this.state.counter + 1 })
//                 }}>Increment +</button>
//                 <h3>count: {this.state.counter}</h3>
//                 <h3>{JSON.stringify(this.state, null, 4)}</h3>
//                 <button onClick={() => {
//                     this.setState({ counter: this.state.counter - 1 })
//                 }}>Decrement -</button>

//                 <div>

//                     <button onClick={() => {
//                             this.setState(prev => {
//                                 return { ...prev, incrementor: prev.incrementor + 1 };
//                             })
//                     }}
//                     >Increment Step</button>

//                     <button onClick={() => {
//                             this.setState(prev => {
//                                 return { ...prev, incrementor: prev.incrementor - 1 };
//                             })
//                     }}>Decrement Step</button>

//                 </div>

//                 <div>
//                     <input type="number" min={-100} max={100} step={5} onChange={(event) => {
//                         this.setState((prev) => {
//                             return {...prev, incrementor: event.target.value}
//                         })
//                     }} />
//                 </div>

//             </div>
//         );
//     }
// }

// export default App;
///////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";


const useCounter = (init = 0) => {
  const [counter, setCounter] = useState(0);
  const [incrementor, setIncrementor] = useState(2);

  const increment = () => {
    setCounter(counter + incrementor);
  };

  const decrement = () => {
    setCounter(counter - incrementor);
  };

  const incrementStep = () => {
    setIncrementor(incrementor + 1);
  };

  const decrementStep = () => {
    setIncrementor(incrementor - 1);
  };

  const inputStep = (event) => {
    setIncrementor(parseInt(event.target.value));
  };

  return {
    counter,
    increment,
    decrement,
    incrementor,
    incrementStep,
    decrementStep,
    inputStep,
  };
};

const Counter = () => {
  const {
    counter,
    increment,
    decrement,
    incrementor,
    incrementStep,
    decrementStep,
    inputStep,
  } = useCounter(2);

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <button onClick={increment}>Increment +</button>
      <h1 className={counter > 50 ? "plus" : counter < -50 ? "minus" : null}>
        counter: {counter}
      </h1>
      <button onClick={decrement}>Decrement -</button>

      <h5>{JSON.stringify(incrementor, null, 4)}</h5>

        <button onClick={incrementStep}>Increment step</button>
      <button onClick={decrementStep}>Decrement step</button>

      <div>
        <input
          type="number"
          min={-100}
          max={100}
          step={5}
          value={incrementor}
          onChange={inputStep}
        />
      </div>
    </div>
  );
};

export default Counter;