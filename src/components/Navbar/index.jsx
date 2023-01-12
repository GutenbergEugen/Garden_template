import React from 'react';
import logo from './media/logo.png';
import s from './style.module.sass';
import { ShoppingOutlined } from '@ant-design/icons'; 
import { NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

export default function Navbar() {

    const basket = useSelector(state => state.basket)  
    const count = basket.reduce((pre, {count}) => pre + count, 0)
    console.log(count)


  return (
    <nav>
        <div className={['wrapper', s.wrapper].join(' ')}>
            <a href='/'><img src={logo} alt="logo" /></a>
            <div className={s.menu_catalog}>
                <NavLink to='/categories' className={s.catalog}>Catalog</NavLink>
                
                <div className={s.menu_basket}>
                    <ul className={s.menu}>
                        <NavLink to='/categories' className={s.categories} >Categories</NavLink>
                        <li>Coupon</li>
                        <li>Stock</li>
                        <li>Contacts</li>   
                    </ul>
                    <div className={s.counter}>
                        <NavLink to='/basket' className={s.icon}><ShoppingOutlined/></NavLink>  
                        {!!count && <span className={s.count}>{count}</span>}
                    </div>
                </div>   
            </div>
        </div>
    </nav>
  )
}
