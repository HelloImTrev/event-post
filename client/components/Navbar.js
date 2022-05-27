import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

import { AppBar, Toolbar, MenuItem, IconButton, Typography, Popover, Grid } from "@mui/material";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>FS-App-Template</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          <AppBar position="fixed" sx={{ bgcolor: "white" }}>
            <Toolbar sx={{ borderBottom: "solid 1px grey" }}>
              <MenuItem component={Link} to={"/home"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant="logo">EVENT POST</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/explore"} sx={{ "&:hover": { bgcolor: "transparent" }, marginLeft: "auto" }}>
                <Typography variant="menuitem">EXPLORE</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/post"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant="menuitem">POST EVENT</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/user"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant="menuitem">My Events</Typography>
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
              <MenuItem component={Link} to={"/explore"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant="menuitem">EXPLORE</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/post"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant="menuitem">POST EVENT</Typography>
              </MenuItem>
              <MenuItem component={Link} to={"/login"} sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Typography variant="menuitem">Log In/Sign up</Typography>
              </MenuItem>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </nav>
    <hr />
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
