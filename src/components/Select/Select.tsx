import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css";

export type ItemsType = {
  title: string;
  value: any;
  people?: number
  country?: string
};
type SelectPropsType = {
  onChange: (value: any) => void;
  value?: any;
  items: ItemsType[];
};

const SelectSecret = (props: SelectPropsType) => {

  const [hoveredItem, setHoveredItem] = useState(props.value);
  const [active, setActive] = useState(false);
  const selectItem = props.items.find((i) => i.value === props.value);
  const hoveredItemElement = props.items.find(e => e.value === hoveredItem);

  const activeMode = () => setActive(!active);
  const onClicked = (value: any) => {
    props.onChange(value);
    activeMode();
  }
  useEffect( () => {
    setHoveredItem(props.value)
  }, [props.value])

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i<props.items.length; i++) {
        if(props.items[i].value === hoveredItem) {
          const preventElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1];
          if (preventElement) {
            props.onChange(preventElement.value);
            return;
          }
        }
      }
      if (!selectItem) {
        props.onChange(props.items[0].value);
      }
    }
    if (e.key == 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }
  return (
    <div>
      <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span onClick={activeMode}>{selectItem && selectItem.title}</span>
        {
          active &&
          <div className={s.items}>
            {props.items.map((i) => (
              <div
                onMouseEnter={()=>setHoveredItem(i.value)}
                className={s.item + ' ' + (hoveredItemElement === i ? s.active : '')} 
                key={i.value}
                onClick={()=>onClicked(i.value)}
              >
                  {i.title}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};
export const Select = React.memo(SelectSecret);
