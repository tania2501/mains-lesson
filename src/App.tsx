import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Todolist } from "./components/back/Todolist";
import { OnOff } from "./components/onOff/OnOff";
import { Raiting, Star } from "./components/Raiting/Raiting";

function App() {
  console.log("App rendering");
  return (
    <div>
      <Accordion titleValue={"Menu"}  />
      <Accordion titleValue={"Users"} />
      <Raiting />
      <Raiting />
      <OnOff/>
      <OnOff/>
      <Todolist />
    </div>
  );
}

export default App;
