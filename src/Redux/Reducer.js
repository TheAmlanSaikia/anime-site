import { ADD_FILTER, RESET_FILTER, SEARCH_FILTER, WATCH_LATER } from "./Types";

const initialState = {
  checkBoxValue: {
    Action: false,
    Drama: false,
    Comedy: false,
    Adventure: false,
    Sports: false,
    Avant : false

  },
  searchQuery: "",
  saveToLater: [],
};

export const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        checkBoxValue: {...state.checkBoxValue,[action.payload]:!state['checkBoxValue'][action.payload]}
      };
    case RESET_FILTER:
      return {
        ...state,
        checkBoxValue: "",
        searchQuery: "",
      };
    case SEARCH_FILTER:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case WATCH_LATER:
      return {
        ...state,
        saveToLater: [...state.saveToLater, action.payload],
      };
    default:
      return state;
  }
};