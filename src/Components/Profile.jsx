import React from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";

export const Profile = (props) => {
  return (
    <Box sx={{ pt: 30, pb: 5 }}>
      <Typography variant="h5">Profile</Typography>
      <Divider sx={{ mb: 2 }} color={"black"} />
      <Stack>
        <Typography variant="p"> {props.Prof.title}</Typography>
      </Stack>
    </Box>
  );
};
