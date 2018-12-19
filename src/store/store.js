import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer, rootSaga } from "./modules";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// mount it on the Store
export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

// then run the saga
sagaMiddleware.run(rootSaga);
