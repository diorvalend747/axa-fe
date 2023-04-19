import { SET_USER, SET_USERS, SET_POST } from "./actionTypes";

const initialState = {
  user: {},
  users: [],
  // favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
