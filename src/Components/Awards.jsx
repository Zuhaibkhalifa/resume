import React from "react";
import {
  Typography,
  Box,
  Stack,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
    },
  },
});
export const Awards = (props) => {
  const awa = props.Awa;
  return (
    <>
      {awa.length > 0 && (
        <ThemeProvider theme={theme}>
          <Box sx={{ pb: 5 }}>
            <Typography color={"white"} variant="h5">
              Awards
            </Typography>
            <Divider sx={{ mb: 2 }} color={"white"} />{" "}
            {awa.map((items) => {
              return (
                <Stack>
                  <Typography p="1.5px" color={"white"}>
                    <CircleIcon sx={{ fontSize: "8px" }} /> {items}
                  </Typography>
                </Stack>
              );
            })}
          </Box>
        </ThemeProvider>
      )}
    </>
  );
};
