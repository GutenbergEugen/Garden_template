import React from 'react';
import logo from './media/logo.png';
import s from './style.module.sass';
import { ShoppingOutlined } from '@ant-design/icons'; 
import { Link, NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { MenuOutlined } from '@ant-design/icons';

export default function Navbar() {

    const basket = useSelector(state => state.basket)  
    const count = basket.reduce((pre, {count}) => pre + count, 0)
    console.log(count)


  return (
    <nav>
        <div className={['wrapper', s.menu_block].join(' ')}>
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
            {/* <a href='/'><img src={logo} alt="logo" /></a> */}
            <div className={s.menu_catalog}>
                <NavLink to='/categories' className={s.catalog}>Catalog</NavLink>
                
                <div className={s.menu_basket}>
                    <ul className={s.menu}>
                        <NavLink to='/categories' className={s.categories} >Categories</NavLink>
                        {/* <li>Coupon</li> */}
                        <NavLink to="/stock">Stocks</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>   
                    </ul>
                    <div className={s.counter}>
                        <NavLink to='/basket' className={s.icon}><ShoppingOutlined/></NavLink>  
                        {!!count && <span className={s.count}>{count}</span>}
                    </div>
                </div>   
            </div>
            <MenuOutlined className={s.burger_menu}/>
        </div>
    </nav>
  )
}
