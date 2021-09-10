import React from "react";
import { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import bridge001 from "./images/bridge001.jpg";
import PostComponent from "./components/posts/PostsComponent";
import FormComponent from "./components/form/FormComponent";
import useStyles from "./appStyle/AppStyle";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/postAction";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" allign="center">
          News Blog
        </Typography>
        <img
          className={classes.image}
          src={bridge001}
          alt="bridge001"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <PostComponent />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormComponent />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
