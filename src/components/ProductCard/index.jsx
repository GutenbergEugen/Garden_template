import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';
import  product_image from './media/product_image.png';
import { useDispatch } from 'react-redux';
import { add_to_basket_action } from '../../store/reducer/basketReducer';


export default function ProductCard({id, title, price, discont_price, description, categoryId }) {

    const link = `/products/${id}`
    const discount =  (1 - +discont_price / +price) * 100

    const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <Link to={link} >
        <img src={product_image} alt="image_product" />
        
        <div className={s.price_container}>
          {
            discont_price === ''
            ? <p>{price}</p>
            : <>
              <p className={s.discont_price}>{discont_price.toFixed(2)}</p>
              {/* <p className={s.discont_price}>{discont_price}</p> */}
              <p style={{color: 'gray', textDecoration: 'line-through'}} className={s.price}>{price}</p>
              <p className={s.discount}>{discount}%</p> 
            </>
          }
        </div>
        <p className={s.title_product}>{title}</p>
      </Link>   
      <button className={s.btn_basket} onClick={() => {dispatch(add_to_basket_action({id, title, price, discont_price }))}}>Add to Basket</button>
    </div>
    
    
  )
}
