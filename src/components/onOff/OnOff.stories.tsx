import { action } from '@storybook/addon-actions';
import React, { useState }  from 'react';
import { ControlledOnOff, ControlledType } from './ControlledOnOff';


export default {
  title: 'OnOff button',
  component: ControlledOnOff,
}
export const OnMode = () => <ControlledOnOff on={true} changeOn={action('click on')}/>
export const OffMode = () => <ControlledOnOff on={false} changeOn={action('click off')}/>


export const ChangeMode = (props: ControlledType) => {
const [value, setValue] = useState(true);
return (
<ControlledOnOff on={value} changeOn={setValue}/>
)} 