import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAll } from '../../store/asyncActions/productsAll';
import { MProductCard } from '../ProductCard';
import s from './style.module.sass'
import { motion } from 'framer-motion';

export default function StockSection() {

const products_random = useSelector(state => state.randomPromotions);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadProductsAll())
}, [])

const productAnimation = {
  hidden: {
      y: 500,
      opasity: 0,
  },
  visible: custom => ({
      y: 0,
      opasity: 1,
      transition: {delay: custom * 0.2, duration: 0.5},
  }),
};

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible" 
      viewport={{ amount: 0.3 }}
      style={{overflow: 'hidden'}}
      className={'wrapper'}>
      <p className={s.title}>Stock</p>
      <div className={s.images_products}>
        {
          products_random.map((product, index) => (
            <MProductCard
              custom = {index + 1} 
              variants = {productAnimation}
              key={product.id} 
              {...product}
            />))
        }
      </div>
    </motion.div>
  )
}
