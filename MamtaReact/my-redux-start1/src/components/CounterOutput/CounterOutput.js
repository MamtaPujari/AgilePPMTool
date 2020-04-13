import React from "react";

const CounterOutput = (props) => {
  return (
    <div>
      <h1> Counter is: {props.counterValue}</h1>
    </div>
  );
};

export default CounterOutput;
