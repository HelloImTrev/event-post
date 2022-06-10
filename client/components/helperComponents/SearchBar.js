import React, { useState, useEffect } from "react";

// router
import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../../store/error";

//MUI
import { Box, Grid, Paper, Button, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const SearchBar = ({ filterCategory, windowDimensions }) => {
  const dispatch = useDispatch();
  const { width, height } = windowDimensions;

  const [open, setOpen] = useState(width <= 930 ? false : true);
  const [categoryOpen, setCategoryOpen] = useState(width <= 930 ? false : true);
  const [sortClickOpen, setSortClickOpen] = useState(width <= 930 ? false : true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen);
  };

  const handleSortClick = () => {
    setSortClickOpen(!sortClickOpen);
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
        <ListItemButton onClick={handleCategoryClick}>
          <Typography variant="promptTitle" color="#d83f87" sx={{ fontSize: "1rem", fontWeight: "300" }}>
            Categories
          </Typography>
          {categoryOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={(e) => {
                handleCategory(e);
                dispatch(removeError());
              }}
            >
              <ListItemText primary="Sports" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={(e) => {
                handleCategory(e);
                dispatch(removeError());
              }}
            >
              <ListItemText primary="Music" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleSortClick}>
          <Typography variant="promptTitle" color="#d83f87" sx={{ fontSize: "1rem", fontWeight: "300" }}>
            Sort by
          </Typography>
          {sortClickOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={sortClickOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Price Low" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Price High" />
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
          <List component="div" disablePadding>
            <ListItemButton onClick={handleCategoryClick}>
              <Typography variant="promptTitle" color="#d83f87" sx={{ fontSize: "1rem", fontWeight: "300" }}>
                Categories
              </Typography>
              {categoryOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={(e) => {
                    handleCategory(e);
                    dispatch(removeError());
                  }}
                >
                  <ListItemText primary="Sports" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={(e) => {
                    handleCategory(e);
                    dispatch(removeError());
                  }}
                >
                  <ListItemText primary="Music" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleSortClick}>
              <Typography variant="promptTitle" color="#d83f87" sx={{ fontSize: "1rem", fontWeight: "300" }}>
                Sort by
              </Typography>
              {sortClickOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={sortClickOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Price Low" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Price High" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default SearchBar;
