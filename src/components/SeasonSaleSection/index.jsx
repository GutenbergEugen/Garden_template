import React from 'react';
import img_sale from './media/SeasonSale.png';
import s from './style.module.sass';

export default function SeasonSaleSection() {
  return (
    <div className={['wrapper_main', s.sale].join(' ')}>
        <div className={s.sale_text}>
            <h3>Sale</h3>
            <p className={s.text_new_season}>the new season</p>
            {/* <div className={s.button}> */}
                <button className={s.promotions}>All promotions</button>    
            {/* </div> */}
        </div>
        <img src={img_sale} alt="img_sale" />
    </div>
  )
}
