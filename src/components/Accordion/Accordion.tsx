import React from "react";
type AccordionPropsType = {
  titleValue: string;
  collapsedValue: boolean;
};
function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      { !props.collapsedValue && <AccordionBody />} 
    </div>
  );
}
function AccordionTitle(props: any) {
  console.log("AccordionTitle rendering");

  return (
    <div>
      <h3>----{props.title}----</h3>
    </div>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");
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
