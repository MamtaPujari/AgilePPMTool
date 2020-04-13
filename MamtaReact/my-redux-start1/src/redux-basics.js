const redux = require("redux");
const handleToCreateStoreFunction = redux.createStore;

const ourInitialState = {
  counter: 0,
};

const myRootReducer = (currState = ourInitialState, action) => {
  if (action.type == "INC_COUNTER") {
    // return currState.counter++  << cant do asa it should be done immutable way
    return {
      ...currState,
      counter: currState.counter + 1,
    };
  } else if (action.type == "ADD_COUNTER") {
    return {
      ...currState,
      counter: currState.counter + action.valueParam,
    };
  } else return currState;
};

const myStore = handleToCreateStoreFunction(myRootReducer);
console.log(myStore.getState());
myStore.subscribe(() => {
  console.log("Subscription triggered, our changed state=", myStore.getState());
});
console.log(myStore.getState());

myStore.dispatch({ type: "INC_COUNTER" });
console.log(myStore.getState());

myStore.dispatch({ type: "ADD_COUNTER", valueParam: 5 });
console.log(myStore.getState());
