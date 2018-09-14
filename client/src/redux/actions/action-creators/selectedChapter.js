import fetch from "cross-fetch";
import {
  GET_CHAPTER_FAILURE,
  GET_CHAPTER_REQUEST,
  GET_CHAPTER_SUCCESS
} from "../action-types";

export const requestChapter = () => ({
  type: GET_CHAPTER_REQUEST
});

export const failChapterRequest = () => ({
  type: GET_CHAPTER_FAILURE
});

export const receiveChapter = (selectedChapter = null) => ({
  type: GET_CHAPTER_SUCCESS,
  selectedChapter
});

export function fetchChapter(url) {
  return async dispatch => {
    dispatch(requestChapter());

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(receiveChapter(data));
    } catch (err) {
      console.error(err);
      dispatch(failChapterRequest());
    }
  };
}
