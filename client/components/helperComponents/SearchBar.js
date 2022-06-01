import React, { useState } from "react";

// router
import { Link } from "react-router-dom";

//MUI
import {
  Box,
  Grid,
  Paper,
  Button,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const SearchBar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "#f2f2f2" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: "#f2f2f2" }}>
          Filters
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemText primary="Date" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Price" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Category" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Sports" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Music" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default SearchBar;
