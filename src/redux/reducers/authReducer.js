import { google_auth } from "../actions/actionTypes";
import { userLogOut } from "../actions/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case google_auth:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case userLogOut:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
