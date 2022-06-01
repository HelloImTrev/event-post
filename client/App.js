import React from "react";

import Navbar from "./components/helperComponents/Navbar";
import Routes from "./Routes";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../public/styles";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
