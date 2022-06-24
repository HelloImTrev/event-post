import React, { useEffect, useState } from "react";
import axios from "axios";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { searchKeyword } from "../../store/events";
import { dispatchSearchObj } from "../../store/searchObj";
import { removeError } from "../../store/error";
import { loadUserLocation } from "../../store/userLocation";

//MUI
import { Box, TextField, Button, Alert } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchEngine = ({ explore, match, setSearchLocation }) => {
  const dispatch = useDispatch();
  const resultError = useSelector(({ error }) => error);
  const searchHistory = useSelector(({ searchObj }) => searchObj);

  // For search bar
  const [location, setLocation] = useState({ state: "New York", latitude: "", longitude: "" });
  const [searchObj, setSearchObj] = useState({
    name: searchHistory.name ? searchHistory.name : "",
    location: searchHistory.location
      ? searchHistory.location
      : location.state && !searchHistory.location
      ? location.state
      : "New York",
    date: searchHistory.date ? searchHistory.date : new Date(),
  });

  // For geolocation of user
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation();
    window.scrollTo(0, 0);
    return () => {
      setLocation({});
      setError(null);
    };
  }, []);

  useEffect(() => {
    if (location.state && !searchHistory.location)
      setSearchObj({ ...searchObj, location: location.state });
    dispatch(loadUserLocation(location));
    return () => {
      setSearchObj({});
    };
  }, [location]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setError(null);
          const data = (
            await axios.get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            )
          ).data;

          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            state: data.principalSubdivision,
          });
        },
        () => {
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
      dispatch(dispatchSearchObj(searchObj));
      // if (explore) match.params.filter = JSON.stringify({});
      if (match) match.params.filter = JSON.stringify({});
      if (resultError.error) dispatch(removeError());
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
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
          width: explore
            ? "80%"
            : {
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
          width: explore
            ? "80%"
            : {
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
            width: explore
              ? "80%"
              : {
                  xxs: "235px",
                  xs: "80%",
                  sm: "450px",
                },
            margin: "0 auto",
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
                  width: explore
                    ? "80%"
                    : {
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
      {explore ? (
        <Button
          color="pink"
          variant="contained"
          sx={{
            width: {
              xxs: "150px",
              md: "90%",
              lg: "150px",
              mdlg: "150px",
            },
            marginTop: {
              xxs: "3vw",
              xs: "3vw",
              sm: "1vw",
            },
            borderRadius: "3rem",
            fontSize: "20px",
          }}
          onClick={() => {
            dispatch(searchKeyword(searchObj));
            dispatch(dispatchSearchObj(searchObj));
            if (match) match.params.filter = JSON.stringify({});
            if (resultError.error) dispatch(removeError());
          }}
        >
          Go
        </Button>
      ) : (
        <Button
          color="pink"
          variant="contained"
          sx={{
            width: {
              xxs: "150px",
              lg: "150px",
              mdlg: "150px",
            },
            marginTop: {
              xxs: "3vw",
              xs: "3vw",
              sm: "1vw",
            },
            borderRadius: "3rem",
            fontSize: "20px",
          }}
          onClick={() => {
            dispatch(searchKeyword(searchObj));
            dispatch(dispatchSearchObj(searchObj));
            if (match) match.params.filter = JSON.stringify({});
            if (resultError.error) dispatch(removeError());
          }}
        >
          Go
        </Button>
      )}
    </Box>
  );
};

export default SearchEngine;
