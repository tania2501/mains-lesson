import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import  { UncontrolledAccordion } from "./components/Accordion/UncontrolledAccordion";
import { Todolist } from "./components/back/Todolist";
import { ControlledOnOff } from "./components/onOff/ControlledOnOff";
import { OnOff } from "./components/onOff/OnOff";
import { Rating, Star } from "./components/Raiting/Raiting";
import { UncontrolledRaiting } from "./components/Raiting/UncontrolledRaiting";




function App() {
  let [value, setValue] = useState(0);
  let [collapsed, setCollapsed] = useState(false);
  let [on, setOn] = useState(false)

  return (
    <div>
      <Accordion titleValue={"Menu"} collapsedValue={collapsed} onChange={()=>{setCollapsed(!collapsed)}} items={[]}/>
      <UncontrolledAccordion titleValue={"Menu"}  />
      <Rating value={value} onChange={setValue}/>
      <UncontrolledRaiting/>
      <OnOff/>
      <ControlledOnOff on={on} changeOn={(on)=>{setOn(on)}}/>
      <Todolist />
    </div>
  );
}

export default App;
