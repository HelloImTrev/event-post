import React from "react";
import { connect } from "react-redux";

// router
import { Link } from "react-router-dom";

//MUI
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavDrawer = ({ toggleDrawer, user, handleLogout }) => {
  console.log("user is", user);
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"/explore"}>
            <ListItemText primary={"Explore"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"/post"}>
            <ListItemText primary={"Post an event"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {user ? (
          <Box>
            <ListItem disablePadding>
              <ListItemText sx={{ paddingLeft: "10px" }} primary={<p>Hello, {user}</p>} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={"/myevents"}>
                <ListItemText primary={"My events"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleLogout();
                }}
              >
                <ListItemText primary={"Log out"} />
              </ListItemButton>
            </ListItem>
          </Box>
        ) : (
          <ListItem disablePadding>
            <ListItemButton component={Link} to={"/login"}>
              <ListItemText primary="Sign in / Create an account" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default NavDrawer;
