import { createAction } from "redux-actions";

export const REQUEST_COMICS_DATA = "REQUEST_COMICS_DATA";
export const RECEIVE_COMICS_DATA = "RECEIVE_COMICS_DATA";

export const requestComicsData = createAction(REQUEST_COMICS_DATA);
export const receiveComicsData = createAction(RECEIVE_COMICS_DATA);

export const createNewCollection = newCollection => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_NEW_COLLECTION", newCollection });
  };
};
