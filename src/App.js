import React from "react";
import { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import bridge001 from "./images/bridge001.jpg";
import PostsComponent from "./components/posts/PostsComponent";
import FormComponent from "./components/form/FormComponent";
import useStyles from "./appStyle/AppStyle";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/postAction";
import "./appStyle/app.css";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div className="bodyStyle">
        <Container maxWidth="lg" className={classes.body}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography
              className={classes.heading}
              variant="h3"
              allign="center"
            >
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
                  <PostsComponent setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormComponent
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                  />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </div>
    </>
  );
};

export default App;
