const postReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return action.payload;

    case "UPDATE_A_POST":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case "LIKE_A_POST":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case "CREATE_POST":
      return [...state, action.payload];

    case "DELETE_A_POST":
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};
export default postReducer;
