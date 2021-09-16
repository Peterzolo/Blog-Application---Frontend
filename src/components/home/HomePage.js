import React from "react";
import { Grid, Grow, Container } from "@material-ui/core";
import FormComponent from "../form/FormComponent";
import PostsComponent from "../posts/PostsComponent";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/postAction";
import useStyles from "../../appStyle/AppStyle";

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.appBarContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <PostsComponent setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormComponent currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default HomePage;
