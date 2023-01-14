import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAll } from '../../store/asyncActions/productsAll';
import ProductCard from '../ProductCard';
import s from './style.module.sass'

export default function StockSection() {

const products_all = useSelector(state => state.products_all);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadProductsAll())
}, [])

const [ random_products, setRandom_Products ] = useState(products_all);

const arr_index = [];
const getRandomProduct = (max) => Math.floor(Math.random() * max);

  while(arr_index.length !== 4){
    const index = getRandomProduct(products_all.length);
    arr_index.push(index);
    // return random_products
  }
  console.log("Stock", [...arr_index])
 


const randomProducts = (arr_index) => {
  setRandom_Products(pre => pre.filter(product => {
    if(product.id === arr_index[0])
    return product
  }))
}


useEffect(() => {
  randomProducts()
}, [products_all])

console.log("Stock 1", randomProducts)

// const products_discount = products_all.map(el => {
//   if(el.discount_price !== 0)
//   return el
// })

// console.log("Stock", products_discount)

// const random_products = [];



  return (
    <div>
      <p>Stock</p>
      <div className={s.images_products}>
        {
          random_products.map(product => <ProductCard key={product.id} {...product}/>)
        }
      </div>
    </div>
  )
}
