import React from "react";

// router
import { Link } from "react-router-dom";

//MUI
import { Box, Grid, Paper, Button } from "@mui/material";

const Explore = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start">
      <Grid item md={4} sx={{ border: "red solid 1px", width: "100%", height: "500px" }}>
        Search
      </Grid>
      <Grid item md={4} sx={{ border: "purple solid 1px", width: "100%", height: "500px" }}>
        Event List
      </Grid>
      <Grid item md={4} sx={{ border: "yellow solid 1px", width: "100%", height: "500px" }}>
        Map
      </Grid>
    </Grid>
  );
};

export default Explore;
