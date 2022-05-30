import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events";
import EventCard from "./EventCard";

const HomepageEvents = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  console.log(events);

  if (events) {
    return (
      <Box>
        <Box>
          <h1>Tester</h1>
        </Box>
        {/* <Grid container spacing={3} sx={{ padding: "2rem" }}>
          {events.map((event) => {
            return <EventCard event={event} />;
          })}
        </Grid> */}
      </Box>
    );
  } else {
    return (
      <Box>
        <h1>Loading...</h1>
      </Box>
    );
  }
};

export default HomepageEvents;
