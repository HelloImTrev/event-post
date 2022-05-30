import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";

const EventCard = (event) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 200 }}>
        <CardContent>
          <h3>{event.name}</h3>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventCard;
