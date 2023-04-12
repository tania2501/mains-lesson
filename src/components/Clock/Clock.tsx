import React, { useState, useEffect } from "react";
import s from "./Clock.module.css";

export const Clock: React.FC = () => {
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

  let time = date.toLocaleTimeString()
  return (
    <>
      Time: {time}
    </>
  );
};
