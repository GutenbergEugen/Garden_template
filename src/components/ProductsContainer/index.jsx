import React, { useContext} from 'react';
import s from './style.module.sass'
import { Context } from '../../context'
import CategoriesPage from '../../pages/CategoriesPage';


export default function ProductsContainer() {

const { products } = useContext(Context)

  return (
    <div>
        {/* {
            products.map(el => <CategoriesPage key={el.id} {...el}/>)
        } */}

    </div>
  )
}
