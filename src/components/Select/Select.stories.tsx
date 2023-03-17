import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
};

export const Base = () => {
  const [value, setValue] = useState('1');

  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Bratislava" },
        { value: "2", title: "Vienna" },
        { value: "3", title: "Paris" },
      ]}
    />
  );
};
export const WithOutValue = () => {
  const [value, setValue] = useState(null)
  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Bratislava" },
        { value: "2", title: "Vienna" },
        { value: "3", title: "Paris" },
      ]}
    />
  );
};
