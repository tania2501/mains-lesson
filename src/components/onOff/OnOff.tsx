import React, { MouseEventHandler, useState } from "react";
import './OnOff.css';

export const OnOffSecret = () => {

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
  const onClick = () => {
    setOn(true)
  }
  const offClick = () => {
    setOn(false)
  }
  return (
    <div className="button">
      <div style={onStyle} onClick={onClick}>On</div>
      <div style={offStyle} onClick={offClick}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}
const OnOff = React.memo(OnOffSecret);