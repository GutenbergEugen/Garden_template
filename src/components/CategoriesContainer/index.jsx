import React from 'react';
import { categories } from '../../data/categories';
import CategorieCard from '../CategorieCard';
import s from './style.module.sass';

export default function CategoriesContainer() {
  return (
    <div className={s.categorie_container}>
        {
        categories.map(el => <CategorieCard {...el} key={el.id} />)
        }

    </div>
  )
}

//временно использую   Filmcontainer
