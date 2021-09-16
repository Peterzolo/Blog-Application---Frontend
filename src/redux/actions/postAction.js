import * as api from "../../api/index";
import {
  fetch_Posts,
  create_Post,
  update_Post,
  remove_Post,
  like_Post,
} from "./actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    dispatch({ type: fetch_Posts, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const addPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: create_Post, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: update_Post, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteAPost(id);
    dispatch({ type: remove_Post, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const postLike = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeAPost(id);
    dispatch({ type: like_Post, payload: data });
  } catch (error) {
    console.log(error);
  }
};
