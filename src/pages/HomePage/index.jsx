import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; 
import DiscountSection from '../../components/DiscountSection'
import SeasonSaleSection from '../../components/SeasonSaleSection'
import StockSection from '../../components/StockSection'
import s from './style.module.sass'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../store/asyncActions/categories';
import CategorieCard from '../../components/CategorieCard';

export default function HomePage() {

const categories = useSelector(state => state.categorie);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadCategories());
}, []);

console.log('HomePage', categories[0])

  return (
    <>
        <SeasonSaleSection />
        <div className='wrapper'>
          <div className={s.contaeiner_title}>
            <p>Categories</p>
            <Link to='/categories' className={s.categories_container}>All categories</Link>
          </div>
          <div className={s.images_categories}>
            {
              categories.map(el => <CategorieCard key={el.id} {...el} />)
            }
          </div>
        </div>
        <DiscountSection />
        <StockSection />
    </>
  )
}
