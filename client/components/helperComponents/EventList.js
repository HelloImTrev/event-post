import React, { useState, useEffect } from "react";

// router
import { Link } from "react-router-dom";

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
import IosShareIcon from "@mui/icons-material/IosShare";

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
                <CardActionArea component={Link} to={`/events/${event.id}`}>
                  <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item xxs={12} sm={4} md={4}>
                      <CardMedia component="img" sx={{ width: "100%" }} image={event.images[0].url} />
                    </Grid>
                    <Grid item xxs={12} sm={8} md={8}>
                      <CardContent>
                        <Typography variant="cardTitle" marginBottom="1rem" component="div">
                          {event.name}
                        </Typography>
                        <Typography variant="cardDate" component="div" marginBottom=".3rem">
                          {`Event starts ${getDate(event)}`}
                        </Typography>
                        <Typography variant="cardLocation">{`${event.venueName} - ${event.venueCity}, ${event.venueStateCode}`}</Typography>
                        <br />
                        <Typography variant="cardLocation">{`Ticket price: $${event.price}`}</Typography>
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
                          <IconButton color="lightPurple">
                            <FavoriteIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </CardActionArea>
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
