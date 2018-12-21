import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { fork, all } from "redux-saga/effects";
import { reducer as formReducer } from "redux-form";

import { ui, collectionReducer } from "./ui/reducers";
import * as uiSagas from "./ui/sagas";
import collectionSagas from "./sagas/collectionSagas";

export const rootReducer = combineReducers({
  router: routerReducer,
  ui,
  collectionReducer,
  form: formReducer
});

export function* rootSaga() {
  // const fromUiSagas = [...Object.values(uiSagas)].map(fork);

  yield all([[...Object.values(uiSagas)].map(fork), collectionSagas()]);
}
