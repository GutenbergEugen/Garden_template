import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategories } from '../../store/asyncActions/categories';
import CategorieCard from '../CategorieCard';
import s from './style.module.sass';


export default function CategoriesSection() {

    const categories = useSelector(state => state.categorie);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(loadCategories());
    }, []);
    
    const new_arr = categories.filter(function(el, index) {
      if(index <= 3){
        return el
      }
    }) 


  return (
    <div className='wrapper'>
        <div className={s.categories_block}>
            <p>Categories</p>
            <Link to='/categories' className={s.categories_btn}>All categories</Link>
        </div>
        <div className={s.images_categories}>
            {
                new_arr.map(el => <CategorieCard key={el.id} {...el} />)
            }
        </div>
  </div>
  )
}
