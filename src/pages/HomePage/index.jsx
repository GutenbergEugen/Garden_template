import React from 'react'


import { Link } from 'react-router-dom'; 
import DiscountSection from '../../components/DiscountSection'
import SeasonSale from '../../components/SeasonSale'
import CategoriesContainer from '../../components/CategoriesContainer'
import Stock from '../../components/Stock'

export default function HomePage() {
  return (
    <>
        <SeasonSale />
        <div >
          <div>
            <p>Categories</p>
            <Link to='/categories'>All categories</Link>
          </div>
          <CategoriesContainer />
        </div>
        <DiscountSection />
        <Stock />
    </>
  )
}
