import React from 'react';
import ProductsContainer from '../../components/ProductsContainer';
import s from './style.module.sass';

export default function ProductsPage
() {
  return (
    <div className={s.container}>
      <ProductsContainer />
    </div>
  )
}
