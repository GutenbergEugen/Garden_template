import React, { useRef } from 'react'
import s from './style.module.sass';

export default function Search({ searchFROM, searchUP }) {



const searchOnChangeFROM = event => {
    const value = event.target.value;
    console.log('SEARCH:', event.target.value)
    searchFROM(value);
}

const searchOnChangeUP = event => {
    const value = event.target.value;
    console.log('SEARCH:', event.target.value)
    searchUP(value);
}


// const inputEl = useRef(null);
// const onButtonClick = () => {

//     inputEl.current.focus();
//   };
// console.log('Search', inputEl)


  return (
    <form className={['wrapper', s.search_form].join(' ')}>
        <div className={s.search_price}>
            <p>Price</p>
            <input onChange={searchOnChangeFROM} type="text" placeholder='from' />
            <input onChange={searchOnChangeUP} type="text" placeholder='up to' />
        </div>
        <div className={s.search_discount}>
            <p>Discounted goods</p>
            <input type="checkbox"/> 
        </div>
      
    </form>
    
  )
}
