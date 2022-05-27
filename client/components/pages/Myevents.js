import React from "react";
import { connect } from "react-redux";

//MUI
import { Box, Typography, Grid } from "@mui/material";

export const Myevents = (props) => {
  const { username } = props;

  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          margin: "0 auto",
          alignItems: "center",
          width: "80%",
          paddingTop: "2vw",
        }}
      >
        <Typography variant="marker" sx={{ marginBottom: "1rem", alignSelf: "flext-start", fontSize: "3vw" }}>
          My events
        </Typography>
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

export default connect(mapState)(Myevents);
