import React, { useState } from "react";
type AccordionPropsType = {
  titleValue: string;
};
function Accordion(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(Boolean);



  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} collapsed={collapsed} change={setCollapsed}/>
      { collapsed && <AccordionBody />} 
    </div>
  );
}
type CollapsedType = {
  collapsed: boolean
  title: string
  change: (collapsed: boolean)=>void
}
function AccordionTitle(props: CollapsedType) {
  console.log("AccordionTitle rendering");

  return (
    <div>
      <h3 onClick={()=> {props.change(!props.collapsed)}}>----{props.title}----</h3>
    </div>
  );
}

function AccordionBody() {
 
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
}
export default Accordion;
