import React from 'react';
import ProductsContainerAll from '../../components/ProductsContainerALL';
import s from './style.module.sass';

export default function ProductsPage() {
  return (
    <div className={s.container}>
      <ProductsContainerAll />
    </div>
  )
}
