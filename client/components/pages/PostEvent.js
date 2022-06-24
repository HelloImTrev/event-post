import React, { useState, useEffect } from "react";

// mui
import {
  Paper,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { Box } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

//redux
import { useDispatch, useSelector } from "react-redux";

//child component
import React, { useState } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/events";
import Places_autocomplete from "../helperComponents/Places_autocomplete";
import locations from "../../../script/locations";

const PostEvent = ({ handleSubmit }) => {
  const googleData = useSelector(({ googleData }) => googleData);
  const [returnedData, setReturnedData] = useState(null);
  const [eventInput, setEventInput] = useState({
    name: "",
    start: new Date(),
    end: new Date(),
    category: "",
    images: "",
    description: "",
    venueName: "",
    venueLocale: "en-us",
    venuePostCode: 0,
    venueCity: "",
    venueState: "",
    venueStateCode: "",
    venueCountry: "",
    venueCountryCode: "US",
    venueAddress: "",
    venueLongitude: "",
    venueLatitude: "",
    price: 0,
  });

  useEffect(() => {
    setReturnedData(googleData);
    if (googleData.formatted_address) {
      const [venueCity, stateCodeZipCode, venueCountry] =
        googleData.formatted_address.split(", ").slice(-3);
      const [venueStateCode, venuePostCode] = stateCodeZipCode.split(" ");
      const venueState = locations.find(
        (stateObj) => stateObj.stateCode === venueStateCode
      ).state;
      setEventInput({
        ...eventInput,
        venueName: googleData.name,
        venuePostCode,
        venueCity,
        venueState,
        venueStateCode,
        venueCountry,
        venueAddress: googleData.vicinity,
        venueLatitude: googleData.geometry.location.lat,
        venueLongitude: googleData.geometry.location.lng,
      });
    }
  }, [googleData]);

  const handleInputFields = (e) => {
    //console.log(e);
    setEventInput({ ...eventInput, [e.target.name]: e.target.value });
  };

  const handleStartDate = (newValue) => {
    setEventInput({ ...eventInput, start: newValue });
  };

  const handleEndDate = (newValue) => {
    setEventInput({ ...eventInput, end: newValue });
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          top: 20,
          zIndex: -1,
          background: "#e7e1ee",
          height: "75vh",
          width: "100%",
        }}
      />

      <Paper
        elevation={2}
        sx={{
          maxWidth: "1350px",
          marginTop: "95px",
          marginBottom: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
        }}
      >
        <Box>
          <Box textAlign="center">
            <Typography
              variant="promptTitle"
              sx={{
                marginLeft: "auto",
                marginRight: " auto",
                borderBottom: "3px solid #D83F87",
                fontWeight: 700,
                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "30px",
                },
              }}
            >
              Lets get the party started!
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
            <Box>
              <form onSubmit={handleSubmit} name="event">
                <br />
                <Typography variant="promptTitle" sx={{ fontSize: "20px" }}>
                  Event Name
                </Typography>
                <br />
                <TextField
                  id="outlined-basic"
                  label="Event Name"
                  variant="outlined"
                  name="name"
                  type="text"
                  color="pink"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                  }}
                  onChange={handleInputFields}
                />
                <Places_autocomplete />
                <br />
                <Typography variant="promptTitle" sx={{ fontSize: "20px" }}>
                  Event Date
                </Typography>
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Box
                    sx={{
                      width: { xxs: "95%", md: "60%", lg: "50%" },
                      margin: "0 auto",
                    }}
                  >
                    <DesktopDatePicker
                      label="Start Date"
                      inputFormat="MM/dd/yyyy"
                      name="start"
                      value={eventInput.start}
                      onChange={handleStartDate}
                      renderInput={(params) => {
                        return (
                          <TextField
                            {...params}
                            color="pink"
                            sx={{
                              width: "100%",
                              marginTop: "1vw",
                            }}
                          />
                        );
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      width: { xxs: "95%", md: "60%", lg: "50%" },
                      margin: "0 auto",
                    }}
                  >
                    <DesktopDatePicker
                      label="End Date"
                      inputFormat="MM/dd/yyyy"
                      name="end"
                      value={eventInput.end}
                      onChange={handleEndDate}
                      renderInput={(params) => {
                        return (
                          <TextField
                            {...params}
                            color="pink"
                            sx={{
                              width: "100%",
                              marginTop: "1vw",
                            }}
                          />
                        );
                      }}
                    />
                  </Box>
                </LocalizationProvider>
                <br />
                <Typography variant="promptTitle" sx={{ fontSize: "20px" }}>
                  Event Description
                </Typography>
                <br />
                <Box
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                    margin: "0 auto",
                  }}
                >
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Descriptions about your event."
                    name="description"
                    style={{ width: "100%" }}
                    color="pink"
                    onChange={handleInputFields}
                  />
                </Box>
                <br />
                <Button
                  type="submit"
                  color="pink"
                  variant="contained"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                    fontSize: {
                      xxs: "15px",
                      sm: "18px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  Post Event
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

const mapState = (state) => {
  return {
    state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(e) {
      e.preventDefault();
      const name = e.target.name.value;
      const description = e.target.description.value;
      const category = e.target.category.value;
      const venueName = e.target.venueName.value;

      console.log(name, description, category, venueName);
      dispatch(createEvent(name, description, category, venueName));
    },
  };
};

export default connect(mapState, mapDispatch)(PostEvent);
