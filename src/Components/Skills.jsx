import React from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const Skills = (props) => {
  const ski = props.Ski;
  return (
    <Box sx={{ pb: 5 }}>
      <Typography color={"white"} variant="h5">
        Skills
      </Typography>
      <Divider sx={{ mb: 2 }} color={"white"} />
      {ski.map((items) => {
        return (
          <Stack>
            <Typography p="1.5px" color={"white"}>
              <CircleIcon sx={{ fontSize: "8px" }} /> {items}
            </Typography>
          </Stack>
        );
      })}
    </Box>
  );
};
