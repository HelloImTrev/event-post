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
  const dispatch = useDispatch();
  const events = useSelector(({ events }) => events);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    dispatch(getEvents());
    setLoading(false);
    window.localStorage.removeItem("error");
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterCategory = (category) => {
    setFilteredEvents(events.filter((evt) => evt.category === category));
  };

  // error handler
  const error = JSON.parse(window.localStorage.getItem("error"));
  const pageNotFoundError = error ? error.output : null;

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
          {pageNotFoundError ? <Alert severity="error">{pageNotFoundError}</Alert> : <></>}
          <EventList events={filteredEvents} />
        </Grid>
        <Grid item md={4} sx={{ width: "100%" }}>
          Map
        </Grid>
      </Grid>
    );
  }
};

export default Explore;

// do not erase below cmnt. Keep for reference.
// const userLocation = JSON.parse(window.localStorage.getItem("userLocation"));
// const location = userLocation ? userLocation : "New York";
// const userSearchedEvents = useSelector((state) => state.events.filter((event) => event.venueCity === location));

// const [category, setCategory] = useState("");
// const dispatch = useDispatch();
// useEffect(() => {
//   window.localStorage.removeItem("error");
// }, []);
// let events = useSelector((state) => state.events);

// if (events[0] === undefined) {
//   dispatch(getEvents());
// }

// // error handler
// const error = JSON.parse(window.localStorage.getItem("error"));
// const pageNotFoundError = error ? error.output : null;

// useEffect(() => {
//   window.localStorage.removeItem("error");
// }, []);

// const filterCategory = (category) => {
//   // console.log("enteredddd cat", category);
//   events = useSelector(({ events }) => events.filter((evt) => evt.category === category));
// };
