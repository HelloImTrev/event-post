import React, { useEffect, useRef, useState } from "react";

// Google Map
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// Redux
import { useDispatch, useSelector } from "react-redux";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{ width: "100%", height: 800 }} />;
}

export default function Map_wrapper() {
  const userLocationObj = useSelector(({ userLocation }) => userLocation);
  //console.log("userLocationObj is: ", userLocationObj);

  const [center, setCenter] = useState({
    lat:
      userLocationObj.latitude && typeof userLocationObj.latitude === "number"
        ? userLocationObj.latitude
        : 40.7128,
    lng:
      userLocationObj.longitude && typeof userLocationObj.longitude === "number"
        ? userLocationObj.longitude
        : 74.006,
  });

  useEffect(() => {
    if (typeof userLocationObj.latitude === "number") {
      setCenter({ lat: userLocationObj.latitude, lng: userLocationObj.longitude });
    }
  }, [userLocationObj]);

  const zoom = 6;

  return (
    <Wrapper apiKey={process.env.GOOGLE_API_KEY} render={render}>
      <MyMapComponent center={center} zoom={zoom}>
        {/* <Marker key={i} position={latLng} /> */}
      </MyMapComponent>
    </Wrapper>
  );
}

// const center = { lat: 40.7128, lng: 74.006 };
// const center = { lat: -34.397, lng: 150.644 };

// useEffect(() => {
//   console.log("typeeeee", typeof userLocation.latitude, userLocation);
//   setCenter({ lat: userLocation.latitude, lng: userLocation.longitude });
// }, []);

// const [center, setCenter] = useState({
//   lat:
//     userLocationObj.latitude && userLocationObj.latitude !== ""
//       ? userLocationObj.latitude
//       : 40.7128,
//   lng:
//     userLocationObj.longitude && userLocationObj.longitude !== ""
//       ? userLocationObj.longitude
//       : 74.006,
// });

// const [center, setCenter] = useState({
//   lat: 40.7128,
//   lng: 74.006,
// });
