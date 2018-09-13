import fetch from "cross-fetch";
import {
  GET_NOVEL_FAILURE,
  GET_NOVEL_REQUEST,
  GET_NOVEL_SUCCESS
} from "../action-types";

export const requestNovel = () => ({
  type: GET_NOVEL_REQUEST
});

export const failNovelRequest = () => ({
  type: GET_NOVEL_FAILURE
});

export const receiveNovel = (selectedNovel = null) => ({
  type: GET_NOVEL_SUCCESS,
  selectedNovel
});

export function fetchNovel(url) {
  return async dispatch => {
    dispatch(requestNovel());

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(receiveNovel(data));
    } catch (err) {
      console.error(err);
      dispatch(failNovelRequest());
    }
  };
}
