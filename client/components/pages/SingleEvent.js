import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
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

  if (event) {
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
            image={event.images[0].url}
            sx={{ width: { mdLg: "840px", xxs: "100%" }, height: "472px" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: { mdLg: "528px", xxs: "100%" },
              backgroundColor: "#ececec",
            }}
          >
            <Box>
              <Typography fontFamily="Roboto" fontWeight="400" fontSize="25px">
                {event.name}
              </Typography>
              <Typography>*Location here*</Typography>
              <Typography>*Date and time here*</Typography>
              <Typography>Organizer: *Username here*</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
              <Button
                variant="contained"
                color="pink"
                sx={{ width: "200px" }}
                disableElevation
              >
                Get Tickets
              </Button>
              <Box>
                <IconButton color="lightPurple" sx={{ marginRight: ".5rem" }}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton color="lightPurple">
                  <IosShareIcon />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  } else {
    return (
      <Box>
        <h1>loading...</h1>
      </Box>
    );
  }
};

export default SingleEvent;
