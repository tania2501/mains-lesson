import React, { useState } from "react";
import { ItemsType, Select } from "./Select";
import { useMemo } from "@storybook/store";

export default {
  title: "SelectMemo",
};

export const Example1 = () => {
  const [value, setValue] = useState("1");
  const [counter, setCounter] = useState(0);

  const newItems = [
    { value: "1", title: "Bratislava"},
    { value: "2", title: "Vienna"},
    { value: "3", title: "Paris"},
  ];
  const filteredItems =  useMemo((): ItemsType[] =>  {
    return [...newItems].filter( i => i.title.toLowerCase().indexOf('v') > -1)
  }, [newItems])

  return (
    <>
    <button>{counter}</button>
    <button onClick={()=>setCounter(counter + 1)}>+</button>
      <Select onChange={setValue} items={filteredItems} value={value} />
    </>
  );
};

export const Example2 = () => {
  const [value, setValue] = useState("1");
  const [counter, setCounter] = useState(0);
  const newItems: ItemsType[] = [
    { value: "1", title: "Bratislava", country: 'Slovakia' },
    { value: "2", title: "Trnava", country:'Slovakia' },
    { value: "3", title: "Nitra", country:'Slovakia' },
    { value: "4", title: 'Kyiv', country:'Ukraine '},
    { value: "5", title: 'Lugansk', country:'Ukraine '},
    { value: "6", title: 'Lvov', country:'Ukraine '},
    { value: "7", title: "Moscow", country:'Russia' },
    { value: "8", title: "Lipetsk", country:'Russia' },
    { value: "9", title: "Rostov", country:'Russia' },
  ];
  
  const filteredItems = useMemo((): ItemsType[] =>  {
    return [...newItems].filter( i => i.country === 'Slovakia'); 
  }, [newItems])
  
  return (
    <>
      <button>{counter}</button>
      <button onClick={()=>setCounter(counter + 1)}>+</button>
      <Select onChange={setValue} items={filteredItems} value={value} />
    </>
  );
};
export const Example3 = () => {
  console.log('exemple')
  const [value, setValue] = useState("1");
  const [counter, setCounter] = useState(0);

  const newItems = [
    { value: "1", title: "Bratislava", people: 100000 },
    { value: "2", title: "Trnava", people: 90000 },
    { value: "3", title: "Nitra", people: 75000 },
    { value: "4", title: 'Kyiv', people: 200000},
    { value: "5", title: 'Lugansk', people: 150000},
  ]
  const filteredItems = useMemo((): ItemsType[] => {
    
   return [...newItems].filter( i => i.people > 90000)
   console.log('memo')
  }, [newItems])
  return (
    <>
      <button>{counter}</button>
      <button onClick={()=>setCounter(counter + 1)}>+</button>
      <Select onChange={setValue} items={filteredItems} value={value} />
    </>
  );
};

