import React from 'react';
import logo from './media/logo.png';
import s from './style.module.sass';
import { ShoppingOutlined } from '@ant-design/icons';  

export default function Navbar() {
  return (
    <nav>
        <div className={s.wrapper}>
            <a href='f'>
                <img src={logo} alt="logo" />
            </a>
            <div className={s.menu_catalog}>
                <a href="" className={s.catalog}>Catalog</a>

                <div className={s.menu_basket}>
                    <ul className={s.menu}>
                        <li>Categories</li>
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
