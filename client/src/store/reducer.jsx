import { SET_USER, SET_USERS, SET_POSTS } from "./actionTypes";

const initialState = {
  user: {},
  users: [],
  posts: [],
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

    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
