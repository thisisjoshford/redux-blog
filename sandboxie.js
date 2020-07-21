import { createStore } from 'redux';

function reducer(state = 0, action) {
  // console.log('action', action);
  switch(action.type){
    case 'INCREMENT':
      return state + action.payload;
    default: 
      return state;
  }
}

const reduxStore = createStore(reducer);

reduxStore.dispatch({ type: 'INCREMENT', payload: 10 });

console.log('reduxStore.getState()', reduxStore.getState());
