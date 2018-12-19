import { takeLatest, call, put } from "redux-saga/effects";

import api from "../../../lib/api";

// Import actions
import { REQUEST_COMICS_DATA, receiveComicsData } from "./actions";

// callRequestComicsData: Worker saga who makes the api call when watcher saga sees the action
function* callRequestComicsData(action) {
  const results = yield call(api.getByTitle, action.payload);
  yield put(receiveComicsData(results));
}

// requestComicsData: Watcher saga who watches for actions dispatched to the store, starts a worker saga
export function* requestComicsDataSaga() {
  yield takeLatest(REQUEST_COMICS_DATA, callRequestComicsData);
}
