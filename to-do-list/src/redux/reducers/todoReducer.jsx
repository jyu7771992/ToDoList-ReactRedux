const initialState = [];

//constant vairables, actions status, put them into another folder
const ADD_TODO = 'todos/todoAdded';
const TODO_TOGGLE = 'todos/todoToggled';
const COLOR_SELECT = 'todos/colorSelected';
const DELETE_TODO = 'todos/todoDeleted';
const ALL_COMPLETE_TODO = 'todos/allCompleted';
const CLEAR_TODO = 'todos/completedCleared';

function nextTodoId(todos) {
  const curId = todos.reduce((curId, todo) => Math.max(todo.id, curId), -1);
  return curId + 1;
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case TODO_TOGGLE: {
      return state.map((todo, index) => {
        action.index === index
          ? {
              text: todo.text,
              completed: !todo.completed,
            }
          : todo;
      });
    }
    case COLOR_SELECT: {
      return {
        ...state,
        // Overwrite the filters value
        filters: {
          // copy the other filter fields
          ...state.filters,
          // And replace the status field with the new value
          status: action.payload,
        },
      };
    }
    case DELETE_TODO: {
    }
    case ALL_COMPLETE_TODO: {
    }
    case CLEAR_TODO: {
    }
    default:
      return state;
  }
}
