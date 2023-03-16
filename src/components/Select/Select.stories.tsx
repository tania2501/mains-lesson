import React, { useState }  from 'react';
import { action } from "@storybook/addon-actions";
import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
};

export const Base = () =>  <Select
    onChange={action("Value changed")}
    value={"1"}
    items={[
      { value: "1", title: "Bratislava" },
      { value: "2", title: "Vienna" },
      { value: "3", title: "Paris" },
    ]}
  />

export const WithOutValue = () => {
  return (
    <Select
    onChange={action("Value changed")}
    items={[
      { value: "1", title: "Bratislava" },
      { value: "2", title: "Vienna" },
      { value: "3", title: "Paris" },
    ]}
  />
  )
};

