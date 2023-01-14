import React from 'react';
import s from './style.module.sass';
import CategoriesContainer from '../../components/CategoriesContainer';


export default function CategoriesPage() {
  
  return (
    <div className={['wrapper_main', s.categorie_conteiner].join(' ')}>
        <p className={s.text}>Categories</p>
        <>
          <CategoriesContainer />
        </>
        
           
    </div>
  )
}
