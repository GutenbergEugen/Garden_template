import React from 'react';
import s from './style.module.sass';
import { Link } from 'react-router-dom';

export default function CategorieCard({id, title, categorie_img }) {
 
const link = `/category/${id}`;
   
  return (
    <Link className={s.categorie_card} to={link}>
        <img src={categorie_img} alt="categorie_img" />
        <p className={s.title}>{title}</p>
    </Link>
  )
}

