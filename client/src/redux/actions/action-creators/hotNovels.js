import fetch from "cross-fetch";
import {
  FETCH_HOT_NOVELS_FAILURE,
  FETCH_HOT_NOVELS_REQUEST,
  FETCH_HOT_NOVELS_SUCCESS
} from "../action-types";

export const requestHotNovels = () => ({
  type: FETCH_HOT_NOVELS_REQUEST
});

export const failHotNovelsRequest = () => ({
  type: FETCH_HOT_NOVELS_FAILURE
});

export const receiveHotNovels = (hotNovels = []) => ({
  type: FETCH_HOT_NOVELS_SUCCESS,
  hotNovels
});

export function fetchHotNovels(url) {
  return async dispatch => {
    dispatch(requestHotNovels());

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(receiveHotNovels(data));
    } catch (err) {
      console.error(err);
      dispatch(failHotNovelsRequest());
    }
  };
}
