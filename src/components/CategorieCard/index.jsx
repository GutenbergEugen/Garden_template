import React, { forwardRef } from 'react';
import s from './style.module.sass';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CategorieCard = forwardRef(({ id, title, image }, ref) => {
 
const link = `/categories/${id}`;

   
  return (
    <Link className={s.categorie_card} to={link} ref={ref}>
        <img src={image} alt="categorie_img" />
        <p className={s.title}>{title}</p>
    </Link>
  )
})

export const MCategorieCard = motion(CategorieCard);