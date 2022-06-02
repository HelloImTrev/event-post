import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg"],
    values: {
      xxs: 0,
      xs: 350,
      sm: 600,
      md: 930,
      mdLg: 1340,
      lg: 1200,
    },
  },
  typography: {
    logo: {
      fontSize: "40px",
      fontFamily: "Carter One",
      color: "#aa55ff",
    },
    logoWhite: {
      fontSize: "40px",
      fontFamily: "Carter One",
      color: "#ffffff",
    },
    marker: {
      fontSize: "15px",
      fontFamily: "Permanent Marker",
      color: "black",
    },
    markerPurple: {
      fontSize: "15px",
      fontFamily: "Permanent Marker",
      color: "#aa55ff",
    },
    markerWhite: {
      fontSize: "20px",
      fontFamily: "Permanent Marker",
      color: "#ffffff",
    },
    roboto: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: "15px",
      color: "black",
    },
    karlaWhite: {
      fontFamily: "Karla",
      fontSize: "20px",
      fontWeight: 700,
      color: "#ffffff",
    },
    promptMainTitle: {
      fontFamily: "Prompt",
      fontWeight: 800,
      color: "#d83f87",
      textShadow:
        "2px 0 white, -2px 0 #ebeced, 0 2px #ebeced, 0 -2px #ebeced, 1px 1px #ebeced, -1px -1px #ebeced, -1px 1px #ebeced, 1px -1px #ebeced",
    },
    promptTitle: {
      fontFamily: "Prompt",
      fontWeight: 800,
    },
    cardTitle: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      color: "black",
    },
    cardLocation: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 300,
      fontSize: "15px",
      color: "#a6a6a6",
    },
    cardDate: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: "15px",
      color: "#8265a7",
    },
  },
  palette: {
    black: {
      light: "#484848",
      main: "#000000",
      dark: "#212121",
      contrastText: "#ffffff",
    },
    grey: {
      light: "#ffffff",
      main: "#e0e0e0",
      dark: "#cfcfcf",
      contrastText: "#000000",
    },
    lightPurple: {
      main: "#8265a7"
    },
    purple: {
      light: "#ca9cf7",
      main: "#aa55ff",
      dark: "#600bb3",
      contrastText: "#ffffff",
    },
    eggplant: {
      main: "#2a1b3d",
      contrastText: "#ffffff"
    },
    white: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    pink: {
      main: "#d83f87",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          height: "40px",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          width: 200,
          fontSize: "1rem",
          color: "#444444",
          fontWeight: "500",
          textTransform: "capitalize",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          margin: "10px 0px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          " .MuiAlert-message": {
            padding: "18px 0",
          },
        },
      },
    },
  },
});
