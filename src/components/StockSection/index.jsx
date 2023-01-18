import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAll } from '../../store/asyncActions/productsAll';
import ProductCard from '../ProductCard';
import s from './style.module.sass'

export default function StockSection() {

const products_random = useSelector(state => state.randomPromotions);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadProductsAll())
}, [])


// console.log("StockSection", products_random)


  return (
    <div className={'wrapper'}>
      <p className={s.title}>Stock</p>
      <div className={s.images_products}>
        {
          products_random.map(product => <ProductCard key={product.id} {...product}/>)
        }
      </div>
    </div>
  )
}
