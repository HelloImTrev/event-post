import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

//MUI
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Home = (props) => {
  const { username } = props;

  // For geolocation of user
  const [error, setError] = useState(null);
  const [userCity, setUserCity] = useState("");
  let location = {};
  const getLocation = () => {
    const userLocation = JSON.parse(window.localStorage.getItem("userLocation"));
    if (!userLocation) {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            setError(null);
            location["latitude"] = position.coords.latitude;
            location["longitude"] = position.coords.longitude;
            // console.log(userLocation);
            const data = (
              await axios.get(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`
              )
            ).data;
            setUserCity(data.city);
            location["city"] = data.city;
            window.localStorage.setItem("userLocation", JSON.stringify(location));
          },
          () => {
            setError("Unable to retrieve your location");
          }
        );
      }
    }
  };

  useEffect(() => {
    const userLocation = JSON.parse(window.localStorage.getItem("userLocation"));
    userLocation ? setUserCity(userLocation.city) : "";
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: {
            xxs: "300px",
            xs: "400px",
            sm: "500px",
          },
        }}
      >
        <img src={"/images/main_test.jpeg"} style={{ zIndex: "-1", width: "100%", height: "100%", display: "block" }} />
        <Box sx={{ zIndex: "1", width: "100%", position: "absolute" }}>
          <Typography
            variant="promptTitle"
            sx={{
              marginBottom: "1rem",
              alignSelf: "flext-start",
              fontSize: {
                xxs: "35px",
                xs: "50px",
                sm: "70px",
              },
              display: "block",
              marginBottom: {
                xxs: "0",
                xs: "0",
              },
            }}
          >
            Join the Hype!
          </Typography>
          <br />
          <TextField
            id="filled-basic"
            label="Search events"
            variant="filled"
            name="search"
            type="search"
            color="pink"
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
            onClick={() => {
              getLocation();
            }}
            onChange={(e) => {
              setUserCity(e.target.value);
            }}
            id="filled-basic"
            label={
              <Box>
                <LocationOnIcon /> Location
              </Box>
            }
            variant="filled"
            name="location"
            type="location"
            color="pink"
            value={userCity}
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
          >
            Go
          </Button>
        </Box>
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
