import React, {useState} from "react";
import s from "./Select.module.css";

type ItemsType = {
  title: string;
  value: any;
};
type SelectPropsType = {
  onChange: () => void;
  value?: any;
  items: ItemsType[];
};

export const Select = (props: SelectPropsType) => {
  const selectItem = props.items.find((i) => i.value === props.value);
  const [active, setActive] = useState(false);
  const activeMode = () => setActive(!active);

  return (
    <div>
      <select>
        <option value="">Bratislava</option>
        <option value="">Vienna</option>
        <option value="">Paris</option>
      </select>
      <div className={s.select}>
        <h3 onClick={activeMode}>{selectItem && selectItem.title}</h3>
        {
          active &&
          <div className={s.items}>
            {props.items.map((i) => (
              <div key={i.value}>{i.title}</div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

