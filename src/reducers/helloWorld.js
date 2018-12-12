import { RECEIVE_HELLO_WORLD } from "../actions";

// The reducers receive two parameters a state and an action
export default (state = "", { type, text }) => {
  switch (type) {
    case RECEIVE_HELLO_WORLD:
      return text;
    default:
      return state;
  }
};
