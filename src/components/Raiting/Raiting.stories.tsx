import { action } from '@storybook/addon-actions';
import React, { useState }  from 'react';

import { RaitingPropsType, Rating as Rating } from './Raiting';


export default {
  title: 'Rating',
  component: Rating,
}
export const EmptyRating = () => <Rating value={0} onChange={action('click')}/>
export const EmptyRating1 = () => <Rating value={1} onChange={action('click')}/>
export const EmptyRating2 = () => <Rating value={2} onChange={action('click')}/>
export const EmptyRating3 = () => <Rating value={3} onChange={action('click')}/>
export const EmptyRating4 = () => <Rating value={4} onChange={action('click')}/>
export const EmptyRating5 = () => <Rating value={5} onChange={action('click')}/>

export const ChangeRating = (props: RaitingPropsType) => {
const [rating, setRating] = useState(5);
return (
<Rating value={rating} onChange={setRating}/>
)} 