import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategories } from '../../store/asyncActions/categories';
import { MCategorieCard } from '../CategorieCard';
import s from './style.module.sass';
import { motion } from 'framer-motion';


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

    const categorieAnimation = {
      hidden: {
          y: 500,
          opasity: 0,
      },
      visible: custom => ({
          y: 0,
          opasity: 1,
          transition: {delay: custom * 0.2, duration: 0.5},
      }),
    };


  return (
    <motion.div 
      initial="hidden"
      whileInView="visible" 
      viewport={{ amount: 0.3, once: true }}
      style={{overflow: 'hidden'}}
      className='wrapper'>
        <div className={s.categories_block}>
            <p>Categories</p>
            <Link to='/categories' className={s.categories_btn}>All categories</Link>
        </div>
        <div className={s.images_categories}>
            {
                new_arr.map((el, index) => (
                  <MCategorieCard
                    custom = {index + 1} 
                    variants = {categorieAnimation} 
                    key={el.id} 
                    {...el} 
                  />
                ))
            }
        </div>
    </motion.div>
  )
}
