import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Skeleton,
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
    const date = new Date(event.start);
    const formatedDate =
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear();

    return (
      <div id="single-event-page">
        <Paper
          elevation={2}
          sx={{
            maxWidth: "1350px",
            marginTop: "95px",
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
                  width: { mdLg: "100%", xxs: "100%" },
                }}
              >
                <Box>
                  <Typography
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize="25px"
                  >
                    {event.name}
                  </Typography>
                  <Typography>{`${event.venueName}`}</Typography>
                  <Typography>{`${event.venueCity} - ${event.venueStateCode}`}</Typography>
                  <Typography>{formatedDate}</Typography>
                  <Typography>Organizer: *Username here*</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1.5rem",
                  }}
                >
                  <Button
                    variant="contained"
                    color="pink"
                    sx={{ width: "200px" }}
                    disableElevation
                  >
                    Get Tickets
                  </Button>
                  <Box>
                    <IconButton
                      color="lightPurple"
                      sx={{ marginRight: ".5rem" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton color="lightPurple">
                      <IosShareIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Box sx={{ display: "flex", marginTop: "1.5rem" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "65%",
                  marginLeft: "1.5rem",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  <Box sx={{marginTop: "1.5rem", marginBottom: "1.5rem", paddingRight: "3rem"}}>
                    <Typography>{event.description}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "35%" }}
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
                    Date and time
                  </Typography>
                </Box>
              </Box>
            </Box>
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
