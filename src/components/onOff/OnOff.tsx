import React, { MouseEventHandler, useState } from "react";
import './OnOff.css';

export const OnOff = () => {

  let [on, setOn] = useState(Boolean);

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    marginRight: '2px',
    padding: '5px',
    textAlign: 'center' as const,
    backgroundColor: on ? 'green' : 'white'
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    marginRight: '5px',
    padding: '5px',
    textAlign: 'center' as const,
    backgroundColor: !on ? 'red' : 'white'
  };
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    backgroundColor: on ? 'green' : 'red'
  };

  return (
    <div className="button">
      <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
      <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}