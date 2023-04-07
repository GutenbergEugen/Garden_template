import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { load_products } from '../../store/asyncActions/products';
import { ProductCard } from '../../components/ProductCard';
import s from './style.module.sass';
import { loadCategories } from '../../store/asyncActions/categories';
import { searchPrice, sortProducts } from '../../store/reducer/productReducer';


export default function ProductsContainer() {

const products = useSelector(state => state.products);

//add category name:
const categories = useSelector(state => state.categorie);
const dispatch = useDispatch();
const {categorie_id} = useParams();

useEffect(() => {
  dispatch(loadCategories());
}, []);
const current_category = categories.find(el => el.id === +categorie_id);

useEffect(()=> {
  dispatch(load_products(categorie_id))
}, [])

const sort_products = (event) => {
  dispatch(sortProducts(event.target.value))
};

const search = event => {
  event.preventDefault();
  const { min, max } = event.target;
  const min_value = min.value || 0;
  const max_value = max.value || Infinity;
  dispatch(searchPrice({min_value, max_value}))
};

  return (
    <section className={['wrapper_main', s.products_block].join(' ')}>
      <div className={['wrapper_title_page', s.title].join(' ')}>
        <p>{current_category?.title}</p>
      </div>

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
