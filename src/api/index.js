import axios from "axios";
const url = "http://localhost:5000/api/posts";

export const fetchAllPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deleteAPost = (id) => axios.delete(`${url}/${id}`);
export const likeAPost = (id) => axios.patch(`${url}/${id}/postLike`);
