import React from "react";
import useStyles from "../../components/user/AuthStyles";
import {
  Grid,
  Avatar,
  Button,
  Typography,
  Container,
  Paper,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";

const Authentication = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useStyles();

  const handleShowPassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = () => {};
  const handleChange = () => {};

  const toggleAuth = () => {
    setIsSignUp((toggle) => !toggle);
    handleShowPassword(false);
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

          <Grid container justify="flex-end">
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
