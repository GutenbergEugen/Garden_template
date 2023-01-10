import React from 'react';
import s from './style.module.sass';
import { Link } from 'react-router-dom';

export default function CategorieCard({ id, title, image }) {
 
const link = `/categories/${id}`;
console.log('CategorieCard', id, title, image)
   
  return (
    <Link className={s.categorie_card} to={link}>
        <img src={image} alt="categorie_img" />
        <p className={s.title}>{title}</p>
    </Link>
  )
}

