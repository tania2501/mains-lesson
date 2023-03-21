import { spawn } from "child_process";
import React, { useState } from "react";

function UncontrolledRatingSecret() {
  let [value, setValue] = useState(0);
  return (
    <div>
      <Star selected={value > 0} value={1} change={setValue} />
      <Star selected={value > 1} value={2} change={setValue} />
      <Star selected={value > 2} value={3} change={setValue} />
      <Star selected={value > 3} value={4} change={setValue} />
      <Star selected={value > 4} value={5} change={setValue} />
    </div>
  );
}
export const UncontrolledRating = React.memo(UncontrolledRatingSecret);
type StarPropsType = {
  selected: boolean;
  value: number;
  change: (value: number) => void;
};
function StarSecret(props: StarPropsType) {
  return (
    <span onClick={() => props.change(props.value)}>
      {props.selected ? <b>star </b> : "star "}
    </span>
  );
}
export const Star = React.memo(StarSecret);