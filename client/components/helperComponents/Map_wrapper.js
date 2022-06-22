import React, { useEffect, useRef, useState } from "react";

// Google Map
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

// Redux
import { useDispatch, useSelector } from "react-redux";

// helper func
import { formatDate, formatAddress, dayOfWeek, getMonth } from "../helperFunctions/dateFormat";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function Map({ center, zoom, events }) {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });

    const markers = events.map((event, i) => {
      const marker = new window.google.maps.Marker({
        position: { lat: parseFloat(event.venueLatitude), lng: parseFloat(event.venueLongitude) },
        label: `${i + 1}`,
      });

      const start = new Date(event.start);
      const formatedDate = formatDate(start);
      const formatedAddress = formatAddress(event);
      const startWeekDay = dayOfWeek(start);
      const startMonth = getMonth(start);
      const startDate = start.getDate();

      const content = `
      <div>
      <div>
        <a href="/events/${event.id}"><img src=${event.images[0].url} width="200" height="100"/></a>
      </div>
      <h3> <a href="/events/${event.id}">${event.name}</a></h3>
      <p>${startWeekDay}, ${startMonth.month} ${startDate}</p>
      <p>${event.venueName} - ${event.venueCity}, ${event.venueStateCode}</p>
      
      </div>`;
      marker.addListener("click", () => {
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
      });
      return marker;
    });

    new MarkerClusterer({ markers, map });
  });

  return <div ref={ref} id="map" style={{ width: "100%", height: 800 }} />;
}

export default function Map_wrapper({ events }) {
  const userLocationObj = useSelector(({ userLocation }) => userLocation);
  console.log("userLocationObj is: ", userLocationObj);
  console.log("eventssssss", events);

  const [center, setCenter] = useState({
    lat:
      userLocationObj.latitude && typeof userLocationObj.latitude === "number"
        ? userLocationObj.latitude
        : 40.7489281,
    lng:
      userLocationObj.longitude && typeof userLocationObj.longitude === "number"
        ? userLocationObj.longitude
        : -73.9857222,
  });

  useEffect(() => {
    if (typeof userLocationObj.latitude === "number") {
      setCenter({ lat: userLocationObj.latitude, lng: userLocationObj.longitude });
    }
  }, [userLocationObj]);

  const zoom = 10;

  return (
    <Wrapper apiKey={process.env.GOOGLE_API_KEY} render={render}>
      <Map center={center} zoom={zoom} events={events}>
        {/* <Marker position={center} /> */}
      </Map>
    </Wrapper>
  );
}

// NEW YORK ESB 40.748928164800205, -73.98572227624132
// BOSTON 42.32867080627094, -71.07551417270527;
