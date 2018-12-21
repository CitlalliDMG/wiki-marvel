import { createAction } from "redux-actions";

export const REQUEST_COMICS_DATA = "REQUEST_COMICS_DATA";
export const RECEIVE_COMICS_DATA = "RECEIVE_COMICS_DATA";

export const requestComicsData = createAction(REQUEST_COMICS_DATA);
export const receiveComicsData = createAction(RECEIVE_COMICS_DATA);

// export const CREATE_NEW_COLLECTION = "CREATE_NEW_COLLECTION";
// export const CREATE_NEW_COLLECTION_FAILED = "CREATE_NEW_COLLECTION_FAILED";
// export const CREATE_NEW_COLLECTION_FULLFILLED = "CREATE_NEW_COLLECTION_FULLFILLED";

// export const createNewCollection = createAction(CREATE_NEW_COLLECTION);
// export const createNewCollectionFailed = createAction(
//   CREATE_NEW_COLLECTION_FAILED
// );
// export const createNewCollectionFullfilled = createAction(
//   CREATE_NEW_COLLECTION_FULLFILLED
// );

export const createNewCollection = newCollection => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_NEW_COLLECTION", newCollection });
  };
};
