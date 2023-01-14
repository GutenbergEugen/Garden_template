import React from 'react'
import { useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
import s from './style.module.sass';
import { Link } from 'react-router-dom';

export default function Basket() {

const basket = useSelector(state => state.basket)
console.log('basket:', basket)
// const dispatch = useDispatch();

  return (
    <div className={['wrapper_main', s.basket].join(' ')}>
        <p className={ s.title}>Basket</p>
                <div className={ s.container_nav}>
                    <div className={s.on_left}>
                        <Link to='/'>Main</Link>
                        <p>/</p>
                        <Link to='/basket'>Basket</Link>
                    </div>
                    <div className={s.on_right}>
                        <Link to='/categories'>Сontinue shopping</Link>
                    </div>  
                </div>
                
                {
                    basket.length === 0
                    ? <p className={s.basket_empty}>Basket is empty</p>
                    : <div className={s.basket_container}>
                        <div className={s.products_container}>
                            {
                                basket.map(product => <BasketCard key={product.id} {...product}/>)
                            }
                        </div>
                        
                        <form className={s.order_details}>
                            <p className={s.order_title}>Order details</p>
                            <p className={s.summ}>
                                Summa: <span>{(basket.reduce((prev, {discont_price, count}) => prev + discont_price * count, 0)).toFixed(2)}</span>
                            </p>
                            <input className={s.button_phone} type="text" name='phone' placeholder='Your phone number' />
                            <button className={s.button_buy}>Buy</button>
                        </form>
                    </div>
                }
    </div>
    
  )
}
