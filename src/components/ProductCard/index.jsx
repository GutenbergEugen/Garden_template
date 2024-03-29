import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';
import { useDispatch } from 'react-redux';
import { add_to_basket_action } from '../../store/reducer/basketReducer';
import { motion } from 'framer-motion';



export const ProductCard = forwardRef(({id, title, price, discont_price, image }, ref) => {

    const link = `/products/${id}`
    const discount =  (1 - +discont_price / +price) * 100
    const dispatch = useDispatch();

  return (
    <div className={s.card} ref={ref}>
      <Link to={link} >
        <img src={image} alt="image_product" />
        
        <div className={s.price_container}>
          {
            discont_price === ''
            ? <p>{price.toFixed(2)}</p>
            : <>
              <p className={s.discont_price}>{discont_price.toFixed(2)}</p>
              <p style={{color: 'gray', textDecoration: 'line-through'}} className={s.price}>{price.toFixed(2)}</p>
              <p className={s.discount}>{discount.toFixed(1)}%</p> 
            </>
          }
        </div>
        <p className={s.title_product}>{title}</p>
      </Link>   
      <button className={s.btn_basket} onClick={() => {dispatch(add_to_basket_action({id, title, price, discont_price, image }))}}>Add to Basket</button>
    </div>
    
    
  )
})

export const MProductCard = motion(ProductCard)
