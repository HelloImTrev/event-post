import React from "react";

// redux
import { connect } from "react-redux";
import { authenticate } from "../../store";

// mui
import { TextField, Button, Alert, Typography, Box } from "@mui/material";

//SOCIAL BTNS
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <Box sx={{ margin: "0 auto", width: "80%", textAlign: "center", paddingTop: "3vw" }}>
      <Typography variant="marker" sx={{ fontSize: "5vw" }}>
        Sign In
      </Typography>
      <br />
      <Typography variant="roboto" sx={{ fontSize: "1.5vw" }}>
        Enter your username and password to get started.
      </Typography>
      <form onSubmit={handleSubmit} name={name}>
        <TextField id="outlined-basic" label="Username" variant="outlined" name="username" type="text" style={{ width: "50%" }} />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          style={{ width: "50%" }}
        />
        <br />
        <Button type="submit" color="black" variant="contained" sx={{ width: "50%" }}>
          {displayName}
        </Button>
        <div style={{ width: "50%", height: " 20px", borderBottom: "1px solid grey", textAlign: "center", margin: "3vw auto" }}>
          <Typography
            style={{
              fontSize: "1.5vw",
              padding: "0 10px",
              // paddingTop: "6px",
              backgroundColor: "white",
              width: "30%",
              margin: "0 auto",
            }}
          >
            Not a user?
          </Typography>
        </div>
        {/* <hr style={{ width: "50%", margin: "3vw auto" }} /> */}
        {/* <GoogleLoginButton onClick={() => alert("Hello")} className="ggbttn" align="center" style={{ width: "70%" }}>
          CONTINUE WITH GOOGLE
        </GoogleLoginButton> */}
        {error && error.response && <Alert severity="error">{error.response.data}</Alert>}
      </form>
    </Box>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
