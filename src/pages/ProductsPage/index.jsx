import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadProducts } from '../../store/asyncActions/products';
import ProductCard from '../../components/ProductCard';
import s from './style.module.sass'

export default function ProductsPage() {

const products = useSelector(state => state.products);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(loadProducts);
}, [])

const {id} = useParams();

  return (
    
    <div className={s.card_container}>
        {
            products.map(product => <ProductCard key={product.id} {...product}/>)
        }
    </div>
  )
}
