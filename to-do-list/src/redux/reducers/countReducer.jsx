import ADD_TODO from '../actions/type';

const initiateState = { value: 0 };

function countReducer(state = initiateState, action) {
  if (action.type === ADD_TODO) {
    return {
      ...state,
      //update the copy with the new value
      value: state.value + 1,
    };
  }

  return state;
}
