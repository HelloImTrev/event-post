import React, { useEffect, useRef, useState } from "react";

//mui
import { Paper, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";

//npm
import axios from "axios";
// import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/google_Data";

const Places_autocomplete = (props) => {
  const dispatch = useDispatch();
  const googleData = useSelector(({ googleData }) => googleData);
  const [value, setValue] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [returnedData, setReturnedData] = useState(null);

  useEffect(() => {
    if (value) setPlaceId(value.value.place_id);
    if (placeId) {
      dispatch(getData(placeId));
    }
  }, [value, placeId]);

  useEffect(() => {
    setReturnedData(googleData);
  }, [googleData]);

  return (
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
      <Typography variant="promptTitle" sx={{ fontSize: "20px" }}>
        Event Place
      </Typography>
      <GooglePlacesAutocomplete
        apiKey={process.env.GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
          placeholder: "Choose a Place",
          styles: {
            container: (provided) => {
              return {
                ...provided,
                width: "100%",
                margin: "0 auto",
              };
            },
            control: (provided) => {
              return {
                ...provided,
                "&:hover": {
                  borderColor: "#D83F87",
                  boxShadow: "0 0 0 1px #D83F87",
                },
                "&:active": {
                  borderColor: "#D83F87",
                  boxShadow: "0 0 0 1px #D83F87",
                },
                "&:focus": {
                  borderColor: "#D83F87",
                  boxShadow: "0 0 0 1px #D83F87",
                },
              };
            },
          },
        }}
      />
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="roboto" sx={{ fontWeight: "bold" }}>
          {returnedData && returnedData.name ? returnedData.name : "Select a Place"}
        </Typography>
        <br />
        <Typography variant="roboto">{returnedData && returnedData.formatted_address}</Typography>
      </Box>
    </Box>
  );
};

// #D83F87

export default Places_autocomplete;

//   const proxyurl = "https://event-post.herokuapp.com/";
//       const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
//       fetch(url + proxyurl)
//         .then((response) => response.json())
//         .then((contents) => console.log("receiveeedddd", contents))
//         .catch(() => console.log("error on fetchingggg"));
//   console.log("receivveeeeeeedddd", data);
//   var config = {
//         method: "get",
//         url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`,
//         headers: {},
//       };

//       await axios(config)
//         .then(function (response) {
//           console.log(response.data);
//           data = response.data;
//         })
//         .catch(function (error) {
//           console.log(error);
//         });

//       return data;

//   data = (
//     await axios.get(
//       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`
//     )
//   ).data;
// url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=50000&keyword=${keyword}&key=${process.env.GOOGLE_API_KEY}`,
//         url: `https://maps.googleapis.com/maps/api/place/details/json
//   ?fields=name%2address_components%2formatted_address%2geometry
//   &place_id=${placeId}
//   &key=${process.env.GOOGLE_API_KEY}`,

// <Box>
//   <Autocomplete
//     apiKey={process.env.GOOGLE_API_KEY}
//     onPlaceSelected={(place) => {
//       console.log(place);
//     }}
//   />
// </Box>

// const Autocomplete = () => {
//   const ref = useRef();
//   const userLocation = useSelector(({ userLocation }) => userLocation);
//   console.log("LOCATION OF USER IS", userLocation && userLocation);
//   useEffect(() => {
//     const center = {
//       lat: userLocation && userLocation.latitude,
//       lng: userLocation && userLocation.longitude,
//     };

//     const defaultBounds = {
//       north: center.lat + 0.4,
//       south: center.lat - 0.4,
//       east: center.lng + 0.4,
//       west: center.lng - 0.4,
//     };

//     const options = {
//       bounds: defaultBounds,
//       componentRestrictions: { country: "us" },
//       fields: ["address_components", "geometry", "icon", "name"],
//       strictBounds: false,
//       types: ["establishment"],
//     };

//     const autocomplete = new window.google.maps.places.Autocomplete(ref.current, options);
//   });

//   return <input ref={ref} id="map" style={{ width: "100%", height: "100%" }} />;
// };
