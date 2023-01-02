import React from 'react'
import s from './style.module.sass';

export default function Search() {
  return (
    <form className={['wrapper', s.search_form].join(' ')}>
        <div className={s.search_price}>
            <p>Price</p>
            <input type="text" placeholder='from' />
            <input type="text" placeholder='up to' />
        </div>
        <div className={s.search_discount}>
            <p>Discounted goods</p>
            <input type="checkbox"/>
            
        </div>
      
    </form>
    
  )
}
