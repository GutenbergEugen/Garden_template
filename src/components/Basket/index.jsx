import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
import s from './style.module.sass';

export default function Basket() {

const basket = useSelector(state => state.basket)
const dispatch = useDispatch();

  return (
    <>
        <p>Basket</p>
        {
            basket.length === 0
            ? 'Basket is empty'
            : <div>
                <div>
                    {
                        basket.map(product => <BasketCard key={product.id} {...product}/>)
                    }
                </div>
                <div>
                    <p>Order details</p>
                    <p>
                        Summa: <span>{basket.reduce((prev, {discont_price, count}) => prev + discont_price * count, 0)}</span>
                    </p>
                    <input type="text" name='phone' placeholder='Your phone number' />
                    <button>Buy</button>
                </div>
            </div>
        }

    </>
  )
}
