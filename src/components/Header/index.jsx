import React, { useState } from 'react';
import logo from './media/logo.png';
import s from './style.module.sass';
import { ShoppingOutlined } from '@ant-design/icons'; 
import { Link, NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { MenuOutlined } from '@ant-design/icons';

export default function Header() {

    const basket = useSelector(state => state.basket)  
    const count = basket.reduce((pre, {count}) => pre + count, 0)
    
    const [ menuActive, setMenuActive ] = useState(false);

  return (
    <nav>
        <div className={['wrapper', s.header_block].join(' ')}>
            <Link className={s.header_logo} to='/'>
                <img src={logo} alt="logo" />
            </Link>
            {/* <a href='/'><img src={logo} alt="logo" /></a> */}
            <div className={s.menu_catalog}>
                <NavLink to='/categories' className={s.catalog}>Catalog</NavLink>
                
                <nav className={s.menu_block}>
                    <ul className={[s.menu, menuActive ? s.active : ''].join(' ') }>
                        <NavLink to='/categories' className={s.categories} >Categories</NavLink>
                        {/* <li>Coupon</li> */}
                        <NavLink to="/stock">Stocks</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>   
                    </ul>
                    <div className={s.counter}>
                        <NavLink to='/basket' className={s.icon}><ShoppingOutlined/></NavLink>  
                        {!!count && <span className={s.count}>{count}</span>}
                    </div>
                </nav>   
            </div>
            <MenuOutlined className={s.burger_icon} onClick={() => setMenuActive(menuActive ? false : true)}/>
        </div>
        
    </nav>
  )
}
