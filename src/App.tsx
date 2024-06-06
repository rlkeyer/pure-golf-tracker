import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import { Chip } from "@mui/material";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Chip label="In Progress" className="club-chip" />
      <Counter />
    </div>
  );
}

export default App;
