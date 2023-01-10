import React from 'react'
import s from './style.module.sass';

export default function Search({filtered_products, setFiltered_products}) {

    // const search = (search_value) => {
    //     setProducts(prev => {
    //       return [...prev].map((product) => {
    //         return {
    //           ...product,
    //           del_flg: !product.title.toLowerCase().startsWith(search_value.toLowerCase())
    //         }
    //       })
    //     })
    //   }


const searchOnChange = event => {
    const value = event.target.value;
    console.log(event.target.value)
    // search(value);
}


  return (
    <form className={['wrapper', s.search_form].join(' ')}>
        <div className={s.search_price}>
            <p>Price</p>
            <input onChange={searchOnChange} type="text" placeholder='from' />
            <input onChange={searchOnChange} type="text" placeholder='up to' />
        </div>
        <div className={s.search_discount}>
            <p>Discounted goods</p>
            <input type="checkbox"/>
            
        </div>
      
    </form>
    
  )
}
