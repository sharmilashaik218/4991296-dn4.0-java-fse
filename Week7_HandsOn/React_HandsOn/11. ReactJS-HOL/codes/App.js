import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor"; // We will create this

function App() {
  const [count, setCount] = useState(0);

  // Increment: Invokes multiple methods
  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const incrementValue = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert("Hello! Counter was increased.");
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Button with argument
  const sayMessage = (msg) => {
    alert(msg);
  };

  // Synthetic event example
  const handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event object:", event);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🧪 React Events Hands-On</h1>

      <h2>Counter Value: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <h3>Invoke Function with Argument</h3>
      <button onClick={() => sayMessage("Welcome to React Events!")}>
        Say Welcome
      </button>

      <h3>Synthetic Event</h3>
      <button onClick={handleClick}>Click Me</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
