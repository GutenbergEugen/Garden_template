import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import Header from '../Header';
import s from './style.module.sass';

export default function Lyaout() {
  return (
    <div className={s.wrapper_layout}>
        <Header />
         <div className={s.content_layout}>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
