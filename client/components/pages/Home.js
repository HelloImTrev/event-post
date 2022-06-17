import React from "react";
import axios from "axios";

// Redux
import { connect } from "react-redux";

//MUI
import { Box, Typography } from "@mui/material";

// child component
import Slides from "../helperComponents/Slides";
import HomepageEvents from "../helperComponents/HomepageEvents";
import SearchEngine from "../helperComponents/SearchEngine";

export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: {
            xxs: "350px",
            xs: "400px",
            sm: "500px",
            md: "600px",
          },
        }}
      >
        <Slides />
        <Box
          sx={{
            zIndex: "1",
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "absolute",
            top: { xxs: "100px", xs: "100px", sm: "125px", md: "150px" },
          }}
        >
          <Typography
            variant="promptMainTitle"
            sx={{
              fontSize: {
                xxs: "20px",
                xs: "27px",
                sm: "50px",
                md: "60px",
              },
              display: "block",
              marginBottom: {
                xxs: "0",
                xs: "10px",
              },
            }}
          >
            Lets do something!
          </Typography>
          <SearchEngine />
        </Box>
        <HomepageEvents />
      </Box>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
