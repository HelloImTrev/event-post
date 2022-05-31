import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events";
import EventCard from "./EventCard";

const HomepageEvents = ({location = "New York"}) => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  console.log(events);

  if (events) {
    return (
      <Box margin="1rem">
        <Box>
          <Typography
            variant="promptTitle"
            sx={{
              fontSize: {
                xxs: "15px",
                xs: "19px",
                sm: "30px",
                md: "35px",
              },
            }}
          >
            {`Things to do in, ${location}`}
          </Typography>
        </Box>
        <Box sx={{margin: "1rem"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"0 2rem"}}>
          {events.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </Grid>
        </Box>
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
