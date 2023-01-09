import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAll } from '../../store/asyncActions/productsAll';
import ProductCard from '../ProductCard';

export default function StockSection() {

const products_all = useSelector(state => state.products_all);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadProductsAll())
}, [])

// const random_products = [];



  // while(random_products.length !== 4){
  //   const index = getRandomProduct(products_all.length);
  //   random_products.push(products_all[index]);
  // }
  // const getRandomProduct = (max) => Math.floor(Math.random() * max);
  // const index = getRandomProduct(products_all.length);
  // // while(random_products.length !== 4){
  // // random_products.push(products_all[index]);

  // const random_products = products_all.map((el) => {
  //     el.id === index ? el : ' '
  //   } 
  // )

  // console.log("Stock", random_products)

  return (
    <div>
      <p>Stock</p>
      <div>
        {/* {

          random_products.map(product => <ProductCard key={product.id} {...product}/>)
        } */}
      </div>
    </div>
  )
}
