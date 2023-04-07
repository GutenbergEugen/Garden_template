import React from 'react';
import StockContainer from '../../components/StockContainer';
import s from './style.module.sass';

export default function StocksPage() {
  return (
    <div className={"wrapper_main"}>
        <p className={['wrapper_title_page', s.title].join(' ')}>Stocks</p>
        <StockContainer />

    </div>
  )
}
