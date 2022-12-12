import React, { useState, useEffect } from "react";

// mui
import { Paper, Typography, TextField, Button, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

//redux
import { useDispatch, useSelector } from "react-redux";

//child component
import { connect } from "react-redux";
import { createEvent } from "../../store/events";
import Places_autocomplete from "../helperComponents/Places_autocomplete";
import locations from "../../../script/locations";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

let eventInput;
let setEventInput;

const PostEvent = ({ handleSubmit }) => {
  const googleData = useSelector(({ googleData }) => googleData);
  // const [returnedData, setReturnedData] = useState(null);
  const [selectedCategory, setCategory] = useState("Arts & Theatre");
  [eventInput, setEventInput] = useState({
    name: "",
    start: new Date(),
    end: new Date(),
    category: "Arts & Theatre",
    images: "",
    imageUrl: "",
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
    // setReturnedData(googleData);
    if (googleData.formatted_address) {
      const [venueCity, stateCodeZipCode, venueCountry] = googleData.formatted_address
        .split(", ")
        .slice(-3);
      const [venueStateCode, venuePostCode] = stateCodeZipCode.split(" ");
      const venueState = locations.find((stateObj) => stateObj.stateCode === venueStateCode).state;
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
    setEventInput({ ...eventInput, [e.target.name]: e.target.value });
    console.log(eventInput);
  };

  const handleStartDate = (newValue) => {
    setEventInput({ ...eventInput, start: newValue });
  };

  const handleEndDate = (newValue) => {
    setEventInput({ ...eventInput, end: newValue });
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
    setEventInput({ ...eventInput, category: e.target.value });
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
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Box
                    sx={{
                      width: { xxs: "95%", md: "60%", lg: "50%" },
                      margin: "0 auto",
                    }}
                  >
                    <DateTimePicker
                      label="Start Date and Time"
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
                    <DateTimePicker
                      label="End Date and Time"
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
                <Select
                  labelId="demo-select-small"
                  id="outlined-password-input"
                  variant="outlined"
                  type="text"
                  value={selectedCategory}
                  color="pink"
                  onChange={handleChange}
                  name="category"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                  }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"Arts & Theatre"}>Arts & Theatre</MenuItem>
                  <MenuItem value={"Film"}>Film</MenuItem>
                  <MenuItem value={"Music"}>Music</MenuItem>
                  <MenuItem value={"Sports"}>Sports</MenuItem>
                </Select>
                <br />
                <TextField
                  id="outlined-basic"
                  label="Event Image Url"
                  variant="outlined"
                  name="imageUrl"
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
                <br />
                <TextField
                  id="outlined-basic"
                  label="Ticket Price"
                  variant="outlined"
                  name="price"
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
                <br />
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
                  Create Event
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

const mapState = (state, otherProps) => {
  console.log(otherProps);
  console.log(state);
  return {
    state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(e) {
      e.preventDefault();
      dispatch(createEvent(eventInput));
    },
  };
};

export default connect(mapState, mapDispatch)(PostEvent);
