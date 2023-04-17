import React, { useState, useEffect } from "react";
import { AnalogClock } from "./AnalogClock";
;

type ClockPropsType = {
  mode: "analog" | "digital";
};
export const Clock: React.FC<ClockPropsType> = (props) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  

  let time = date.toLocaleTimeString();
  return <>{props.mode === "digital" ? <>Time: {time}</> : <AnalogClock date={date}/>}</>;
};
