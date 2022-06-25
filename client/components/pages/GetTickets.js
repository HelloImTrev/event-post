import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EventCard from "../helperComponents/EventCard";
import {
  formatDate,
  formatAddress,
  dayOfWeek,
  getMonth,
  formatName,
} from "../helperFunctions/dateFormat";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Box, Paper, Typography } from "@mui/material";
import { width } from "@mui/system";

export const GetTickets = (props) => {
  const history = useHistory();
  const event = useSelector(({ events }) =>
    events.find((event) => event.id === props.match.params.id * 1)
  );
  const user = useSelector((state) => state.auth);
  const subscribedEvents = useSelector((state) => state.eventSubscription);
  const subscribedEventIds = subscribedEvents.map((event) => event.eventId);

  const [counter, setCounter] = useState(1);

  if (event) {
    const start = new Date(event.start);
    const formatedDate = formatDate(start);
    const formatedAddress = formatAddress(event);
    const startWeekDay = dayOfWeek(start);
    const startMonth = getMonth(start);
    const startDate = start.getDate();

    // EventCard goes on the left side of the page
    // Payment details go on the right side of the page
    // + - and BUY For Buttons can go underneath the event card
    return (
      <Box textAlign="center" marginTop="5rem" marginBottom="5rem">
        <Typography
          variant="promptTitle"
          sx={{
            borderBottom: "3px solid #D83F87",
            fontWeight: 700,
            fontSize: {
              xs: "25px",
              sm: "30px",
              md: "30px",
            },
          }}
        >
          {formatName(user.username)}, the fun starts now!
        </Typography>
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "1000px",
            height: "500px",
            marginTop: {
              xxs: "70px",
              md: "30px",
            },
            marginBottom: "2rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ marginRight: "2rem" }}>
              <EventCard
                event={event}
                subscribed={
                  subscribedEventIds.includes(event.id) ? true : false
                }
              />
            </Box>
            <Paper
              elevation={0}
              sx={{
                height: "300px",
                width: "325px",
                backgroundColor: "#f8f7fa",
              }}
            >
              <Box marginTop="2rem">
                <Box sx={{ marginTop: ".5rem" }}>
                  <Typography variant="promptTitle">Payment Details</Typography>

                  <Box>
                    {/* //<span>Credit Card</span> */}
                    <img
                      src="/images/visa.png"
                      style={{
                        height: "25px",
                        width: "35px",
                        margin: "5px",
                      }}
                    />
                    <img
                      src="/images/thirdMastercard.png"
                      style={{
                        height: "25px",
                        width: "35px",
                        margin: "5px",
                      }}
                    />
                    <img
                      src="/images/amex.png"
                      style={{
                        height: "25px",
                        width: "35px",
                        margin: "5px",
                      }}
                    />
                  </Box>
                  <Box sx={{ marginTop: ".5rem" }}>
                    <span>
                      <label
                        style={{ fontFamily: "roboto", marginRight: "5px" }}
                      >
                        Card Number
                      </label>
                      <input pattern="[0-9]*" inputMode="numeric"></input>
                    </span>
                  </Box>
                </Box>
                <Box sx={{ marginTop: ".5rem" }}>
                  <span>
                    <Box>
                      <label
                        style={{ fontFamily: "roboto", marginRight: "5px" }}
                      >
                        Expiration Date
                      </label>
                      <select>
                        <option value="01">January</option>
                        <option value="02">February </option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select>
                        <option value="22"> 2022</option>
                        <option value="23"> 2023</option>
                        <option value="24"> 2024</option>
                        <option value="25"> 2025</option>
                        <option value="26"> 2026</option>
                        <option value="27"> 2027</option>
                      </select>
                    </Box>
                    <Box sx={{ marginTop: ".5rem" }}>
                      <label
                        style={{ fontFamily: "roboto", marginRight: "5px" }}
                      >
                        CVV
                      </label>
                      <input type="text" style={{ width: "150px" }} />
                    </Box>
                  </span>
                </Box>
                <Box sx={{ marginTop: ".5rem" }}>
                  <span>
                    <label style={{ fontFamily: "roboto", marginRight: "5px" }}>
                      Name On Card
                    </label>
                    <input type="text" />
                  </span>
                </Box>
                <Box marginTop="1rem">
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button
                      disabled={counter >= 20}
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                    >
                      +
                    </Button>

                    {<Button disabled>{counter}</Button>}

                    {
                      <Button
                        disabled={counter <= 0}
                        onClick={() => {
                          setCounter(counter - 1);
                        }}
                      >
                        -
                      </Button>
                    }

                    <Button
                      onClick={() => history.push("/orderconfirmation")}
                    >{`Buy for $${(event.price * 1 * counter).toFixed(
                      2
                    )}`}</Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Paper>
      </Box>
    );
  } else {
    return null;
  }
};

export default connect(null)(GetTickets);
