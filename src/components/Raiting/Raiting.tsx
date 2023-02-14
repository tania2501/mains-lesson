import React from "react";

type RaitingPropsType = {
    value: number;
}
export function Raiting(props: RaitingPropsType) {
    console.log('Raiting rendering')
    return (
      <div>
          <Star selected={props.value > 0}/>
          <Star selected={props.value > 1}/>
          <Star selected={props.value > 2}/>
          <Star selected={props.value > 3}/>
          <Star selected={props.value > 4}/>
      </div>
  )
}
type StarPropsType = {
    selected: boolean;
}
export function Star(props: StarPropsType) {
    console.log('star rendering')
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}