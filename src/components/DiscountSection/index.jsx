import React from 'react';
import s from './style.module.sass';
import dwarf from './media/dwarf.png'
import { Link } from 'react-router-dom';

export default function DiscountSection() {
  return (
    <div className={s.discount_block}>
        <img src={dwarf} alt="dwarf_img" />
        <form className={s.form_discount}>
            <p className={s.discount_sum}>5% discount</p>
            <p className={s.discount_orders}>on first order</p>
            <div className={s.inputs}>
              <input className={s.phone} type="text" name='phone' placeholder='+49 '/>
              <Link className={s.get_discount} to="/discount_message">
                <p className={s.btn_get_discount}>Get a discount</p>
              </Link>
            </div>
        </form>
    </div>
  )
}
