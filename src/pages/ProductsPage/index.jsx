import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadProducts } from '../../store/asyncActions/products';
import ProductCard from '../../components/ProductCard';
import s from './style.module.sass'
import Search from '../../components/Search';
import Sort from '../../components/Sort';

export default function ProductsPage() {

const products = useSelector(state => state.products);
const dispatch = useDispatch();

const [filtered_products, setFiltered_products] = useState(products);

const {categorie_id} = useParams();
console.log('ProductsPage:', categorie_id)

useEffect(() => {
    dispatch(loadProducts(categorie_id));
}, [])

useEffect(()=> {
  setFiltered_products(products)
}, [products])

const searchFROM = (search_value) => {
  setFiltered_products(prev => {
    return [...prev].map((product) => {
      return {
        ...product,
        del_flg: product.price <= (search_value)
      }
    })
  })
}

const searchUP = (search_value) => {
  setFiltered_products(prev => {
    return [...prev].map((product) => {
      return {
        ...product,
        del_flg: product.price >= (search_value)
      }
    })
  })
}


// console.log('Search', product_FILTER) 


  return (
    <section>
      {/* <p>{title}</p> */}
      <Search searchFROM={searchFROM} searchUP={searchUP} />
      

      <div className={['wrapper', s.card_container].join(' ')}>
          {
              filtered_products
                .filter(({del_flg}) => !del_flg)
                .map(product => <ProductCard key={product.id} {...product}/>)
          }
      </div>
    </section>
  )
}
