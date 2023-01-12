import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadProducts } from '../../store/asyncActions/products';
import ProductCard from '../../components/ProductCard';
import s from './style.module.sass'
// import Search from '../../components/Search';
// import Sort from '../../components/Sort';

export default function ProductsContainer() {

const products = useSelector(state => state.products);
const [priceParams, setPriceParams] = useState({min: -Infinity, max: Infinity});
const [filtered_products, setFiltered_products] = useState(products);

const dispatch = useDispatch();

const {categorie_id} = useParams();
console.log('ProductsPage:', categorie_id);

useEffect(() => {
    dispatch(loadProducts(categorie_id));
}, []);

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

const maxInput = event => {
  setPriceParams(pre => ({...pre, max: +event.target.value || Infinity}));
};

const minInput = event => {
  setPriceParams(pre => ({...pre, min: +event.target.value  || -Infinity}));
};

// useEffect(()=> {
//   setFiltered_products(products)
// }, [products])

console.log('ProductsPageFilter:', filtered_products);


// console.log('Search', product_FILTER) 

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
}

  return (
    <section>
      <form className={['wrapper', s.search_form].join(' ')}>
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

      <div className={['wrapper', s.card_container].join(' ')}>
          {
            filtered_products
              .filter(({show_flg}) => show_flg)
              .map(product => <ProductCard key={product.id} {...product}/>)
          }
         
      </div>
    </section>
  )
}
