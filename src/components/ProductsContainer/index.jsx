import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadProducts } from '../../store/asyncActions/products';
import ProductCard from '../../components/ProductCard';
import s from './style.module.sass'
import { loadCategories } from '../../store/asyncActions/categories';


export default function ProductsContainer() {

const products = useSelector(state => state.products);

const [priceParams, setPriceParams] = useState({min: -Infinity, max: Infinity});
const [filtered_products, setFiltered_products] = useState(products);


//add category name:
const categories = useSelector(state => state.categorie);
const dispatch = useDispatch();
const {categorie_id} = useParams();

useEffect(() => {
  dispatch(loadCategories());
}, []);
const current_category = categories.find(el => el.id === +categorie_id) 



console.log('ProductsPageFilter 2:', products);

const priceSearch = () => {
  setFiltered_products(pre => pre.map(product => {
    product.show_flg = product.price >= priceParams.min && product.price <= priceParams.max;
    console.log(product.price >= priceParams.min && product.price <= priceParams.max);
    return product
  }))
};

useEffect(()=>{
  priceSearch();
}, [priceParams]);

useEffect(() => {
  dispatch(loadProducts(categorie_id));
  setFiltered_products(products)
}, []);

const maxInput = event => {
  setPriceParams(pre => ({...pre, max: +event.target.value || Infinity}));
};

const minInput = event => {
  setPriceParams(pre => ({...pre, min: +event.target.value  || -Infinity}));
};


const sort = (sort_value) => {
  setFiltered_products(prev => {
    return [...prev].sort((a, b) => {
      if (typeof(a[sort_value]) === 'string'){
        return a[sort_value].localeCompare(b[sort_value])
      }else{
        return a[sort_value] - b[sort_value]
      }
    })
  })
}

const sortOnChange = event => {
  const value = event.target.value;
  sort(value);
};

console.log('ProductsPageFilter:', filtered_products);

  return (
    <section className={['wrapper_main', s.products_block].join(' ')}>
      <div className={['wrapper_title_page', s.title].join(' ')}>
        <p>{current_category?.title}</p>
      </div>
      <form className={ s.search_form}>
        <div className={s.search_price}>
          <p>Price</p>
          <input type="number" placeholder='From' onInput={minInput} value={priceParams.min}/>
          <input type="number" placeholder='To Up' onInput={maxInput} value={priceParams.max}/>
        </div>
        <div className={s.search_discount}>
          <p>Discounted goods</p>
          <input type="checkbox"/> 
        </div>
        
        <div className={s.sort}>
          <p>Sorting</p>
            <select onChange={sortOnChange}>
              <option value="title">Default</option>
              <option value="price">Price</option>
              <option value="discont_price">Discount Price</option>
            </select>
        </div>
      </form>

      <div className={s.card_container}>
          {
            filtered_products
              .filter(({show_flg}) => show_flg)
              .map(product => <ProductCard key={product.id} {...product}/>)
              // products.map(product => product.show_flg ? <ProductCard key={product.id} {...product}/> : "")
          }
         
      </div>
    </section>
  )
}
