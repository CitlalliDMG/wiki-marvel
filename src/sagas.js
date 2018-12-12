import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from '...'

import { REQUEST_HELLO_WORLD, receiveHelloWorld } from "./actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//    try {
// Do API call here
//       const user = yield call(Api.fetchUser, action.payload.userId);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }
function* helloWorld(action) {
  try {
    yield put(receiveHelloWorld("Hello World from redux saga!"));
  } catch (e) {
    yield put(receiveHelloWorld("Hello World ERROR from redux saga!"));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}

export default mySaga;
