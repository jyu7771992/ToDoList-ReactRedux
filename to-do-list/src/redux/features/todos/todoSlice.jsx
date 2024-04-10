// import {
//   ADD_TODO,
//   TODO_TOGGLE,
//   COLOR_SELECT,
//   DELETE_TODO,
//   ALL_COMPLETE_TODO,
//   CLEAR_TODO,
// } from '../../actions/type';

// const initialState = [
//   { id: 0, text: 'Learn React', completed: true },
//   { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//   { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
// ];

// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
//   return maxId + 1;
// }

// export default function todosReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO: {
//       // Can return just the new todos array - no extra object around it
//       return [
//         ...state,
//         {
//           id: nextTodoId(state),
//           text: action.payload,
//           completed: false,
//         },
//       ];
//     }
//     case TODO_TOGGLE: {
//       return state.map((todo) => {
//         if (todo.id !== action.payload) {
//           return todo;
//         }

//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       });
//     }
//     case ALL_COMPLETE_TODO: {
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: true,
//           });
//         }
//         return todo;
//       });
//     }
//     default:
//       return state;
//   }
// }

// //follow the documents: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await client.get('/fakeApi/todos');
  return response.todos;
});

const initialState = {
  status: 'idle',
  entities: {},
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.entities[todo.id] = todo;
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todoColorSelected: {
      reducer(state, action) {
        const { color, todoId } = action.payload;
        state.entities[todoId].color = color;
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color },
        };
      },
    },
    todoDeleted(state, action) {
      delete state.entities[action.payload];
    },
  },
});

export const { todoAdded, todoToggled, todoColorSelected, todoDeleted } =
  todosSlice.actions;

export default todosSlice.reducer;
