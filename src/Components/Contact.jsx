import {
  Typography,
  Box,
  Stack,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Contact = () => {
  return (
    <Box sx={{ pt: 30, pb: 5, width: "auto" }}>
      <Typography color={"white"} variant="h5">
        Contact
      </Typography>
      <Divider color={"white"} sx={{ mb: 2 }} />
      <Stack>
        <Typography color={"white"}>
          <CallIcon sx={{ fontSize: "15px" }} /> 099845084058
        </Typography>
        <Typography color={"white"}>
          <MailIcon sx={{ fontSize: "15px" }} /> xuhihwb@gmail.com
        </Typography>
        <Typography color={"white"}>
          <HomeIcon sx={{ fontSize: "15px" }} /> addres
        </Typography>
        <Typography color={"white"}>
          <LinkedInIcon sx={{ fontSize: "15px" }} /> linkedi
        </Typography>
        <Typography color={"white"}>
          <GitHubIcon sx={{ fontSize: "15px" }} /> linkedi
        </Typography>
      </Stack>
    </Box>
  );
};
