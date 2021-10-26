import {
  USER_STATE_CHANGE,
  USER_POSTS_STATE_CHANGE,
  USER_ALL_POSTS_STATE_CHANGE,
  DICTIONARY_STATE_CHANGE,
} from "../constants";

const initialState = {
  currentUser: [],
  posts: [],
  postsAll: [],
  dictionaryAll: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.currentUser,
      };

    case USER_POSTS_STATE_CHANGE:
      return {
        ...state,
        posts: action.posts,
      };
    case USER_ALL_POSTS_STATE_CHANGE:
      return {
        ...state,
        postsAll: action.postsAll,
      };
    case DICTIONARY_STATE_CHANGE:
      return {
        ...state,
        dictionaryAll: action.dictionaryAll,
      };

    default:
      return state;
  }
};
