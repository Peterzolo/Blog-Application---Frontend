import axios from "axios";
const url = "http://localhost:5000/api/posts";

export const fetchAllPosts = () => axios.get(url);
