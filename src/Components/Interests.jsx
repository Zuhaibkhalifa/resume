import React from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const Interests = (props) => {
  const int = props.Int;
  console.log(int, "interest");

  return (
    <>
      {int.length > 0 && (
        <Box sx={{ pb: 5 }}>
          <Typography color={"white"} variant="h5">
            Interests
          </Typography>
          <Divider sx={{ mb: 2 }} color={"white"} />
          {int.map((items) => {
            return (
              <Stack>
                <Typography p="1.5px" color={"white"}>
                  <CircleIcon sx={{ fontSize: "8px" }} /> {items}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      )}
    </>
  );
};
