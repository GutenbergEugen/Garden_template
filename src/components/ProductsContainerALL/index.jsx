import React from 'react';
import  { useSelector, useDispatch }from 'react-redux';
import { useEffect } from 'react';
import { ProductCard } from '../ProductCard';
import s from './style.module.sass';
import { loadProductsAll } from '../../store/asyncActions/productsAll';
import { searchPrice_all_action, sortProducts_all_action } from '../../store/reducer/productReducerAll';


export default function ProductsContainerAll() {

const products = useSelector(state => state.products_all);
const dispatch = useDispatch();

useEffect(()=> {
  dispatch(loadProductsAll())
}, [])

const sort_products = (event) => {
  dispatch(sortProducts_all_action(event.target.value))
};

const search = event => {
  event.preventDefault();
  const { min, max } = event.target;
  const min_value = min.value || 0;
  const max_value = max.value || Infinity;
  dispatch(searchPrice_all_action({min_value, max_value}))
};

  return (
    <section className={['wrapper_main', s.products_block].join(' ')}>
      
      <form className={ s.search_form}  onSubmit={search}>
        <div className={s.search_price}>
          <p>Price</p>
          <input type="number" placeholder='From' name='min'/>
          <input type="number" placeholder='To Up' name='max'/>
          <button>Search</button>
        </div>
     
        <div className={s.sort}>
          <span>Sort by:</span>
            <select onInput={sort_products}>
              <option value="default">Default</option>
              <option value="title">Title</option>
              <option value="discont_price">Discount Price</option>
            </select>
        </div>
      </form>

      <div className={s.card_container}>
          {
            products
              .filter(el => !el.hide)
              .map(product => <ProductCard key={product.id} {...product}/>)
          }  
      </div>
    </section>
  )
}
