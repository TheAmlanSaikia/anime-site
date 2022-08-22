import { ADD_FILTER, DELETE_WATCHLATER } from "./Types";
import { RESET_FILTER } from "./Types";
import { SEARCH_FILTER } from "./Types";
import { WATCH_LATER } from "./Types";

export const addCheckboxFilter = (payload) => {
   
  return {
    type: ADD_FILTER,
    payload: payload,
  };
};

export const resetFilters = (payload) => {
  return {
    type: RESET_FILTER,
    payload: payload,
  };
};

export const searchFilters = (payload) => {
  return {
    type: SEARCH_FILTER,
    payload: payload,
  };
};

export const addToWatchLater = (payload) => {
  return {
    type: WATCH_LATER,
    payload: payload,
  };
};


export const deletefromWatchLater = (payload) =>{
 return {
    type: DELETE_WATCHLATER,
    payload: payload
 }

}
