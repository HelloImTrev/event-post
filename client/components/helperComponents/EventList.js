import React, { useState, useEffect } from "react";

// router
import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events";

//MUI
import {
  Box,
  Grid,
  Paper,
  Button,
  ListSubheader,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const EventList = ({ events }) => {
  const getDate = (event) => {
    const date = new Date(event.start);
    const formatedDate =
      (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear();
    return formatedDate;
  };

  return (
    <List sx={{ width: "100%" }} component="nav" aria-labelledby="exlore event list">
      {events.map((event) => {
        return (
          <ListItem disablePadding key={event.id}>
            <ListItemButton>
              <Card>
                <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                  <Grid item xxs={4}>
                    <CardMedia component="img" sx={{ width: "100%" }} image={event.images[0].url} />
                  </Grid>
                  <Grid item xxs={8}>
                    <CardContent>
                      <Typography variant="cardTitle" marginBottom="1rem" component="div">
                        {event.name}
                      </Typography>
                      <Typography variant="cardDate" component="div" marginBottom=".3rem">
                        {`Event starts ${getDate(event)}`}
                      </Typography>
                      <Typography variant="cardLocation">{`${event.venueName} - ${event.venueCity}, ${event.venueStateCode}`}</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default EventList;

// event = { event };
