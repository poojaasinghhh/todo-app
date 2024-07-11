import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Container, Typography } from "@mui/material";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          React To-Do App
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
