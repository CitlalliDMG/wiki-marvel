import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { fork, all } from "redux-saga/effects";
import { reducer as formReducer } from "redux-form";

import { ui, collectionReducer } from "./ui/reducers";
import errorReducer from "./reducers/errorReducer";
import newCollectionReducer from "./reducers/newCollectionReducer";
import offsetReducer from "./reducers/offsetReducer";

import * as uiSagas from "./ui/sagas";
import collectionSagas from "./sagas/collectionSagas";

export const rootReducer = combineReducers({
  router: routerReducer,
  ui,
  collectionReducer,
  form: formReducer,
  error: errorReducer,
  newCollection: newCollectionReducer,
  offset: offsetReducer
});

export function* rootSaga() {
  // const fromUiSagas = [...Object.values(uiSagas)].map(fork);

  yield all([[...Object.values(uiSagas)].map(fork), collectionSagas()]);
}
