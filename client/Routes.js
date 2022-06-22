import React, { Component } from "react";

// router
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { me } from "./store";
import { getEvents, loadSubscribedEvents } from "./store";

// child components
import Home from "./components/pages/Home";
import { LoginSignup } from "./components/pages/Login_Signup";
import Myevents from "./components/pages/Myevents";
import SingleEvent from "./components/pages/SingleEvent";
import Explore from "./components/pages/Explore.js";
import PostEvent from "./components/pages/PostEvent";
import GetTickets from "./components/pages/GetTickets";

// MUI
import { Box } from "@mui/material";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.props.isLoggedIn ? this.props.loadSubscribedEvents() : null;
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Box sx={{ marginTop: { xxs: "60px", xs: "69px" } }}>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/explore/filter/:filter?" component={Explore} />
            <Route path="/explore" component={Explore} />
            <Route path="/postevent" component={PostEvent} />
            <Route path="/myevents" component={Myevents} />
            <Route path="/events/:id" component={SingleEvent} />
            <Route path="/gettickets/:id" component={GetTickets} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/explore/filter/:filter?" component={Explore} />
            <Route path="/explore" component={Explore} />
            <Route path="/postevent" component={PostEvent} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/events/:id" component={SingleEvent} />
            <Route path="/gettickets/:id" component={GetTickets} />
            <Redirect to="/home" />
          </Switch>
        )}
      </Box>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
      dispatch(getEvents());
    },
    loadSubscribedEvents() {
      dispatch(loadSubscribedEvents());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
