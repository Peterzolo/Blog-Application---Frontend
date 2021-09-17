import React from "react";
import useStyles from "../../components/user/AuthStyles";
import {
  Grid,
  Avatar,
  Button,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Icon from "../user/icons/Icon";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { google_auth } from "../../redux/actions/actionTypes";

const Authentication = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = () => {};
  const handleChange = () => {};

  const toggleAuth = () => {
    setIsSignUp((toggle) => !toggle);
    handleShowPassword(false);
  };

  const googleSuccess = async (response) => {
    const result = response?.profileObj;
    const token = response?.tokenId;

    try {
      dispatch({ type: google_auth, data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("Could not load, try  again");
    console.log(error);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} autoFocus xs={6}>
          <Grid container space={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstNane"
                  label="First Name"
                  onChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastNane"
                  label="Last Name"
                  onChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              onChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              onChange={handleChange}
              type={passwordVisible ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Confirn Password"
                onChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="552804980885-gvsdt11tk9nvh0m0vlkrr0qnpr1s5g9q.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={toggleAuth}>
                {isSignUp
                  ? "Already have and account Sign In"
                  : "Not yet registered, Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Authentication;
