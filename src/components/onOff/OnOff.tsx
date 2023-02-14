import React from "react";
import './OnOff.css';

type OnOffType = {
  titleValue: string
  valueType: boolean
}
export const OnOff = (props: OnOffType) => {
  return (
    <div>
      <OnOFFTitle titleValue={props.titleValue}/>
      <OnOffBody valueType={props.valueType}/>
    </div>
  )
}
type OnOffTitleType = {
  titleValue: string
}
const OnOFFTitle = (props: OnOffTitleType) => {
  return (
    <h2>{props.titleValue}</h2>
  )
}
type OnOffBodyType = {
  valueType?: boolean
}
function toggleHandler (e: any) {
  e.preventDefault();
  (e.target.classList.contains('active') === true ? e.target.classList.remove('active') : e.target.classList.add('active'))
}
const OnOffBody = (props: OnOffBodyType) => {

  if (props.valueType === true) {
    return (
    <div className="flex">
      <button className="on active">On</button>
      <button className="off">Off</button>
      <button className="color active"></button>
    </div>
  )} else {
    return (
      <div className="flex">
        <button className="on">On</button>
        <button className="off active">Off</button>
        <button className="color disable"></button>
      </div>
    )
  } 
}