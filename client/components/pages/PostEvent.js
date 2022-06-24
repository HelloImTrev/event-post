import { Paper, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";

const PostEvent = () => {
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
    setEventInput({ ...eventInput, [e.target.name]: e.target.value });
  };

  console.log(eventInput);

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
              <form onSubmit={console.log("Event Posted")} name="event">
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
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    name="start"
                    onChange={handleInputFields}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DesktopDatePicker
                    label="End Date"
                    inputFormat="MM/dd/yyyy"
                    name="start"
                    onChange={handleInputFields}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <br />

                <TextField
                  id="outlined-password-input"
                  label="Description"
                  variant="outlined"
                  name="description"
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
                  id="outlined-password-input"
                  label="Place Holder"
                  variant="outlined"
                  name="placeHolder"
                  type="text"
                  color="pink"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                  }}
                />
                <br />
                <TextField
                  id="outlined-password-input"
                  label="Place Holder"
                  variant="outlined"
                  name="placeHolder"
                  type="text"
                  color="pink"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                  }}
                />
                <br />
                <TextField
                  id="outlined-password-input"
                  label="Place Holder"
                  variant="outlined"
                  name="placeHolder"
                  type="text"
                  color="pink"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                  }}
                />
                <br />
                <TextField
                  id="outlined-password-input"
                  label="Place Holder"
                  variant="outlined"
                  name="placeHolder"
                  type="text"
                  color="pink"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                  }}
                />
                <br />
                <TextField
                  id="outlined-password-input"
                  label="Place Holder"
                  variant="outlined"
                  name="placeHolder"
                  type="text"
                  color="pink"
                  sx={{
                    width: {
                      xxs: "95%",
                      md: "60%",
                      lg: "50%",
                    },
                  }}
                />
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

export default PostEvent;
