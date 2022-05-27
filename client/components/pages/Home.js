import React from "react";
import { connect } from "react-redux";

//MUI
import { Box, Typography, Grid } from "@mui/material";

export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <Box sx={{ display: "flex", textAlign: "center", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "28vw", width: "100%" }}>
        <img src={"/images/main.jpg"} style={{ zIndex: "-1", width: "100%", height: "100%", display: "block" }} />
        <Box sx={{ zIndex: "1", width: "100%", position: "absolute" }}>
          <Typography variant="marker" sx={{ marginBottom: "1rem", alignSelf: "flext-start", fontSize: "9vw" }}>
            Join the Hype!
          </Typography>
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
