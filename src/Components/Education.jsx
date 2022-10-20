import React from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";

export const Education = (props) => {
  const array = props.Edu;

  // const [edu, setedu] = React.useState(false);

  // React.useEffect(() => {
  //   if (array === 0) {
  //     setedu(false);
  //   } else {
  //     setedu(true);
  //   }
  // }, [edu]);
  return (
    <>
      {array.length > 0 && (
        <Box sx={{ pb: 5 }}>
          <Typography color={"white"} variant="h5">
            Education
          </Typography>

          <Divider sx={{ mb: 2 }} color={"white"} />

          {array.map((name, course, date) => {
            return (
              <Stack>
                <Typography
                  p="1.5px"
                  color={"white"}
                  key={(name, course, date)}
                >
                  {name.name}
                </Typography>

                <Typography
                  p="1.5px"
                  color={"white"}
                  key={(name, course, date)}
                >
                  {name.course}
                </Typography>

                <Typography
                  p="1.5px"
                  color={"white"}
                  key={(name, course, date)}
                >
                  {name.date}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      )}
    </>
  );
};
