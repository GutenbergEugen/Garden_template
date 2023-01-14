import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';

export default function NotFound() {
  return (
    <div className={['wrapper_main', s.title].join(' ')}>
        <p>Page not found</p>
        <p>Go to <Link to='/'>Home page</Link></p>
    </div>
  )
}