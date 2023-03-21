import { useState } from "@storybook/addons";
import { useMemo } from "@storybook/store";
import React from "react";

export default {
  title: "UseMemo",
};

export const Example1 = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(3);

  let resultA = 1;
  let resultB = 1;

  useMemo(() => {
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      resultA = resultA * i;
    }
    return resultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />

      <div>Result A : {resultA}</div>
      <div>Result B : {resultB}</div>
    </>
  );
};
