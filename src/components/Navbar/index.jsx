import React from 'react';
import logo from './media/logo.png';
import s from './style.module.sass';
import { ShoppingOutlined } from '@ant-design/icons'; 
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <nav>
        <div className={['wrapper', s.wrapper].join(' ')}>
            <a href='/home'><img src={logo} alt="logo" /></a>
            <div className={s.menu_catalog}>
                <Link to='/categories' className={s.catalog}>Catalog</Link>
                
                <div className={s.menu_basket}>
                    <ul className={s.menu}>
                        <Link to='/categories'>Categories</Link>
                        <li>Coupon</li>
                        <li>Stock</li>
                        <li>Contacts</li>   
                    </ul>
                    <ShoppingOutlined className={s.icon}/>
                </div>
                
            </div>
        </div>
    </nav>
  )
}
