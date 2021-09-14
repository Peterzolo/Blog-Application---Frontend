import React from "react";
import useStyles from "./FormStyles";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createAPost } from "../../redux/actions/postAction";
import { updateAPost } from "../../redux/actions/postAction";

const FormComponent = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    author: "",
    image: "",
    tags: "",
  });

  const selectedPost = useSelector((state) =>
    currentId ? state.posts.find((item) => item._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedPost) setPostData(selectedPost);
  }, [selectedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateAPost(currentId, postData));
    } else {
      dispatch(createAPost(postData));
    }
    clearBtn()
  };

  const clearBtn = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      author: "",
      image: "",
      tags: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">
          {" "}
          {currentId ? "Edit " : "Post "}Event
        </Typography>

        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          autoFocus
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          autoFocus
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="author"
          label="Author"
          variant="outlined"
          fullWidth
          autoFocus
          value={postData.author}
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          autoFocus
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          className={classes.buttonClear}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearBtn}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default FormComponent;
