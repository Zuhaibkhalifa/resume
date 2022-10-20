import React from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";

export const Experience = (props) => {
  const exp = props.Exp;
  return (
    <>
      {exp.length > 0 && (
        <Box sx={{ pb: 5 }}>
          <Typography variant="h5">Experince</Typography>
          <Divider sx={{ mb: 2 }} color={"black"} />
          {exp.map((name, date, description) => {
            return (
              <Stack>
                <Typography
                  p="1.5px"
                  variant="h5"
                  key={(name, date, description)}
                >
                  {name.name}
                </Typography>
                <Typography
                  p="1.5px"
                  variant="p"
                  key={(name, date, description)}
                >
                  {name.date}
                </Typography>
                <Typography
                  p="1.5px"
                  variant="subtitle"
                  key={(name, date, description)}
                >
                  {name.description}
                </Typography>
                {/* <Typography variant="subtitle">{props.Exp.date}</Typography>
                <Typography variant="p">{props.Exp.description}</Typography> */}
              </Stack>
            );
          })}
        </Box>
      )}
    </>
  );
};
