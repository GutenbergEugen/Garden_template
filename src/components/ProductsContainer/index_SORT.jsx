import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Test() {
  

  const data = [
    {id: 1, title: 'велосипед', price: 45000, show_flg: true},
    {id: 2, title: 'ролики', price: 25000, show_flg: true},
    {id: 3, title: 'смокат', price: 17000, show_flg: true},
    {id: 4, title: 'скейт', price: 20000, show_flg: true},
    {id: 5, title: 'лыжи', price: 24000, show_flg: true},
    {id: 6, title: 'коньки', price: 7000, show_flg: true},
    {id: 7, title: 'сноуборд', price: 19000, show_flg: true},
  ]

  const [priceParams, setpriceParams] = useState({min: -Infinity, max: Infinity});
  const [products, setProducts] = useState(data);

  const priceSearch = () => {
    setProducts(pre => pre.map(product => {
      product.show_flg = product.price >= priceParams.min && product.price <= priceParams.max;
      console.log(product.price >= priceParams.min && product.price <= priceParams.max);
      return product
    }))
  }

  useEffect(()=>{
    priceSearch();
  }, [priceParams])

  const maxInput = event => {
    setpriceParams(pre => ({...pre, max: +event.target.value || Infinity}));
  }

  const minInput = event => {
    setpriceParams(pre => ({...pre, min: +event.target.value  || -Infinity}));
  }

  // console.log('ProductsPageFilter 3:', products);

  return (
    <div>
      <form>
        <input type="number" placeholder='min' onInput={minInput} value={priceParams.min}/>
        <input type="number" placeholder='max' onInput={maxInput} value={priceParams.max}/>
      </form>
      <div>
        {
          products
            .filter(({show_flg}) => show_flg)
            .map(({id, title, price}) => <p key={id}>{title} {price}</p>)
        }
      </div>
    </div>
  )
}
