import React from 'react';
import CategorieCard from '../../components/CategorieCard';
import { categories } from '../../data/categories';
import s from './style.module.sass'


export default function CategoriesPage() {
  return (
    <div className={['wrapper', s.categorie_conteiner].join(' ')}>
        {
        categories.map(el => <CategorieCard {...el} key={el.id} />)
        }
    </div>
  )
}
