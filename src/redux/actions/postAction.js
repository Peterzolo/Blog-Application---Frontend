import * as api from "../../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createAPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE_A_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteAPost(id);
    dispatch({ type: "DELETE_A_POST", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const postLike = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeAPost(id);
    dispatch({ type: "LIKE_A_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
