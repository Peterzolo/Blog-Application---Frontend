import React from "react";
import { useState, useEffect } from "react";
import useStyles from "../../components/navbar/NavStyle";
import bridge001 from "../../images/bridge001.jpg";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { userLogOut } from "../../redux/actions/actionTypes";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleLogOut = () => {
    dispatch({ type: userLogOut });
    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  console.log("This is the user", user);

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <div>
          <Typography component={Link} to="/" variant="h3" allign="center">
            News Blog
          </Typography>
          <img
            className={classes.image}
            src={bridge001}
            alt="bridge001"
            height="60"
          />
        </div>

        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={handleLogOut}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
