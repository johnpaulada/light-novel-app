import {
  GET_CHAPTER_FAILURE,
  GET_CHAPTER_REQUEST,
  GET_CHAPTER_SUCCESS
} from "../actions/action-types";
import initialState from "../initialState";

export const selectedChapter = (
  state = initialState.selectedChapter,
  action
) => {
  switch (action.type) {
    case GET_CHAPTER_REQUEST:
      return state;
    case GET_CHAPTER_FAILURE:
      return state;
    case GET_CHAPTER_SUCCESS:
      return action.selectedChapter;
    default:
      return state;
  }
};
