import { RECEIVE_API_DATA } from "../actions";

// The reducers receive two parameters a state and an action
export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
