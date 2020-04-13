import React, { Component } from "react";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import CounterControl from "../../components/CounterControl/CounterControl";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput counterValue={this.props.reduxStoreCounter} />
        <CounterControl
          label="inc"
          counterCalculator={this.props.onIncrementCounter}
        />
        <CounterControl
          label="add5"
          counterCalculator={this.props.onAddCounter}
        />
        <button
          onClick={() => this.props.onStoreResult(this.props.reduxStoreCounter)}
        >
          {" "}
          Store Result
        </button>
        <ul>
          {this.props.reduxStoreResults.map((eachEntrySet) => (
            <li
              key={eachEntrySet.id}
              onClick={() => this.props.onDeleteResult(eachEntrySet.id)}
            >
              {eachEntrySet.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (stateAtReduxEnd) => {
  return {
    reduxStoreCounter: stateAtReduxEnd.reduxCounterReducer.counter,
    reduxStoreResults: stateAtReduxEnd.reduxResultReducer.results,
  };
};

const mapDispatchToProps = (dispatchMethod) => {
  return {
    onIncrementCounter: () => dispatchMethod({ type: actionTypes.INCREMENT }),
    onAddCounter: () =>
      dispatchMethod({ type: actionTypes.ADD, valueParam: 10 }),
    onStoreResult: (result) =>
      dispatchMethod({ type: actionTypes.STORE_RESULT, resultVal: result }),
    onDeleteResult: (rowId) =>
      dispatchMethod({ type: actionTypes.DELETE_RESULT, deletedId: rowId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
