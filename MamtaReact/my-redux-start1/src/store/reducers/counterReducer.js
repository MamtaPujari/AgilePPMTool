import * as actionTypes from "../actionTypes";

const ourInitialState = {
  counter: 0,
};

const counterReducer = (currentState = ourInitialState, actionParam) => {
  switch (actionParam.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, currentState);
      newState.counter = currentState.counter + 1;
      return newState;
    case actionTypes.ADD:
      return {
        ...currentState,
        counter: currentState.counter + actionParam.valueParam,
      };
    default:
      return currentState;
  }
};

export default counterReducer;
