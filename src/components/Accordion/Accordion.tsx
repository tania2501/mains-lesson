import React from "react";

export type AccordionPropsType = {
  titleValue: string
  collapsedValue: boolean
  onChange: ()=>void
  items: string[]
};

export function Accordion(props: AccordionPropsType) {

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
      { !props.collapsedValue && <AccordionBody items={props.items}/>} 
    </div>
  );
}
type AccordionTitleType = {
  title: string
  onChange: ()=>void
}
function AccordionTitle(props: AccordionTitleType) {

  return (
    <div>
      <h3 onClick={props.onChange}>----{props.title}----</h3>
    </div>
  );
}
type AccordionBodyType = {
  items: string[]
}
function AccordionBody(props: AccordionBodyType) {

  return (
    <ul>
      {props.items.map( (i, index) => <li key={index}>{i}</li>)}
    </ul>
  );
}
