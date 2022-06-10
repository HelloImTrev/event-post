import React, { useState, useEffect } from "react";

// router
import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";

//MUI
import { Box, Grid, Paper, Button, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const SearchBar = ({ filterCategory, windowDimensions, removeError }) => {
  const { width, height } = windowDimensions;

  const [open, setOpen] = useState(width <= 930 ? false : true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCategory = (e) => {
    filterCategory(e.target.innerHTML);
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      <List
        sx={{ width: "100%", bgcolor: "#f2f2f2", display: { xxs: "none", md: "block" } }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: "#f2f2f2" }}>
            Filters
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemText primary="Price - Low to High" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Price - High to Low" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Category" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={(e) => {
                handleCategory(e);
                removeError();
              }}
            >
              <ListItemText primary="Sports" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={(e) => {
                handleCategory(e);
                removeError();
              }}
            >
              <ListItemText primary="Music" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List sx={{ width: "100%", bgcolor: "#f2f2f2", display: { xxs: "block", md: "none" } }} component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Filter" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="Price - Low to High" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Price - High to Low" />
          </ListItemButton>
          <Divider />
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={(e) => {
                handleCategory(e);
                removeError();
              }}
            >
              <ListItemText primary="Sports" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={(e) => {
                handleCategory(e);
                removeError();
              }}
            >
              <ListItemText primary="Music" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default SearchBar;
