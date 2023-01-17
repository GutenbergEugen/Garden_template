import React from 'react';
import { Link } from 'react-router-dom';
import img_sale from './media/SeasonSale.png';
import s from './style.module.sass';

export default function SeasonSaleSection() {
  return (
    <div className={s.sale}>
        <div className={s.block_text}>
            <h3>Sale</h3>
            <p className={s.text_new_season}>the new season</p>
            <Link to='/stock' className={s.button_promotion}>
                <button className={s.promotions}>All promotions</button>    
            </Link>
        </div>
        <img src={img_sale} alt="img_sale" />
    </div>
  )
}
