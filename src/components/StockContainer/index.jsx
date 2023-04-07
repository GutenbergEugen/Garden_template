import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsDiscount } from '../../store/asyncActions/productsDiscountAll';
import { ProductCard } from '../ProductCard';
import s from './style.module.sass'

export default function StockContainer() {

const products_discount = useSelector(state => state.products_Discount);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadProductsDiscount())
}, [])



  return (
    <div>
      <div className={s.stock_container}>
        {
          products_discount.map(product => <ProductCard key={product.id} {...product}/>)
        }
      </div>
    </div>
  )
}
