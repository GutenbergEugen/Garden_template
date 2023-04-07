import React from 'react';
import s from './style.module.sass';
import CategoriesContainer from '../../components/CategoriesContainer';


export default function CategoriesPage() {
  
  return (
    <div className={['wrapper_main', s.categorie_conteiner].join(' ')}>
        <p className={['wrapper_title_page', s.title].join(' ')}>Categories</p>
        <>
          <CategoriesContainer />
        </>
        
           
    </div>
  )
}
