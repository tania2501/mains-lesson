import React, {useState, useEffect} from "react";
import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock
};

export const SetTime = () => {
  return <Clock/>
};