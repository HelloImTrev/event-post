import React, { useEffect, useState } from "react";
import history from "../../history";

// router
import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events";

//MUI
import { Box, Grid, Paper, Button, Alert, CircularProgress } from "@mui/material";

// child components
import SearchBar from "../helperComponents/SearchBar";
import EventList from "../helperComponents/EventList";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Explore = ({ history, match }) => {
  console.log("explore props", history, match.params);

  let filter = match.params.filter; // 1. undefined
  if (filter) filter = JSON.parse(filter);
  filter = filter || {}; // 2. {}
  console.log("filter:", filter);

  const events = useSelector(({ events }) =>
    events.filter((evt) => {
      return !filter.category || filter.category === evt.category;
    })
  );
  const error = useSelector(({ error }) => error);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [loading, setLoading] = useState(true);

  useEffect((props) => {
    setLoading(false);

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterCategory = (category) => {
    if (category.length === 0) {
      filter = {};
    } else {
      filter["category"] = category;
    }
    history.push(`/explore/filter/${JSON.stringify(filter)}`);
  };

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ margin: { xxs: "60px auto 0 auto", xs: "69px auto 0 auto" }, width: "90%" }}
      >
        <Grid item md={2} sx={{ width: "100%" }}>
          <SearchBar filterCategory={filterCategory} windowDimensions={windowDimensions} />
        </Grid>
        <Grid item md={6} sx={{ width: "100%" }}>
          {error.error ? <Alert severity="error">{error.error}</Alert> : <></>}
          <EventList events={events} />
        </Grid>
        <Grid item md={4} sx={{ width: "100%" }}>
          Map
        </Grid>
      </Grid>
    );
  }
};

export default Explore;

// const userLocation = JSON.parse(window.localStorage.getItem("userLocation"));
// const location = userLocation ? userLocation : "New York";
// const userSearchedEvents = useSelector((state) => state.events.filter((event) => event.venueCity === location));
