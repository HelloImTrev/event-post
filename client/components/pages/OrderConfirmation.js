import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const OrderConfirmation = () => {
  const user = useSelector((state) => state.auth);

  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ marginTop: "7rem" }}>
          <Typography variant="promptTitle" fontSize="20px">
            Thank you! Your order was sent to {user.email || user.username}
          </Typography>
        </Box>
        <Box marginTop="2rem">
          <Link to={"/home"}>
            <Button
              variant="contained"
              color="pink"
              sx={{ width: "200px" }}
              disableElevation
            >
              Back To Home
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default connect(null)(OrderConfirmation);
