import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { authenticate } from "../../store";

// mui
import { TextField, Button, Alert, Typography, Box } from "@mui/material";

//SOCIAL BTNS
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error, signupError } = props;
  const [signupInput, setSignupInput] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleCreateAccountInputFields = (e) => {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
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
      <Typography
        variant="promptTitle"
        sx={{
          fontSize: {
            xxs: "30px",
            xs: "35 px",
            sm: "40px",
            md: "40px",
            lg: "50px",
          },
        }}
      >
        Sign In
      </Typography>
      <br />
      <Typography
        variant="roboto"
        sx={{
          fontSize: {
            xxs: "15px",
            xs: "15px",
            sm: "18px",
            md: "20px",
            lg: "20px",
          },
        }}
      >
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
            fontSize: { xxs: "15px", sm: "18px", md: "20px", lg: "20px" },
          }}
        >
          LOG IN
        </Button>
        <br />
        <Button
          onClick={() =>
            handleSubmit({
              target: {
                name: "login",
                username: "murphy",
                password: "123",
                email: "murph@gmail.com",
              },
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
            fontSize: { xxs: "15px", sm: "18px", md: "20px", lg: "20px" },
            marginTop: "1vw",
          }}
        >
          Sign in as a Demo User
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
          {error && error.response && <Alert severity="error">{error.response.data}</Alert>}
        </Box>
        <Button
          onClick={() => (window.location.href = "/googleOauth")}
          variant="contained"
          color="white"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
            fontSize: { xxs: "13px", sm: "18px", md: "20px", lg: "20px" },
            color: "#000000",
            lineHeight: "13px",
          }}
        >
          <img src="/images/google_logo.png" style={{ height: "30px", marginRight: "15px" }} />
          CONTINUE WITH GOOGLE
        </Button>
        {/* {
          <GoogleLoginButton
            onClick={() => (window.location.href = "/googleOauth")}
            className="ggbttn"
            align="center"
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
            CONTINUE WITH GOOGLE
          </GoogleLoginButton>
        } */}
      </form>

      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "2px",
          width: {
            xxs: "95%",
            md: "60%",
            lg: "50%",
          },
          backgroundColor: "#5e5e5e",
          margin: "3vw auto",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            zIndex: "1",
            width: {
              xxs: "25%",
              sm: "20%",
              md: "40%",
              lg: "50%",
            },
            position: "absolute",
          }}
        >
          <Typography
            variant="notAUser"
            sx={{
              width: {
                xxs: "95%",
                md: "50%",
                lg: "20%",
              },
              fontSize: {
                xxs: "15px",
                xs: "15px",
                sm: "18px",
                md: "20px",
                lg: "20px",
              },
              padding: {
                sm: "0 15px",
              },
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
          fontSize: {
            xxs: "30px",
            xs: "35 px",
            sm: "40px",
            md: "40px",
            lg: "50px",
          },
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
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="text"
          color="pink"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
          }}
          value={signupInput.email}
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
          disabled={
            !signupInput.password.length ||
            !signupInput.username.length ||
            !signupInput.email.length
          }
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
            fontSize: { xxs: "15px", sm: "18px", md: "20px", lg: "20px" },
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
            fontSize: { xxs: "15px", sm: "18px", md: "20px", lg: "20px" },
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
      state.auth.error && state.auth.error.response.data.includes("already exists")
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
        console.log("log", evt.target);
        const formName = evt.target.name;
        const username = evt.target.username;
        const email = evt.target.email;
        const password = evt.target.password;
        dispatch(authenticate(username, password, formName, email));
      }
    },
  };
};

export const LoginSignup = connect(mapLogin, mapDispatch)(AuthForm);
