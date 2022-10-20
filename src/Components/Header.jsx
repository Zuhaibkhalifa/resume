import React from "react";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "./image.jpg";

export const Header = (props) => {
  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        alignItems: "center",
        pl: 3,
        height: "120px",
        position: "relative",
        background: "#DDDDDF",
        top: 210,
      }}
    >
      <Box
        sx={{
          width: "150px",
          backgroundImage: `url(${Image})`,
          backgroundPosition: "center",
          height: "150px",
          borderRadius: "50%",
          border: "5px solid #CACACC",
          ml: 4,
          mr: 15,
        }}
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h2">{props.Head.name}</Typography>
        <Typography variant="subtitle">{props.Head.title}</Typography>
      </Box>
    </Box>
  );
};
