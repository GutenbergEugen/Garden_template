import React from 'react';
import { useEffect } from 'react';
import CategorieCard from '../CategorieCard';
import s from './style.module.sass';
import { loadCategories } from '../../store/asyncActions/categories'
import { useDispatch, useSelector } from 'react-redux';


export default function CategoriesContainer() {
  const categories = useSelector(state => state.categorie);
  console.log(categories);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadCategories);
}, []);


  return (
    <div className={s.categorie_container}>
        {
        categories.map(el => <CategorieCard key={el.id} {...el} />)
        }

    </div>
  )
}

//временно использую   Filmcontainer
