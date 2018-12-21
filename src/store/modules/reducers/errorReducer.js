import { NEW_COLLECTION } from "../actions/types";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case NEW_COLLECTION.CREATE_FAIL:
      return action.error;
    case NEW_COLLECTION.CREATE:
    case NEW_COLLECTION.CREATE_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
