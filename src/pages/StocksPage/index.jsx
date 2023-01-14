import React from 'react';
import StockContainer from '../../components/StockContainer';
import s from './style.module.sass';

export default function StocksPage() {
  return (
    <div className={"wrapper_main"}>
        <p className={s.title}>Stocks</p>
        <StockContainer />

    </div>
  )
}
