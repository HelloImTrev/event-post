import React, { useState, useEffect } from "react";

// router
import { Link, useHistory } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { subscribeToEvent, unsubscribeFromEvent } from "../../store/eventSubscription";

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
  CardActionArea,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";

const EventList = ({ events }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  //subscription
  const user = useSelector(({ auth }) => auth);
  const subscribedEvents = useSelector((state) => state.eventSubscription);
  const subscribedEventIds = subscribedEvents.map((event) => event.eventId);
  const subscribeOrUnsubscribe = (event) => {
    subscribedEventIds.includes(event.id)
      ? dispatch(unsubscribeFromEvent(event.id))
      : dispatch(subscribeToEvent(event.id));
  };

  const heartEvent = (event) =>
    user.username ? subscribeOrUnsubscribe(event) : history.push("/login");

  const shareEvent = (event) => {
    window.open(
      `mailto:?subject=Check out this event!&body=${event.name}%0A${new Date(event.start)}%0A${
        event.venueName
      }%0A${event.venueCity}%0A${
        event.venueState
      }%0A${`https://event-post.herokuapp.com/events/${event.id}`}`
    );
  };

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
      {events.map((event, i) => {
        return (
          <ListItem disablePadding key={event.id}>
            <ListItemButton>
              <Card>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                  <Grid item xxs={12} sm={4} md={4}>
                    <CardActionArea component={Link} to={`/events/${event.id}`}>
                      <CardMedia
                        component="img"
                        sx={{ width: "100%" }}
                        image={event.images[0].url}
                      />
                    </CardActionArea>
                  </Grid>
                  <Grid item xxs={12} sm={8} md={8}>
                    <CardContent>
                      <CardActionArea component={Link} to={`/events/${event.id}`}>
                        <Typography variant="cardTitle" marginBottom="1rem" component="div">
                          {i + 1}. {event.name}
                        </Typography>
                        <Typography variant="cardDate" component="div" marginBottom=".3rem">
                          {`Event starts ${getDate(event)}`}
                        </Typography>
                        <Typography variant="cardLocation">{`${event.venueName} - ${event.venueCity}, ${event.venueStateCode}`}</Typography>
                        <br />
                        <Typography variant="cardLocation">{`Ticket price: $${event.price}`}</Typography>
                      </CardActionArea>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: ".5rem",
                        }}
                      >
                        <IconButton
                          color="lightPurple"
                          sx={{ marginRight: ".5rem" }}
                          onClick={() => shareEvent(event)}
                        >
                          <IosShareIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            heartEvent(event);
                          }}
                        >
                          {subscribedEventIds.includes(event.id) ? (
                            <FavoriteIcon style={{ color: "ff0000" }} />
                          ) : (
                            <FavoriteBorderIcon color="lightPurple" />
                          )}
                        </IconButton>
                      </Box>
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
