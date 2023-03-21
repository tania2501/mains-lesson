import React from "react";

export type AccordionPropsType = {
  titleValue: string
  collapsedValue: boolean
  onChange: ()=>void
  items: string[]
};

function MainAccordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
      { !props.collapsedValue && <AccordionBody items={props.items}/>} 
    </div>
  );
};
export const Accordion = React.memo(MainAccordion);
type AccordionTitleType = {
  title: string
  onChange: ()=>void
}
function MainAccordionTitle(props: AccordionTitleType) {
  return (
    <div>
      <h3 onClick={props.onChange}>----{props.title}----</h3>
    </div>
  );
}
export const AccordionTitle = React.memo(MainAccordionTitle);
type AccordionBodyType = {
  items: string[]
}
function MainAccordionBody(props: AccordionBodyType) {
  return (
    <ul>
      {props.items.map( (i, index) => <li key={index}>{i}</li>)}
    </ul>
  );
}
export const AccordionBody = React.memo(MainAccordionBody);
