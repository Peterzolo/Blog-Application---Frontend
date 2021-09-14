import React from "react";
import SinglePost from "./singlePost/SinglePost";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./PostStyles";
import {useSelector} from "react-redux";

const PostsComponent = ({ setCurrentId }) => {
  const classes = useStyles();

  const allPosts = useSelector((state) => state.posts);
  console.log("This is allPosts", allPosts);

  return !allPosts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignitems="stretch"
      spacing={3}
    >
      {allPosts.map((post) => (
        <Grid  key={post._id} item xs={12} sm={6}>
          <SinglePost post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsComponent;
