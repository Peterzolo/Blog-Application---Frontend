import {
  fetch_Posts,
  create_Post,
  remove_Post,
  update_Post,
  like_Post,
} from "../actions/actionTypes";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case fetch_Posts:
      return action.payload;

    case update_Post:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case like_Post:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case create_Post:
      return [...state, action.payload];

    case remove_Post:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};
export default postReducer;
