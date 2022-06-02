import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../store";

const SingleEvent = (props) => {
  const event = useSelector(({ events }) =>
    events.find((event) => event.id === props.match.params.id * 1)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  console.log(event);

  if (event){
    return (
      <Box id="single-event-container" sx={{marginTop: "76px"}}>
        <Card sx={{display: "flex", flexDirection: {mdLg: "row", xxs: "column"}, width: "100%"}}>
            <CardMedia component="img" image={event.images[0].url} sx={{width: {mdLg: "840px", xxs: "100%"}, height: "472px"}} />
            <CardContent sx={{width: {mdLg: "528px", xxs: "100%"}}}>
              <Typography variant="cardTitle">
                  {event.name}
              </Typography>
            </CardContent>
        </Card>
      </Box>
      );
  } else {
    return(
      <Box>
        <h1>loading...</h1>
      </Box>
      );
  }

};

export default SingleEvent;
