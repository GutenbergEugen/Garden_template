import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { loadSingleProduct } from '../../store/asyncActions/product';
import { reset_product_action } from '../../store/reducer/singleProductReducer';
import s from './style.module.sass';
import { add_to_basket_action } from '../../store/reducer/basketReducer';

export default function ProductDescription() {

    const {product_id} = useParams();
    const dispatch = useDispatch();
    
    const product = useSelector(state => state.singleProduct);
    

    useEffect(() => {
        dispatch(reset_product_action());
        dispatch(loadSingleProduct(product_id));
    }, []);


const render = () => {
    
    if(Object.keys(product).length ===0){
        <p>Loading</p>
    }else{
        const { id, title, discont_price, price, description, image} = product[0]
        const discount =  (1 - +discont_price / +price) * 100
        console.log('ProductDescrTITLE:', title)
        return (
            
            <div className={['wrapper_main', s.card_product].join(' ')}>
                <h3>{title}</h3>
                <div className={s.info_product}>
                    <img src={image} alt='image_product' />
                
                    <div className={s.container}>
                        <div className={s.price_container}>
                            {
                                discont_price === ''
                                ? <p>{price}</p>
                                : <>
                                {/* <p className={s.discont_price}>{discont_price.toFixed(2)}</p> */}
                                <p className={s.discont_price}>{discont_price.toFixed(2)}</p>
                                <p style={{color: 'gray', textDecoration: 'line-through'}} className={s.price}>{price.toFixed(2)}</p>
                                <p style={{color: 'red'}} className={s.discount}>{discount.toFixed(1)}%</p> 
                                </>
                            }
                        </div>
                        <button className={s.button} onClick={() => {dispatch(add_to_basket_action({id, title, price, discont_price, image }))}}>Add to Basket</button>
                        <p>Description</p> 
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

  return (
   render()
  )
}
