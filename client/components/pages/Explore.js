import React, { useEffect, useState } from "react";
import history from "../../history";

// router
import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events";

//MUI
import { Box, Grid, Paper, Button, Alert, CircularProgress, Divider, Typography } from "@mui/material";

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
  const error = useSelector(({ error }) => error);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [loading, setLoading] = useState(true);

  let categories = ["Sports", "Music"];
  let filter = match.params.filter;
  if (filter) filter = JSON.parse(filter);
  filter = filter || {};

  const events = useSelector(({ events }) => {
    if (filter.sort && filter.sort === "price_low") events.sort((a, b) => a.price - b.price);
    if (filter.sort && filter.sort === "price_high") events.sort((a, b) => b.price - a.price);
    return events.filter((evt) => {
      return !filter.category || filter.category === evt.category;
    });
  });

  useEffect(() => {
    setLoading(false);

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterCategory = (query) => {
    if (query === "category_null") delete filter["category"];
    if (query === "price_null") delete filter["sort"];
    if (categories.includes(query)) filter["category"] = query;
    if (query === "price_low" || query === "price_high") filter["sort"] = query;

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
        sx={{
          margin: { xxs: "60px auto 0 auto", xs: "69px auto 0 auto" },
          width: "90%",
          paddingTop: "10px",
        }}
      >
        <Grid item md={2} sx={{ width: "100%" }}>
          <SearchBar filterCategory={filterCategory} windowDimensions={windowDimensions} match={match} filter={filter} />
        </Grid>
        <Grid item md={6} sx={{ width: "100%" }}>
          <Typography
            variant="promptTitle"
            sx={{
              borderBottom: "3px solid #D83F87",
              fontWeight: 700,
              fontSize: {
                xs: "25px",
                sm: "30px",
                md: "30px",
              },
              margin: "8px 16px",
            }}
          >
            Search Results
          </Typography>
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

// const address = window.location.href.split("/");
// if (address.length > 2) {
//   history.push(`/explore/sort/${address[address.length - 1]}`);
// } else {
//   history.push(`/explore`);
// }

// if (category.length === 0) {
//   filter = {};
// } else {
//   filter["category"] = category;
// }
// history.push(`/explore/filter/${JSON.stringify(filter)}`);
