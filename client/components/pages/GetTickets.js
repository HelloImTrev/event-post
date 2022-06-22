import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getMyEvents } from "../../store/events";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { Box, Typography, Grid } from "@mui/material";
import EventCard from "../helperComponents/EventCard";

export const GetTickets = (props) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const { username, events } = props;
  const subscribedEvents = useSelector((state) => state.eventSubscription);
  const subscribedEventIds = subscribedEvents.map((event) => event.eventId);

  // useEffect(() => {
  //   let mounted = true;
  //   fetchMyEvents().then((events) => {
  //     if (mounted) {
  //       return events;
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  return <div>Hello</div>;
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

export default connect(mapState)(GetTickets);
