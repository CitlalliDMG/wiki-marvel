import { put, select, takeLatest } from "redux-saga/effects"; // Objetos con significado para saga
import { NEW_COLLECTION } from "../actions/types";
// import api from "../../../lib/api";
import {
  setNewCollection,
  setNewCollectionError
} from "../actions/collectionActions";

export const getValuesCollectionForm = state =>
  state.form.createCollection.values;

export const getActualCollections = state =>
  state.collectionReducer.collections;

function* handleNewCollectionCreation() {
  try {
    const valuesCollectionForm = yield select(getValuesCollectionForm);
    // console.log(valuesCollectionForm);
    const valuesActualCollections = yield select(getActualCollections);
    // console.log(valuesActualCollections);
    const newCollectionArray = valuesActualCollections.push(
      valuesCollectionForm
    );
    // console.log(newCollectionArray);
    alert("Your new collection has been created");
    yield put(setNewCollection(newCollectionArray));
  } catch (error) {
    yield put(setNewCollectionError(error.toString()));
  }
}

export default function* watchComicsSagas() {
  yield takeLatest(NEW_COLLECTION.CREATE, handleNewCollectionCreation);
}
