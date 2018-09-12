import { combineReducers } from "redux";
import initialState from "../initialState";
import {
  FETCH_HOT_NOVELS_REQUEST,
  FETCH_HOT_NOVELS_FAILURE,
  FETCH_HOT_NOVELS_SUCCESS
} from "../actions/action-types";

const hotNovels = (state = initialState.hotNovels, action) => {
  switch (action.type) {
    case FETCH_HOT_NOVELS_REQUEST:
      return state;
    case FETCH_HOT_NOVELS_FAILURE:
      return state;
    case FETCH_HOT_NOVELS_SUCCESS:
      return action.hotNovels;
    default:
      return state;
  }
};

export default combineReducers({
  hotNovels
});
