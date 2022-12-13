import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';
import  product_image from './media/product_image.png';


export default function ProductCard({id, title, price, discont_price, description, categoryId }) {

    const link = `/products/${id}`
    const discount =  (1 - +discont_price / +price) * 100

  return (
    <Link to={link} className={s.card}>
        <img src={product_image} alt="image_product" />
        <button className={s.btn_basket} >Add to Basket</button>
        <div className={s.price_container}>
          {
            discont_price === ''
            ? <p>{price}</p>
            : <>
              <p className={s.discont_price}>{discont_price.toFixed(2)}</p>
              <p style={{color: 'gray', textDecoration: 'line-through'}} className={s.price}>{price}</p>
              <p className={s.discount}>{discount}%</p> 
            </>
          }
        </div>
        <p className={s.title_product}>{title}</p>
    </Link>
    
  )
}
