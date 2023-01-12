import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import Navbar from '../Navbar';
import s from './style.module.sass';

export default function Lyaout() {
  return (
    <div className={s.wrapper}>
        <Navbar />
         <div className={s.content}>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
