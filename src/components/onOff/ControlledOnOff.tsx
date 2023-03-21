import React, { useState } from "react";
import './OnOff.css';

export type ControlledType = {
  on: boolean
  changeOn: (on: boolean)=>void
}

const ControlledOnOffSecret = (props: ControlledType) => {

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    marginRight: '2px',
    padding: '5px',
    textAlign: 'center' as const,
    backgroundColor: props.on ? 'green' : 'white'
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    marginRight: '5px',
    padding: '5px',
    textAlign: 'center' as const,
    backgroundColor: !props.on ? 'red' : 'white'
  };
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    backgroundColor: props.on ? 'green' : 'red'
  };

  return (
    <div className="button">
      <div style={onStyle} onClick={()=>props.changeOn(true)}>On</div>
      <div style={offStyle} onClick={()=>props.changeOn(false)}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}
export const ControlledOnOff = React.memo(ControlledOnOffSecret);