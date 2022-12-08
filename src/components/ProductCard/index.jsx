import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.sass'


export default function ProductCard({id, title, price, discont_price, description, categoryId }) {

    const link = `/product/${id}`

  return (
    <Link to={link} className={s.card}>
        <p>{price}</p>
        <p>{discont_price}</p>
        <p>{title}</p>
    </Link>
  )
}
