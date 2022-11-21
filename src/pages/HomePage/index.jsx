import React from 'react'

import CategoriesMain from '../../components/CategoriesMain'
import Discount from '../../components/Discount'
import SeasonSale from '../../components/SeasonSale'
import Stock from '../../components/Stock'

export default function HomePage() {
  return (
    <>
        <SeasonSale />
        <CategoriesMain />
        <Discount />
        <Stock />
    </>
  )
}
