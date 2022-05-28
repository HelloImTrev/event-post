import React from "react";
import { connect } from "react-redux";

//MUI
import { Box, Typography, TextField, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: {
            xxs: "300px",
            xs: "400px",
            sm: "500px",
          },
        }}
      >
        <img src={"/images/main.jpg"} style={{ zIndex: "-1", width: "100%", height: "100%", display: "block" }} />
        <Box sx={{ zIndex: "1", width: "100%", position: "absolute" }}>
          <Typography
            variant="marker"
            sx={{
              marginBottom: "1rem",
              alignSelf: "flext-start",
              fontSize: {
                xxs: "35px",
                xs: "50px",
                sm: "70px",
              },
              display: "block",
              marginBottom: {
                xxs: "0",
                xs: "0",
              },
            }}
          >
            Join the Hype!
          </Typography>
          <br />
          <TextField
            id="filled-basic"
            label="Search events"
            variant="filled"
            name="search"
            type="search"
            color="purple"
            sx={{
              width: {
                xxs: "235px",
                xs: "80%",
                sm: "50%",
              },
              input: {
                background: "white",
              },
            }}
          />
          <br style={{ marginTop: "1vw" }} />
          <TextField
            id="filled-basic"
            label={
              <Box>
                <LocationOnIcon /> Location
              </Box>
            }
            variant="filled"
            name="location"
            type="location"
            color="purple"
            sx={{
              marginTop: "1vw",
              width: {
                xxs: "235px",
                xs: "80%",
                sm: "50%",
              },
              borderRadius: "1rem 1rem 0 0 ",
              input: {
                background: "white",
              },
            }}
          />
          <br />
          <Button
            color="purple"
            variant="contained"
            sx={{
              width: "10%",
              marginTop: {
                xxs: "3vw",
                xs: "1vw",
              },
              borderRadius: "3rem",
            }}
          >
            Go
          </Button>
        </Box>
      </Box>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
