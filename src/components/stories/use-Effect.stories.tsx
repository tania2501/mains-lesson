import React, {useState, useEffect} from "react";

export default {
  title: "UseEffect",
};

export const SimpleExample = () => {
  console.log('SimpleExample')
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(3);

 

  useEffect(() => {
    console.log('useEffect every render')
     document.title = a.toString();
  });

  useEffect(() => {
    console.log('useEffect first render and every a changed')
     document.title = a.toString();
  }, [a]);

  useEffect(() => {
    console.log('useEffect only first render')
     document.title = a.toString();
  }, []);
 

  return (
    <>
      <button onClick={() => setB(b+1)}>+</button>
      {a}
    </>
  );
};
export const SetTime = () => {
  const [date, setDate] = useState<Date>(new Date(Date.now()))

  useEffect(() => {
    setInterval ( ()=> {
      setDate(new Date())
    }, 1000)
  }, []);

  let time = date.toLocaleTimeString()
  return (
    <>
      {time}
    </>
  );
};