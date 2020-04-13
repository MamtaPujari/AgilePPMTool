import * as actionTypes from "../actionTypes";

const ourInitialState = {
  results: [],
};

const resultReducer = (currentState = ourInitialState, actionParam) => {
  switch (actionParam.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...currentState,
        results: currentState.results.concat({
          id: new Date(),
          value: actionParam.resultVal,
        }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = currentState.results.filter(
        (result) => result.id !== actionParam.deletedId
      );
      return {
        ...currentState,
        results: updatedArray,
      };
    default:
      return currentState;
  }
};

export default resultReducer;
