import { GET_POSTS, FILTER_POSTS, ADD_POST, FIND_ONE } from "../constants/action-types";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case FILTER_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case FIND_ONE:
      return {
        ...state,
        posts: payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload , ...state.posts],
      };

    default:
      return state;
  }
};

export default postsReducer;
