import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Skeleton,
  Typography,
  Box,
  Grid,
} from "@mui/material";
//import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { formatDate, formatAddress, dayOfWeek, getMonth } from "../helperFunctions/dateFormat";

import { subscribeToEvent, unsubscribeFromEvent } from "../../store/eventSubscription";

const SingleEvent = (props) => {
  const history = useHistory();
  const event = useSelector(({ events }) =>
    events.find((event) => event.id === props.match.params.id * 1)
  );
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
  // if (event && purchased) {}
  if (event) {
    const start = new Date(event.start);
    const formatedDate = formatDate(start);
    const formatedAddress = formatAddress(event);
    const startWeekDay = dayOfWeek(start);
    const startMonth = getMonth(start);
    const startDate = start.getDate();

    return (
      <div id="single-event-page">
        <Paper
          elevation={2}
          sx={{
            maxWidth: "1350px",
            marginTop: {
              xxs: "70px",
              md: "85px",
            },
            marginBottom: "2rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box id="single-event-container">
            <Card
              elevation={0}
              sx={{
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderBottom: "1px solid #eaeaea",
                width: "100%",
              }}
            >
              <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item xxs={12} md={7}>
                  <div>
                    <img
                      src={event.images
                        ? event.images[0].url
                        : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png"}
                      style={{
                        width: "100%",
                        minHeight: "220px",
                        maxHeight: "500px",
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xxs={12} md={5}>
                  <CardContent>
                    <Box>
                      <Typography fontFamily="Roboto" fontWeight="400" fontSize="25px">
                        {event.name}
                      </Typography>

                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography fontSize="20px">
                          <CalendarMonthIcon />
                        </Typography>
                        <Typography fontSize="20px" sx={{ marginLeft: ".3rem" }}>
                          {startWeekDay}, {startMonth.month} {startDate}
                        </Typography>
                      </Box>
                      <Box sx={{ marginTop: ".5rem" }}>
                        <Typography>{`${event.venueName}`}</Typography>
                        <Typography>{`${event.venueCity}, ${event.venueStateCode}`}</Typography>
                      </Box>
                      <Box sx={{ marginTop: "3rem" }}>
                        <Typography>Organizer: Grace Admin</Typography>
                      </Box>
                    </Box>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={1}
                      sx={{ marginTop: { xxs: "10px", md: "25%", smLg: "220px" } }}
                    >
                      <Grid item xxs={12} xs={6}>
                        <Button
                          variant="contained"
                          color="pink"
                          sx={{ width: "200px" }}
                          disableElevation
                          onClick={() => {
                            user.username
                              ? history.push(`/gettickets/${event.id}`)
                              : history.push("/login");
                          }}
                        >
                          Get Tickets
                        </Button>
                      </Grid>
                      <Grid item xxs={12} xs={6}>
                        <Box
                          sx={{
                            float: {
                              xxs: "none",
                              xs: "right",
                            },
                          }}
                        >
                          <IconButton
                            color="lightPurple"
                            sx={{ marginRight: ".5rem" }}
                            onClick={() => heartEvent(event)}
                          >
                            {subscribedEventIds.includes(event.id) ? (
                              <FavoriteIcon style={{ color: "ff0000" }} />
                            ) : (
                              <FavoriteBorderIcon color="lightPurple" />
                            )}
                          </IconButton>
                          <IconButton color="lightPurple" onClick={() => shareEvent(event)}>
                            <IosShareIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
              <Grid
                item
                xxs={12}
                md={5}
                sx={{
                  padding: {
                    xxs: "20px 20px",
                    md: "20px 20px",
                  },
                  display: {
                    xxs: "block",
                    md: "none",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="promptTitle"
                    sx={{
                      borderBottom: "3px solid #D83F87",
                      alignSelf: "flex-start",
                      fontWeight: 700,
                      fontSize: {
                        xs: "25px",
                        sm: "30px",
                        md: "30px",
                      },
                    }}
                  >
                    Address
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginTop: "1.5rem" }}>
                  <Box>
                    <Typography>
                      <LocationOnIcon />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      {event.venueAddress}
                      <br />
                      {event.venueCity}, {event.venueStateCode}, {event.venuePostCode}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "1rem", marginRight: ".5rem" }}>
                  <iframe
                    width="100%"
                    height="250"
                    frameBorder="0"
                    style={{ border: "0" }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCDowwJ-MLTiSqk1wBu0EsaJ9Ch2dEgYfI&q=${formatedAddress}`}
                    allowFullScreen
                  />
                </Box>
                <Box sx={{ marginTop: "1.5rem" }}>
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
                    }}
                  >
                    Date and time
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
                  <Typography>{formatedDate}</Typography>
                  <Typography>{start.toLocaleTimeString("en-US")}</Typography>
                </Box>
              </Grid>
              <Grid item xxs={12} md={7} sx={{ padding: "0px 20px" }}>
                <Box>
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
                    }}
                  >
                    The Deets
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                    paddingRight: {
                      xxs: "0",
                      sm: "3rem",
                    },
                  }}
                >
                  <Typography>{event.description}</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xxs={12}
                md={5}
                sx={{
                  padding: {
                    xxs: "0 20px",
                    md: "20px 20px",
                  },
                  display: {
                    xxs: "none",
                    md: "block",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="promptTitle"
                    sx={{
                      borderBottom: "3px solid #D83F87",
                      alignSelf: "flex-start",
                      fontWeight: 700,
                      fontSize: {
                        xs: "25px",
                        sm: "30px",
                        md: "30px",
                      },
                    }}
                  >
                    Address
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginTop: "1.5rem" }}>
                  <Box>
                    <Typography>
                      <LocationOnIcon />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      {event.venueAddress}
                      <br />
                      {event.venueCity}, {event.venueStateCode}, {event.venuePostCode}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "1rem", marginRight: ".5rem" }}>
                  <iframe
                    width="100%"
                    height="250"
                    frameBorder="0"
                    style={{ border: "0" }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCDowwJ-MLTiSqk1wBu0EsaJ9Ch2dEgYfI&q=${formatedAddress}`}
                    allowFullScreen
                  />
                </Box>
                <Box sx={{ marginTop: "1.5rem" }}>
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
                    }}
                  >
                    Date and time
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
                  <Typography>{formatedDate}</Typography>
                  <Typography>{start.toLocaleTimeString("en-US")}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </div>
    );
  } else {
    return (
      <Box
        id="single-event-container"
        sx={{
          marginTop: "76px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { mdLg: "row", xxs: "column" },
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { mdLg: "840px", xxs: "100%" }, height: "472px" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { mdLg: "528px", xxs: "100%" },
              backgroundColor: "#ececec",
            }}
          >
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </CardContent>
        </Card>
      </Box>
    );
  }
};

export default SingleEvent;
