import React from "react";
import SinglePost from "./singlePost/SinglePost";
import useStyles from "./PostStyles";
import { useSelector } from "react-redux";

const PostsComponent = () => {
  const classes = useStyles();
  const allPosts = useSelector((state) => state.posts);

  console.log(allPosts);
  return (
    <div>
      <h5>Posts Compoment</h5>
      <SinglePost />
      <SinglePost />
    </div>
  );
};

export default PostsComponent;
