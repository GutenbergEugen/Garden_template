import React from 'react';
import s from './style.module.sass';
import dwarf from './media/dwarf.png'

export default function DiscountSection() {
  return (
    <div className={s.discount}>
        <img src={dwarf} alt="dwarf_img" />
        <form className={s.form_discount}>
            <p className={s.discount_sum}>5% discount</p>
            <p className={s.discount_orders}>on first order</p>
            <div className={s.inputs}>
              <input className={s.phone} type="text" name='phone' placeholder='+7 '/>
              <button>Get a discount</button>
            </div>
        </form>

    </div>
  )
}
