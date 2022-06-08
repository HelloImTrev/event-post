import React, { useEffect, useState } from "react";
import axios from "axios";

// Redux
import { connect, useDispatch, useSelector } from "react-redux";
import { searchKeyword } from "../../store/events";

//MUI
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// child component
import Slides from "../helperComponents/Slides";
import HomepageEvents from "../helperComponents/HomepageEvents";

export const Home = (props) => {
  const { username } = props;
  const dispatch = useDispatch();
  let location = {};

  // For search bar
  const [searchObj, setSearchObj] = useState({ name: "", location: location.city ? location.city : "New York", date: new Date() });

  // For geolocation of user
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation();
    const today = new Date();
    setSearchObj({ ...searchObj, date: today });
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setError(null);
          location["latitude"] = position.coords.latitude;
          location["longitude"] = position.coords.longitude;

          const data = (
            await axios.get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`
            )
          ).data;

          setSearchObj({ ...searchObj, location: data.city });
          location["city"] = data.city;
          window.localStorage.setItem("userLocation", JSON.stringify(location));
        },
        () => {
          window.localStorage.removeItem("userLocation");
          setError("Unable to retrieve your location.");
        }
      );
    }
  };

  // For searchbar
  const handleChange = async (e) => {
    setSearchObj({ ...searchObj, [e.target.name]: e.target.value });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(searchKeyword(searchObj));
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: {
            xxs: "350px",
            xs: "400px",
            sm: "500px",
            md: "600px",
          },
        }}
      >
        <Slides />
        <Box
          sx={{
            zIndex: "1",
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "absolute",
            top: { xxs: "75px", xs: "100px", sm: "125px", md: "150px" },
          }}
        >
          <Typography
            variant="promptMainTitle"
            sx={{
              fontSize: {
                xxs: "20px",
                xs: "27px",
                sm: "50px",
                md: "60px",
              },
              display: "block",
              marginBottom: {
                xxs: "0",
                xs: "10px",
              },
            }}
          >
            Lets do something!
          </Typography>
          <TextField
            id="filled-basic"
            label="Search events"
            variant="filled"
            name="name"
            type="search"
            color="pink"
            value={searchObj.name}
            onChange={handleChange}
            onKeyDown={handleEnter}
            sx={{
              width: {
                xxs: "235px",
                xs: "80%",
                sm: "450px",
              },
              borderRadius: "20px",
              input: {
                background: "#ebeced",
              },
            }}
          />
          <br style={{ marginTop: "1vw" }} />
          <TextField
            onChange={(e) => {
              handleChange(e);
            }}
            id="filled-basic"
            label={
              <Box>
                <LocationOnIcon /> Location
              </Box>
            }
            onKeyDown={handleEnter}
            variant="filled"
            name="location"
            type="location"
            color="pink"
            value={searchObj.location}
            sx={{
              marginTop: "1vw",
              width: {
                xxs: "235px",
                xs: "80%",
                sm: "450px",
              },
              input: {
                background: "#ebeced",
              },
            }}
          />
          {error !== null ? (
            <Alert
              severity="warning"
              sx={{
                width: {
                  xxs: "235px",
                  xs: "80%",
                  sm: "450px",
                },
                margin: "0 auto",
                backgroundColor: "transparent",
              }}
            >
              {error}
            </Alert>
          ) : (
            <></>
          )}
          {error !== null ? <></> : <br />}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={searchObj.date}
              onChange={(newDate) => {
                console.log(newDate);
                setSearchObj({ ...searchObj, date: newDate });
              }}
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    id="filled-basic"
                    label="Date"
                    variant="filled"
                    color="pink"
                    sx={{
                      width: {
                        xxs: "235px",
                        xs: "80%",
                        sm: "450px",
                      },
                      marginTop: "1vw",
                      backgroundColor: "#ebeced",
                      input: {
                        background: "#ebeced",
                      },
                    }}
                  />
                );
              }}
            />
          </LocalizationProvider>
          <br />
          <Button
            color="pink"
            variant="contained"
            sx={{
              width: "150px",
              marginTop: {
                xxs: "3vw",
                xs: "3vw",
                sm: "1vw",
              },
              borderRadius: "3rem",
              fontSize: "20px",
            }}
            onClick={() => {
              console.log("the object", searchObj);
              dispatch(searchKeyword(searchObj));
            }}
          >
            Go
          </Button>
        </Box>
        <HomepageEvents location={location.city} />
      </Box>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
