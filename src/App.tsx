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
      <Accordion titleValue={"Menu"} collapsedValue={true} />
      <Accordion titleValue={"Users"} collapsedValue={false} />
      <Raiting value={2} />
      <Raiting value={4} />
      <OnOff titleValue={'Active'} valueType={true} />
      <OnOff titleValue={'Disable'} valueType={false} />
      <Todolist />
    </div>
  );
}

export default App;
