import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

import { AppBar, Toolbar, MenuItem, Typography, useMediaQuery } from "@mui/material";

const Navbar = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn ? (
      <div>
        <AppBar position="fixed" sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ borderBottom: "solid 1px grey" }}>
            <MenuItem component={Link} to={"/home"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <Typography variant="logo">EVENT POST</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/explore"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto" }}>
              <Typography variant="marker">EXPLORE</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/post"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <Typography variant="marker">POST EVENT</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/user"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <Typography variant="marker">My Events</Typography>
            </MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    ) : (
      <div>
        <AppBar position="fixed" sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ borderBottom: "solid 1px grey" }}>
            <MenuItem component={Link} to={"/home"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <Typography variant="logo">EVENT POST</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/explore"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto" }}>
              <Typography variant="marker">EXPLORE</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/post"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <Typography variant="marker">POST EVENT</Typography>
            </MenuItem>
            <MenuItem component={Link} to={"/login"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
              <Typography variant="marker">Log In/Sign up</Typography>
            </MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    )}
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
