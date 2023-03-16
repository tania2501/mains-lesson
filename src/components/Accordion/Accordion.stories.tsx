import { action } from '@storybook/addon-actions';
import React, { useState }  from 'react';
import { Accordion, AccordionPropsType } from './Accordion';



export default {
  title: 'Accordion',
  component: Accordion,
}
export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsedValue={true} onChange={action('menu')} items={[]}/>
export const UncollapsedMode = () => <Accordion titleValue={"Users"} collapsedValue={false} onChange={action('users')} items={['Anna', 'Julia', 'Natalia', 'Sofia']}/>


export const ChangeMode = (props: AccordionPropsType) => {
const [value, setValue] = useState(true);
return (
<Accordion titleValue='Menu' collapsedValue={value} onChange={()=>setValue(!value)} items={['Anna', 'Julia', 'Natalia', 'Sofia']}/>
)} 