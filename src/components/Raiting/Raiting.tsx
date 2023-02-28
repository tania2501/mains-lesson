import React from "react";

export type RaitingPropsType = {
  value: number;
  onChange: (value: number)=>void
};
export function Rating(props: RaitingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} onChange={props.onChange} value={1}/>
      <Star selected={props.value > 1} onChange={props.onChange} value={2}/>
      <Star selected={props.value > 2} onChange={props.onChange} value={3}/>
      <Star selected={props.value > 3} onChange={props.onChange} value={4}/>
      <Star selected={props.value > 4} onChange={props.onChange} value={5}/>
    </div>
  );
}
type StarPropsType = {
  selected: boolean;
  onChange: (value: number)=>void
  value: number
};

export function Star(props: StarPropsType) {
  return <span onClick={()=>{props.onChange(props.value)}}> 
    {props.selected ? <b>star </b> : "star "}
   </span>;
}
  