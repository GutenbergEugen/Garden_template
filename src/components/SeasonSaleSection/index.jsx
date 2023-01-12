import React from 'react';
import img_sale from './media/SeasonSale.png';
import s from './style.module.sass';

export default function SeasonSaleSection() {
  return (
    <div className={s.sale}>
        <div className={s.sale_text}>
            <h3>Sale</h3>
            <h4>the new season</h4>
            <div className={s.button}>
                <button className={s.promotions}>All promotions</button>
                {/* <button className={s.more}>More information</button> */}
            </div>
        </div>
        <img src={img_sale} alt="img_sale" />
    </div>
  )
}
