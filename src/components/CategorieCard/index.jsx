import React from 'react';
import s from './style.module.sass'

export default function CategorieCard({title, categorie_img }) {

    console.log(title)
    console.log(categorie_img)
  return (
    <div className={s.categorie_card}>
        <img src={categorie_img} alt="" />
        {title}
    </div>
  )
}
