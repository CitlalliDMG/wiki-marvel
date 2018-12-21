import { RECEIVE_COMICS_DATA } from "../ui/actions";

const offsetReducer = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_COMICS_DATA:
      return state + 10;
    default:
      return state;
  }
};

export default offsetReducer;
