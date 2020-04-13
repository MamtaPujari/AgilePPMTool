import React from "react";

const CounterControl = (props) => {
  return <div onClick={props.counterCalculator}>{props.label}</div>;
};

export default CounterControl;
