import {
  STATUS_ALL,
  FILTER_ADD_COLOR,
  FILTER_REMOVE_COLOR,
  FILTER_CHANGE_STATUS,
} from '../../../actions/type';

export default function filterReducer(
  state = {
    colors: [],
    status: STATUS_ALL,
  },
  action
) {
  const { type, payload } = action;
  const { colors, status } = state;
  switch (type) {
    case FILTER_ADD_COLOR:
      return { ...state, colors: [...colors, payload] };
    case FILTER_REMOVE_COLOR:
      //payload is the hex code for color
      return { ...state, colors: colors.filter((color) => color !== payload) };

    case FILTER_CHANGE_STATUS:
      return { ...state, status: payload };

    default:
      return state;
  }
}

export const addColorFilter = (colorHex) => ({
  type: FILTER_ADD_COLOR,
  payload: colorHex,
});

export const removeColorFilter = (colorHex) => ({
  type: FILTER_REMOVE_COLOR,
  payload: colorHex,
});

export const changeFilterStatus = (newStatus) => ({
  type: FILTER_CHANGE_STATUS,
  payload: newStatus,
});
