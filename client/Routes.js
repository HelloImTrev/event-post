import React, { Component } from "react";

// router
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { me } from "./store";

// child components
import Home from "./components/pages/Home";
import { LoginSignup } from "./components/pages/Login_Signup";
import Myevents from "./components/pages/Myevents";

// MUI
import { Box } from "@mui/material";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    //console.log("Route page", this.props);
    return (
      <Box sx={{ marginTop: "69px" }}>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/myevents" component={Myevents} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginSignup} />
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
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
