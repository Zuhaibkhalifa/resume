import React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { indigo, blue } from "@mui/material/colors";

export const Theme = ({ children }) => {
  let theme = createTheme({
    typography: {
      fontFamily: "Lato, sans-serif",
    },
  });

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
