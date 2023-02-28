import React from "react";

export type AccordionPropsType = {
  titleValue: string
  collapsedValue: boolean
  onChange: ()=>void
};

export function Accordion(props: AccordionPropsType) {

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
      { !props.collapsedValue && <AccordionBody />} 
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
