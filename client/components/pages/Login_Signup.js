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
  const [signupInput, setSignupInput] = useState({ username: "", password: "" });
  const handleCreateAccountInputFields = (e) => {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  };
  return (
    <Box sx={{ margin: "0 auto", width: "80%", textAlign: "center", paddingTop: "3vw" }}>
      <Typography variant="promptTitle" sx={{fontSize:{xxs: "30px", xs: "35 px", sm: "40px", md: "40px", lg: "50px"},}}>
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
            fontSize:{xxs: "15px", sm: "18px", md: "20px", lg: "20px"},
          }}
        >
          LOG IN
        </Button>
        <br />
        <Button
          onClick={() => handleSubmit({ target: { name: "login", username: "murphy", password: "123" } })}
          color="pink"
          variant="contained"
          sx={{
            width: {
              xxs: "95%",
              md: "60%",
              lg: "50%",
            },
            fontSize:{xxs: "15px", sm: "18px", md: "20px", lg: "20px"},
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
        {
<GoogleLoginButton onClick={() => alert("Hello")} className="ggbttn" align="center" style={{ width: "100%" }}>
          CONTINUE WITH GOOGLE
        </GoogleLoginButton> 
}
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
        <Box sx={{ zIndex: "1",  width: {
                xxs: "25%",
                sm: "20%",
                md: "40%",
                lg: "50%",
              }, position: "absolute" }}>
          <Typography
            style={{
              padding: "0 5px",
              backgroundColor: "white",
              margin: "0 auto",
            }}
            sx = {{
              width: {
                xxs: "95%",
                md: "50%",
                lg: "20%",
              },
          fontSize:{xxs: "10px", xs: "15px", sm: "18px", md: "20px", lg: "20px"},
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
          fontSize:{xxs: "30px", xs: "35 px", sm: "40px", md: "40px", lg: "50px"},
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
            fontSize:{xxs: "15px", sm: "18px", md: "20px", lg: "20px"},
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
          {signupError && signupError.response && <Alert severity="error">{signupError.response.data}</Alert>}
        </Box>
      </form>
    </Box>
  );
};

const mapLogin = (state) => {
  return {
    error: state.auth.error && state.auth.error.response.data.includes("Incorrect") ? state.auth.error : null,
    signupError: state.auth.error && state.auth.error.response.data.includes("already exists") ? state.auth.error : null,
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
        const password = evt.target.password;
        dispatch(authenticate(username, password, formName));
      }
    },
  };
};

export const LoginSignup = connect(mapLogin, mapDispatch)(AuthForm);

