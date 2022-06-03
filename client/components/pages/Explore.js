import React, { useEffect } from "react";

// router
import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events";

//MUI
import { Box, Grid, Paper, Button, Alert } from "@mui/material";

// child components
import SearchBar from "../helperComponents/SearchBar";
import EventList from "../helperComponents/EventList";

const Explore = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  if (events[0] === undefined) {
    dispatch(getEvents());
  }

  // error handler
  const error = JSON.parse(window.localStorage.getItem("error"));
  const pageNotFoundError = error ? error.output : null;

  useEffect(() => {
    window.localStorage.removeItem("error");
  }, []);

  console.log("evnets are", events);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ margin: { xxs: "60px auto 0 auto", xs: "69px auto 0 auto" }, width: "90%" }}
    >
      <Grid item md={2} sx={{ width: "100%", height: "500px" }}>
        <SearchBar />
      </Grid>
      <Grid item md={6} sx={{ width: "100%", height: "500px" }}>
        {pageNotFoundError ? <Alert severity="error">{pageNotFoundError}</Alert> : <></>}
        <EventList events={events} />
      </Grid>
      <Grid item md={4} sx={{ width: "100%", height: "500px" }}>
        Map
      </Grid>
    </Grid>
  );
};

export default Explore;

// do not erase below cmnt. Keep for reference.
// const userLocation = JSON.parse(window.localStorage.getItem("userLocation"));
// const location = userLocation ? userLocation : "New York";
// const userSearchedEvents = useSelector((state) => state.events.filter((event) => event.venueCity === location));
