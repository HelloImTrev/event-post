import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { subscribeToEvent } from "../../store/eventSubscription";

const EventCard = ({ event, isLoggedIn }) => {
  let heartNotClicked = true
  let history = useHistory();
  const dispatch = useDispatch();

  const subscribe = () => {
    heartNotClicked = false
    return dispatch(subscribeToEvent(event.id))
  }

  const heartEvent = () =>
    isLoggedIn ? subscribe() : history.push("/login");
  const date = new Date(event.start);
  const formatedDate =
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear();

  return (
    <Grid item xxs={12} xs={12} sm={6} md={4} lg={3} sx={{ width: "100%" }}>
      <Card
        id="event-card"
        sx={{ maxWidth: 405, height: "385px", margin: "0 auto" }}
      >
        <CardMedia
          id="event-card-img"
          component="img"
          sx={{ width: "100%", height: "205px" }}
          image={event.images[0].url}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="cardTitle" marginBottom="1rem" component="div">
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </Typography>
          <Typography variant="cardDate" component="div" marginBottom=".3rem">
            {`Event starts ${formatedDate}`}
          </Typography>
          <Typography variant="cardLocation">
            {`${event.venueName} - ${event.venueCity}, ${event.venueStateCode}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: ".5rem",
            }}
          >
            <IconButton color="lightPurple" sx={{ marginRight: ".5rem" }}>
              <IosShareIcon />
            </IconButton>
            <IconButton color={"lightPurple"} onClick={heartEvent}>
              <FavoriteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState)(EventCard);
