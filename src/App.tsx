import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import  { UncontrolledAccordion } from "./components/Accordion/UncontrolledAccordion";
import { Todolist } from "./components/back/Todolist";
import { ControlledOnOff } from "./components/onOff/ControlledOnOff";
import { OnOff } from "./components/onOff/OnOff";
import { Rating } from "./components/Raiting/Raiting";
import { UncontrolledRating } from "./components/Raiting/UncontrolledRaiting";
import { Clock } from "./components/Clock/Clock";




function App() {
  let [value, setValue] = useState(0);
  let [collapsed, setCollapsed] = useState(false);
  let [on, setOn] = useState(false)

  return (
    <div>
      <Accordion titleValue={"Menu"} collapsedValue={collapsed} onChange={()=>{setCollapsed(!collapsed)}} items={[]}/>
      <UncontrolledAccordion titleValue={"Menu"}  />
      <Rating value={value} onChange={setValue}/>
      <UncontrolledRating/>
      <OnOff/>
      <ControlledOnOff on={on} changeOn={(on)=>{setOn(on)}}/>
      <Todolist />
      <Clock mode={'digital'}/>
      <Clock mode={'analog'}/>
    </div>
  );
}

export default App;
