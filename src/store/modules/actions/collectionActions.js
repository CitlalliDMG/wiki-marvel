import { NEW_COLLECTION } from "./types";

const createNewCollection = () => ({
  type: NEW_COLLECTION.CREATE
});

const setNewCollection = newCollection => ({
  type: NEW_COLLECTION.CREATE_SUCCESS,
  newCollection: newCollection
});

const setNewCollectionError = error => ({
  type: NEW_COLLECTION.CREATE_FAIL,
  error
});

export { createNewCollection, setNewCollection, setNewCollectionError };
