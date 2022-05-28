import React from "react";
import { connect } from "react-redux";

//MUI
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

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
          height: "28vw",
          width: "100%",
        }}
      >
        <img src={"/images/main.jpg"} style={{ zIndex: "-1", width: "100%", height: "100%", display: "block" }} />
        <Box sx={{ zIndex: "1", width: "100%", position: "absolute" }}>
          <Typography variant="marker" sx={{ marginBottom: "1rem", alignSelf: "flext-start", fontSize: "5vw" }}>
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
              width: "50%",
              input: {
                background: "white",
              },
            }}
          />
          <br style={{ marginTop: "1vw" }} />
          <TextField
            id="filled-basic"
            label="Location"
            variant="filled"
            name="location"
            type="location"
            color="purple"
            sx={{
              marginTop: "1vw",
              width: "50%",
              borderRadius: "1rem 1rem 0 0 ",
              input: {
                background: "white",
              },
            }}
          />
          <br />
          <Button color="purple" variant="contained" sx={{ width: "10%", marginTop: "1vw", borderRadius: "3rem" }}>
            Go
          </Button>
        </Box>
      </Box>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
