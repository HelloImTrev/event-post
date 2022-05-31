import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getMyEvents } from "../../store/events";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
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

export const Myevents = (props) => {
  const dispatch = useDispatch();
  const { username, events } = props;
  const calenderEvents = convertEvents(events);
  const fetchMyEvents = () => dispatch(getMyEvents());

  useEffect(() => {
    let mounted = true;
    fetchMyEvents().then((events) => {
      if (mounted) {
        return events;
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
          variant="promptTitle"
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
        events={calenderEvents}
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
    events: state.events,
  };
};

export default connect(mapState)(Myevents);
