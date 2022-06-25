import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getMyEvents } from "../../store/events";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Typography, Grid } from "@mui/material";
import EventCard from "../helperComponents/EventCard";

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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const fetchMyEvents = () => dispatch(getMyEvents());
  const subscribedEvents = useSelector((state) => state.eventSubscription);
  const subscribedEventIds = subscribedEvents.map((event) => event.eventId);

  useEffect(() => {
    let mounted = true;
    fetchMyEvents().then((events) => {
      if (mounted) {
        return events;
      }
    });
    return () => (mounted = false);
  }, []);

  const handleSelectEvent = (calendarEvent) => {
    // setSelectedEvent(events.find((event) => event.id === calendarEvent.id));
    setSelectedEvent(events.find((event) => event.id === calendarEvent.id));
  };

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
        onSelectEvent={handleSelectEvent}
      />
      {selectedEvent ? (
        <EventCard
          event={selectedEvent}
          subscribed={
            subscribedEventIds.includes(selectedEvent.id) ? true : false
          }
        />
      ) : (
        ""
      )}
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
