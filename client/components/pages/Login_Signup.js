import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { authenticate } from "../../store";

// mui
import { TextField, Button, Alert, Typography, Box } from "@mui/material";

//SOCIAL BTNS
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error, signupError } = props;
  const [signupInput, setSignupInput] = useState({
    username: "",
    password: "",
  });
  const handleCreateAccountInputFields = (e) => {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  };

  let history = useHistory();
  const googleLogin = () => {
    history.push("/asdf");
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "80%",
        textAlign: "center",
        paddingTop: "3vw",
      }}
    >
      <Typography variant="promptTitle" sx={{ fontSize: "4vw" }}>
        Sign In
      </Typography>
      <br />
      <Typography variant="roboto" sx={{ fontSize: "1.5vw" }}>
        Enter your username and password to get started.
      </Typography>
      <form onSubmit={handleSubmit} name="login">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          type="text"
          color="pink"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
          }}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          color="pink"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
          }}
        />
        <br />
        <Button
          type="submit"
          color="grey"
          variant="contained"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
          }}
        >
          LOG IN
        </Button>
        <br />
        <Button
          onClick={() =>
            handleSubmit({
              target: { name: "login", username: "murphy", password: "123" },
            })
          }
          color="pink"
          variant="contained"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
            marginTop: "1vw",
          }}
        >
          Sign in as a Demo User
        </Button>
        <GoogleLoginButton onClick={googleLogin} />
        <Box
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
            margin: "1vw auto",
          }}
        >
          {error && error.response && (
            <Alert severity="error">{error.response.data}</Alert>
          )}
        </Box>
      </form>

      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "1px",
          width: {
            xxs: "95%",
            md: "60%",
            lg: "50%",
          },
          backgroundColor: "#5e5e5e",
          margin: "3vw auto",
        }}
      >
        <Box sx={{ zIndex: "1", width: "50%", position: "absolute" }}>
          <Typography
            style={{
              fontSize: "1.5vw",
              padding: "0 5px",
              backgroundColor: "white",
              width: "25%",
              margin: "0 auto",
            }}
          >
            Not a user?
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="promptTitle"
        sx={{
          width: {
            xxs: "95%",
            md: "60%",
            lg: "50%",
          },
          fontSize: "4vw",
        }}
      >
        Create an account
      </Typography>
      <form onSubmit={handleSubmit} name="signup">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          type="text"
          color="pink"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
          }}
          value={signupInput.username}
          onChange={handleCreateAccountInputFields}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          color="pink"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
          }}
          value={signupInput.password}
          onChange={handleCreateAccountInputFields}
        />
        <br />
        <Button
          onClick={() => {
            handleSubmit({ target: { ...signupInput, name: "signup" } });
          }}
          color="grey"
          variant="contained"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
          }}
        >
          CREATE AN ACCOUNT
        </Button>
        <Box
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
            margin: "1vw auto",
          }}
        >
          {signupError && signupError.response && (
            <Alert severity="error">{signupError.response.data}</Alert>
          )}
        </Box>
      </form>
    </Box>
  );
};

const mapLogin = (state) => {
  return {
    error:
      state.auth.error && state.auth.error.response.data.includes("Incorrect")
        ? state.auth.error
        : null,
    signupError:
      state.auth.error &&
      state.auth.error.response.data.includes("already exists")
        ? state.auth.error
        : null,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      if (evt.preventDefault) {
        evt.preventDefault();
        const formName = evt.target.name;
        const username = evt.target.username.value;
        const password = evt.target.password.value;
        dispatch(authenticate(username, password, formName));
      } else {
        const formName = evt.target.name;
        const username = evt.target.username;
        const password = evt.target.password;
        dispatch(authenticate(username, password, formName));
      }
    },
  };
};

export const LoginSignup = connect(mapLogin, mapDispatch)(AuthForm);

{
  /* <GoogleLoginButton onClick={() => alert("Hello")} className="ggbttn" align="center" style={{ width: "70%" }}>
          CONTINUE WITH GOOGLE
        </GoogleLoginButton> */
}
