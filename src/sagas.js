import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA } from "./actions";
import api from "./lib/api";

// Worker Saga: will be fired on RECEIVE_API_DATA actions
function* getApiData(action) {
  try {
    // Do API call here
    const data = yield call(api.fetchData);
    yield put({ type: "RECEIVE_API_DATA", data: data });
  } catch (e) {
    console.log(e);
  }
}

// Starts fetchUser on the latest dispatched `REQUEST_API_DATA` action.
function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export default mySaga;
