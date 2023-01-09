import React from 'react';
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

const {categorie_id} = useParams();
console.log('ProductsPage:', categorie_id)

useEffect(() => {
    dispatch(loadProducts(categorie_id));
}, [])




  return (
    <section>
      {/* <p>{title}</p> */}
      <Search />
      {/* <Sort /> */}

      <div className={s.card_container}>
          {
              products.map(product => <ProductCard key={product.id} {...product}/>)
          }
      </div>
    </section>
  )
}
