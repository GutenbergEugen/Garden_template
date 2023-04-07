import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';

export default function DiscountMessagePage
() {
  return (
    <div className={['wrapper_main', s.title].join(' ')}>
        <p>A message with a discount code has been sent to your phone number.</p>
        <p>Go to <Link to='/'>Home page</Link></p>
    </div>
  )
}
