import fetch from "cross-fetch";

import {
  FETCH_HOT_NOVELS_REQUEST,
  FETCH_HOT_NOVELS_FAILURE,
  FETCH_HOT_NOVELS_SUCCESS
} from "../action-types";

const { REACT_APP_API_URL: API_URL } = process.env;

const requestHotNovels = () => ({
  type: FETCH_HOT_NOVELS_REQUEST
});

const failHotNovelsRequest = () => ({
  type: FETCH_HOT_NOVELS_FAILURE
});

const receiveHotNovels = hotNovels => ({
  type: FETCH_HOT_NOVELS_SUCCESS,
  hotNovels
});

export function fetchHotNovels() {
  return async dispatch => {
    dispatch(requestHotNovels());

    try {
      const response = await fetch(`${API_URL}/novels`);
      const data = await response.json();
      dispatch(receiveHotNovels(data));
    } catch (err) {
      console.error(err);
      dispatch(failHotNovelsRequest());
    }
  };
}
