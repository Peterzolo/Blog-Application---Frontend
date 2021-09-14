import React from "react";
import useStyles from "./SinglePostStyle";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/actions/postAction";
import { postLike } from "../../../redux/actions/postAction";

const SinglePost = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image}
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.author}</Typography>
        <Typography variant="body2">
          {moment(post.sendTime).fromNow()}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      <div className={classes.details} key={post._id}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <div className={classes.title}>
        <Typography variant="h5" color="primary">
          {post.title}
        </Typography>
      </div>

      <CardContent>
        <Typography className={classes.title} variant="body2" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(postLike(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default SinglePost;
