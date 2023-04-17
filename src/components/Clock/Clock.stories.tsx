import React from "react";
import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock
};

export const DigitalClock = () => {
  return <Clock mode={'digital'}/>
};

export const AnalogClock = () => {
  return <Clock mode={'analog'}/>
};