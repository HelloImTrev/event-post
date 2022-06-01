import React, { Fragment } from "react";

// redux
import { connect, useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth";

// router
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  Stack,
  Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// child comp
import NavDrawer from "./NavDrawer";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  // For user dropdown popup
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === true) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // For Mobile view hamburger
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawer(open);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <AppBar position="fixed" sx={{ bgcolor: "#2a1b3d" }}>
            <Toolbar sx={{ borderBottom: "solid 1px #2a1b3d" }}>
              <MenuItem
                component={Link}
                to={"/home"}
                sx={{ "&:hover": { bgcolor: "transparent" }, padding: "0", height: { xxs: "60px", xs: "69px" } }}
              >
                <img src="/images/logo_test.svg" style={{ height: "70px", margin: "3px 5px", padding: "3px 0" }} />
              </MenuItem>

              <Fragment>
                <MenuItem
                  onClick={toggleDrawer(true)}
                  sx={{
                    "&:hover": { bgcolor: "transparent" },
                    marginLeft: "auto",
                    paddingTop: "13px",
                    display: {
                      xxs: "inline",
                      xs: "inline",
                      sm: "none",
                    },
                  }}
                >
                  <MenuIcon sx={{ fontSize: "30px" }} />
                </MenuItem>
                <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
                  <NavDrawer toggleDrawer={toggleDrawer} user={user.username} handleLogout={handleLogout} />
                </Drawer>
              </Fragment>

              <MenuItem
                component={Link}
                to={"/explore"}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                  marginLeft: "auto",
                  display: {
                    xxs: "none",
                    xs: "none",
                    sm: "inline",
                  },
                }}
              >
                <Typography id="navtitle" variant="karlaWhite">
                  EXPLORE
                </Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/postevents"}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                  display: {
                    xxs: "none",
                    xs: "none",
                    sm: "inline",
                  },
                }}
              >
                <Typography id="navtitle" variant="karlaWhite">
                  POST EVENT
                </Typography>
              </MenuItem>
              <MenuItem
                ref={anchorRef}
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                  display: {
                    xxs: "none",
                    xs: "none",
                    sm: "inline",
                  },
                }}
              >
                <Typography id="navtitle" variant="karlaWhite">
                  Hello, {user.username}
                </Typography>
              </MenuItem>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose} component={Link} to={"/myevents"}>
                            My events
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              handleClose(e);
                              handleLogout();
                            }}
                          >
                            Logout
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Toolbar>
          </AppBar>
        </div>
      ) : (
        <div>
          <AppBar position="fixed" sx={{ bgcolor: "#2a1b3d" }}>
            <Toolbar sx={{ borderBottom: "solid 1px #2a1b3d" }}>
              <MenuItem
                component={Link}
                to={"/home"}
                sx={{ "&:hover": { bgcolor: "transparent" }, padding: "0", height: { xxs: "60px", xs: "69px" } }}
              >
                <img src="/images/logo_test.svg" style={{ height: "70px", margin: "3px 5px", padding: "3px 0" }} />
              </MenuItem>

              <Fragment>
                <MenuItem
                  onClick={toggleDrawer(true)}
                  sx={{
                    "&:hover": { bgcolor: "transparent" },
                    marginLeft: "auto",
                    paddingTop: "13px",
                    display: {
                      xxs: "inline",
                      xs: "inline",
                      sm: "none",
                    },
                  }}
                >
                  <MenuIcon sx={{ fontSize: "30px" }} />
                </MenuItem>
                <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
                  <NavDrawer toggleDrawer={toggleDrawer} user={user.username} handleLogout={handleLogout} />
                </Drawer>
              </Fragment>

              <MenuItem
                component={Link}
                to={"/explore"}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                  marginLeft: "auto",
                  display: {
                    xxs: "none",
                    xs: "none",
                    sm: "inline",
                  },
                }}
              >
                <Typography id="navtitle" variant="karlaWhite">
                  EXPLORE
                </Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/postevents"}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                  display: {
                    xxs: "none",
                    xs: "none",
                    sm: "inline",
                  },
                }}
              >
                <Typography id="navtitle" variant="karlaWhite">
                  POST EVENT
                </Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/login"}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                  display: {
                    xxs: "none",
                    xs: "none",
                    sm: "inline",
                  },
                }}
              >
                <Typography id="navtitle" variant="karlaWhite">
                  Log In/Sign up
                </Typography>
              </MenuItem>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleLogout() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
