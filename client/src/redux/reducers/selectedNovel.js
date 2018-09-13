import {
  GET_NOVEL_FAILURE,
  GET_NOVEL_REQUEST,
  GET_NOVEL_SUCCESS
} from "../actions/action-types";
import initialState from "../initialState";

export const selectedNovel = (state = initialState.selectedNovel, action) => {
  switch (action.type) {
    case GET_NOVEL_REQUEST:
      return state;
    case GET_NOVEL_FAILURE:
      return state;
    case GET_NOVEL_SUCCESS:
      return action.selectedNovel;
    default:
      return state;
  }
};
