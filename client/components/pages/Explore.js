import React, { useEffect, useState } from "react";

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

const Explore = () => {
  const events = useSelector(({ events }) => events);
  const error = useSelector(({ error }) => error);
  const [filteredEvents, setFilteredEvents] = useState(null); // too slow for page to render /explore
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [loading, setLoading] = useState(true);
  //console.log("event", events);
  //console.log("filtered", filteredEvents);
  useEffect((props) => {
    setLoading(false);

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterCategory = (category) => {
    setFilteredEvents(events.filter((evt) => evt.category === category));
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
          <EventList events={filteredEvents === null ? events : filteredEvents} />
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
