import { Paper, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";

// child component
import Places_autocomplete from "../helperComponents/Places_autocomplete";

const PostEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [eventInput, setEventInput] = useState({
    name: "",
    start: "",
    end: "",
    category: "",
    images: "",
    description: "",
    venueName: "",
  });

  const handleInputFields = (e) => {
    console.log(e);
    setEventInput({ ...eventInput, [e.target.name]: e.target.value });
  };

  const handleStartDate = (newValue) => {
    const start = {
      target: {
        name: "start",
        value: newValue,
      },
    };

    setStartDate(newValue);
    handleInputFields(start);
  };

  const handleEndDate = (newValue) => {
    const end = {
      target: {
        name: "end",
        value: newValue,
      },
    };

    setEndDate(newValue);
    handleInputFields(end);
  };

  console.log(eventInput);

  return (
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
        <Box sx={{ marginLeft: "2rem", marginTop: "1rem" }}>
          <Box>
            <TextField
              id="outlined-basic"
              label="Event Name*"
              variant="outlined"
              name="eventName"
              type="text"
              color="pink"
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
            />
            <Places_autocomplete />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default PostEvent;
