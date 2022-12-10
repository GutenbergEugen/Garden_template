import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { loadProduct } from '../../store/asyncActions/product';
import { reset_product_action } from '../../store/reducer/singleProductReducer';
import s from './style.module.sass';
import  product_image from './media/product_image.png';

export default function ProductDescription() {

    const {product_id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.singleProduct);

    useEffect(() => {
        dispatch(reset_product_action());
        dispatch(loadProduct(product_id));
    }, []);


const render = () => {
    if(Object.keys(product).length ===0){
        <p>Loading</p>
    }else{
        const { title, discont_price, price, discount, description, } = product
        return (
            <div>
                <h1>{title}</h1>
                <img src={product_image} alt='image_product' />
                <div className={s.price_container}>
                    {
                        discont_price === ''
                        ? <p>{price}</p>
                        : <>
                        <p className={s.discont_price}>{discont_price.toFixed(2)}</p>
                        <p style={{color: 'gray', textDecoration: 'line-through'}} className={s.price}>{price}</p>
                        <p className={s.discount}>{discount}%</p> 
                        </>
                    }
                </div>
                <p>{description}</p>
            </div>
        )
    }
}

  return (
   render()
  )
}
