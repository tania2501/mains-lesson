import React, { useState } from "react";
type AccordionPropsType = {
  titleValue: string;
};
function UncontrolledAccordionSecret(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(Boolean);

  return (
    <div>
      <AccordionTitle title={props.titleValue} collapsed={collapsed} change={setCollapsed}/>
      { collapsed && <AccordionBody />} 
    </div>
  );
}
export const  UncontrolledAccordion = React.memo(UncontrolledAccordionSecret);
type CollapsedType = {
  collapsed: boolean
  title: string
  change: (collapsed: boolean)=>void
}
function AccordionTitleSecret(props: CollapsedType) {
  return (
    <div>
      <h3 onClick={()=> {props.change(!props.collapsed)}}>----{props.title}----</h3>
    </div>
  );
}
export const AccordionTitle = React.memo(AccordionTitleSecret);
function AccordionBodySecret() {
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
export const AccordionBody =React.memo(AccordionBodySecret);
