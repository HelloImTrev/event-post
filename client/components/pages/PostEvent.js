import { Paper, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// child component
import Places_autocomplete from "../helperComponents/Places_autocomplete";

const PostEvent = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        maxWidth: "1350px",
        marginTop: "95px",
        marginBottom: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box>
        <Box textAlign="center">
          <Typography
            variant="promptTitle"
            sx={{
              marginLeft: "auto",
              marginRight: " auto",
              borderBottom: "3px solid #D83F87",
              fontWeight: 700,
              fontSize: {
                xs: "25px",
                sm: "30px",
                md: "30px",
              },
            }}
          >
            Lets get the party started!
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "2rem", marginTop: "1rem" }}>
          <Box>
            <TextField
              id="outlined-basic"
              label="Event Name*"
              variant="outlined"
              name="eventName"
              type="text"
              color="pink"
              sx={{
                width: {
                  xxs: "95%",
                  md: "60%",
                  lg: "50%",
                },
              }}
            />
            <Places_autocomplete />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default PostEvent;
