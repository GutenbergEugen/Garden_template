import React from 'react'
import { useDispatch } from 'react-redux';
import { decrement_count_action, increment_count_action } from '../../store/reducer/basketReducer';
import s from './style.module.sass';

export default function BasketCard({ id, images, title, price, discont_price, count}) {
console.log('BasketCard', title)
const dispatch = useDispatch();

  return (
    <div className={s.card}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{discont_price}</p>
        {/* <p>{count}</p> */}
        <div className={s.button_container}>
          <button onClick={() => dispatch(increment_count_action(id))}>+</button>
          <p>{count}</p>
          <button onClick={() => dispatch(decrement_count_action(id))}>-</button>
        </div>
        
    </div>
  )
}
