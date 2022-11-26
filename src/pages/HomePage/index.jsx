import React from 'react'
import { Link } from 'react-router-dom'; 
import DiscountSection from '../../components/DiscountSection'
import SeasonSaleSection from '../../components/SeasonSaleSection'
import CategoriesContainer from '../../components/CategoriesContainer'
import StockSection from '../../components/StockSection'
import s from './style.module.sass'

export default function HomePage() {
  return (
    <>
        <SeasonSaleSection />
        <div className='wrapper'>
          <div className={s.contaeiner_title}>
            <p>Categories</p>
            <Link to='/categories' className={s.categories_container}>All categories</Link>
          </div>
          <div >
            <CategoriesContainer />
          </div>
        </div>
        <DiscountSection />
        <StockSection />
    </>
  )
}
