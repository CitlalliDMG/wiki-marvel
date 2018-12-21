import { NEW_COLLECTION } from "../actions/types";

const newCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_COLLECTION.CREATE_SUCCESS:
      return { ...state, newCollection: action.newCollection };
    default:
      return state;
  }
};

export default newCollectionReducer;
