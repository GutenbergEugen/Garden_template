import React from 'react';
import s from './style.module.sass';
import CategoriesContainer from '../../components/CategoriesContainer';


export default function CategoriesPage() {
  return (
    <div className={['wrapper', s.categorie_conteiner].join(' ')}>
        <CategoriesContainer />
    </div>
  )
}
