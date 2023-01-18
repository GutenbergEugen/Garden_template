import React, { useEffect } from 'react';
import DiscountSection from '../../components/DiscountSection';
import SeasonSaleSection from '../../components/SeasonSaleSection';
import StockSection from '../../components/StockSection';

import CategoriesSection from '../../components/CategoriesSection';

export default function HomePage() {

  return (
    <>
        <SeasonSaleSection />
        <CategoriesSection />
        <DiscountSection />
        <StockSection />
    </>
  )
}
