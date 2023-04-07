import { CloseOutlined } from '@ant-design/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement_count_action, delete_action, increment_count_action } from '../../store/reducer/basketReducer';
import s from './style.module.sass';


export default function BasketCard({ id, image, title, price, discont_price, count}) {

const dispatch = useDispatch();

const link = `/products/${id}`
  return (
    <div className={s.card}>
      <Link to={link}>
        <img src={image} alt="image_product" />
      </Link>
      <div className={s.info_count}>
        <Link to={link}>
         <p>{title}</p>
        </Link>
        <div className={s.button_container}>
          <button onClick={() => dispatch(decrement_count_action(id))}>-</button>
          <p>{count}</p>
          <button onClick={() => dispatch(increment_count_action(id))}>+</button>
        </div>
      </div>  
        
      <div className={s.block_price}>
        {
          discont_price === ''
          ? <p>{(price*count).toFixed(2)}</p>
          : <>
            <p className={s.discont_price}>{(discont_price*count).toFixed(2)}</p>
            <p style={{color: 'gray', textDecoration: 'line-through'}} className={s.price}>{(price*count).toFixed(2)}</p>
          </>
        }
      </div>
      <div className={s.icon_close}>
        <CloseOutlined onClick={() => dispatch(delete_action(id))}/> 
      </div>
      
    </div>
  )
}
