import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import { Box, Typography, Grid } from "@mui/material";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const convertEvents = (events) => {
  return events
    ? events.reduce((acc, event) => {
        acc.push({
          id: event.id,
          allDay: false,
          title: event.name,
          start: new Date(event.start),
          end: new Date(event.end),
        });
        return acc;
      }, [])
    : [];
};

const getEvents = async () => {
  try {
    const response = await axios.get("/api/events");
    const events = convertEvents(response.data);
    return events;
  } catch (err) {
    console.log(err);
  }
};

export const Myevents = (props) => {
  const { username } = props;
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    let mounted = true;
    getEvents().then((events) => {
      if (mounted) {
        setAllEvents(events);
      }
    });
    return () => (mounted = false);
  }, []);

  //********************************** Next Steps *********************************************/

  // function eventSelected(event) {
  //   this.setState(selectedEvent=event)
  //   console.log(event);
  // }

//   <EventBox
//   orientation="vertical"
//   event={selectedEvent}
// />  
  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent])
  // }

  //onSelectEvent={eventSelected}  add this to Calender component
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          margin: "0 auto",
          alignItems: "center",
          width: "80%",
          paddingTop: "2vw",
        }}
      >
        <Typography
          variant="marker"
          sx={{
            marginBottom: "1rem",
            alignSelf: "flext-start",
            fontSize: "3vw",
          }}
        >
          My events
        </Typography>
      </Box>
      <Calendar
        showMultiDayTimes={true}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Myevents);
