import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Awards } from "../Awards";
import { Contact } from "../Contact";
import { Education } from "../Education";
import { Experience } from "../Experience";
import { Header } from "../Header";
import { Interests } from "../Interests";
import { Profile } from "../Profile";
import { Skills } from "../Skills";

const Exp = [
  {
    name: "zuhaib khalifa",
    date: "14 / 45 / 2021",
    description:
      "Veniam id in non qui excepteur nostrud est. Nulla adipisicing elit non sint aliqua sunt non esse fugiat. In esse duis ex commodo eiusmod mollit mollit aliqua duis aute cillum nulla qui. Sunt adipisicing incididunt laboris do. Ullamco non id cillum laboris do occaecat cupidatat. Enim eiusmod consequat duis reprehenderit fugiat elit.",
  },
  {
    name: "zaid",
    date: "14 / 45 / 2021",
    description:
      "Veniam id in non qui excepteur nostrud est. Nulla adipisicing elit non sint aliqua sunt non esse fugiat. In esse duis ex commodo eiusmod mollit mollit aliqua duis aute cillum nulla qui. Sunt adipisicing incididunt laboris do. Ullamco non id cillum laboris do occaecat cupidatat. Enim eiusmod consequat duis reprehenderit fugiat elit.",
  },
  {
    name: "zaman",
    date: "14 / 45 / 2021",
    description:
      "Veniam id in non qui excepteur nostrud est. Nulla adipisicing elit non sint aliqua sunt non esse fugiat. In esse duis ex commodo eiusmod mollit mollit aliqua duis aute cillum nulla qui. Sunt adipisicing incididunt laboris do. Ullamco non id cillum laboris do occaecat cupidatat. Enim eiusmod consequat duis reprehenderit fugiat elit.",
  },
];

const Head = {
  name: "zuhaib",
  title: "Front-end Developer",
};

const Prof = {
  title:
    "Exercitation nostrud est eiusmod est elit irure. Qui ad mollit aliquip duis consectetur cupidatat non sit ex voluptate dolore nulla. Exercitation nostrud reprehenderit minim ex aliqua amet. Commodo ad aute commodo adipisicing ad ad ex sunt aliqua incididunt.Veniam tempor id sint elit commodo non tempor. Reprehenderit ea voluptate consectetur tempor ipsum minim eu enim amet nulla commodo Lorem. Sint est Lorem aute quis excepteur dolore sint id eiusmod consectetur qui. Duis non et sint eu officia qui eiusmod mollit fugiat. Ad ullamco ipsum qui amet ipsum nostrud proident incididunt.",
};

const Edu = [
  { course: "Science", name: "anjuman noor ", date: "18/238/272" },
  { course: "Science", name: "anjuman noor ", date: "18/238/272" },
];

const Int = ["sports", "gaming", "Anime", "Coding", "Adventrures"];
const Awa = ["well", "championsLeague", "PremiereLeague", "laliga"];

const Ski = ["sleeping", "eating", "coding", "driving", "swimming"];
const theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
    },
  },
});

export const Resume = () => {
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#212121",
          margin: "auto",
          width: "70%",
          height: "100%",
          p: "0px",

          // justifyContent: "space-between",
        }}
      >
        <Header Head={Head} />
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              p: 8,
              width: "30%",
              background: "#313133",
            }}
          >
            <Contact />
            <Education Edu={Edu} />
            <Skills Ski={Ski} />
            <Awards Awa={Awa} />
            <Interests Int={Int} />
          </Box>
          {/* </ThemeProvider> */}

          <Box
            sx={{
              background: "#f5f5f5",
              width: "100%",
              height: "auto",
              m: "0px",

              p: 8,
            }}
          >
            <Profile Prof={Prof} />
            <Experience Exp={Exp} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
