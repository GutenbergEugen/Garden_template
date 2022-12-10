import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';
import  product_image from './media/product_image.png';


export default function ProductCard({id, title, price, discont_price, description, categoryId }) {

    const link = `/product/${id}`

  return (
    <Link to={link} className={s.card}>
        <img src={product_image} alt="image_product" />
        <p>{price}</p>
        <p>{discont_price}</p>
        <p>{title}</p>
    </Link>
  )
}
