import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({event}) => {
  const date = new Date(event.start)
  const formatedDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();

  return (
    <Grid item xs={3} sm={4} md={3} marginBottom="1rem">
      <Card sx={{ maxWidth: 305, height: "350px"}}>
        <CardMedia component="img" sx={{width: "100%", height: "205px"}} image={event.images[0].url}/>
        <CardContent>
          <Typography variant="cardTitle" marginBottom="1rem" component="div" >
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </Typography>
          <Typography variant="cardDate" component="div" marginBottom=".3rem">
            {`Event starts ${formatedDate}`}
          </Typography>
          <Typography variant="cardLocation">
            {`${event.venueName} - ${event.venueCity}, ${event.venueStateCode}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventCard;
