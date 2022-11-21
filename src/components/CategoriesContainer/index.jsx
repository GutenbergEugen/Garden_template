import React from 'react';
import { categories } from '../../data/categories';
import CategorieCard from '../CategorieCard';

export default function CategoriesContainer() {
  return (
    <div>
        {
        categories.map(el => <CategorieCard {...el} key={el.id} />)
        }

    </div>
  )
}
