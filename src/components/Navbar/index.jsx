import React from 'react';
import logo from './media/logo.png';
import s from './style.module.sass';
import { ShoppingOutlined } from '@ant-design/icons'; 
import { Link, NavLink } from 'react-router-dom'; 

export default function Navbar() {
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
                    <NavLink to='/basket' className={s.icon}><ShoppingOutlined/></NavLink>  
                </div>
                
            </div>
        </div>
    </nav>
  )
}
