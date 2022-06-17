import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "./EventCard";
import { getEvents } from "../../store/events";

const HomepageEvents = () => {
  const dispatch = useDispatch();
  const location = useSelector(({ userLocation }) => (userLocation.state ? userLocation.state : "New York"));
  const events = useSelector((state) => state.events);
  const sports = events.filter((evt) => evt.category === "Sports" && evt.venueState === location).splice(0, 4);
  const music = events.filter((evt) => evt.category === "Music" && evt.venueState === location).splice(0, 4);
  const film = events.filter((evt) => evt.category === "Film" && evt.venueState === location).splice(0, 4);
  const art = events.filter((evt) => evt.category === "Arts & Theatre" && evt.venueState === location).splice(0, 4);

  const subscribedEvents = useSelector((state) => state.eventSubscription);
  const subscribedEventIds = subscribedEvents.map((event) => event.eventId);
  //const events = useSelector((state) => state.events.filter((event) => event.venueCity === location));

  useEffect(() => {
    dispatch(getEvents());
    // dispatch(loadSubscribedEvents());
  }, []);

  if (events) {
    return (
      <Box sx={{ margin: "1.5rem 1rem 1rem 1rem" }}>
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
            Things to do in, <Box sx={{ display: "inline-block", color: "#d83f87" }}>{location ? location : "New York"}</Box>
          </Typography>
        </Box>
        <Box sx={{ margin: "1rem" }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={{ xxs: 2, md: 3 }}>
            <Grid item xxs={12} sx={{ width: "100%" }}>
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
                Sports
              </Typography>
            </Grid>
            {sports.map((event) => {
              return <EventCard key={event.id} event={event} subscribed={subscribedEventIds.includes(event.id) ? true : false} />;
            })}
            <Grid item xxs={12} sx={{ width: "100%" }}>
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
                Music
              </Typography>
            </Grid>
            {music.map((event) => {
              return <EventCard key={event.id} event={event} subscribed={subscribedEventIds.includes(event.id) ? true : false} />;
            })}
            <Grid item xxs={12} sx={{ width: "100%" }}>
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
                Film
              </Typography>
            </Grid>
            {film.map((event) => {
              return <EventCard key={event.id} event={event} subscribed={subscribedEventIds.includes(event.id) ? true : false} />;
            })}
            <Grid item xxs={12} sx={{ width: "100%" }}>
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
                Art & Theatre
              </Typography>
            </Grid>
            {art.map((event) => {
              return <EventCard key={event.id} event={event} subscribed={subscribedEventIds.includes(event.id) ? true : false} />;
            })}
          </Grid>
        </Box>
        {/* <Box sx={{ margin: "1rem" }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={{ xxs: 2, md: 3 }}>
            {events.map((event) => {
              return <EventCard key={event.id} event={event} subscribed={subscribedEventIds.includes(event.id) ? true : false} />;
            })}
          </Grid>
        </Box> */}
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
