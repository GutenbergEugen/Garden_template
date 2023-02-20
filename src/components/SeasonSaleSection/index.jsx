import React from 'react';
import { Link } from 'react-router-dom';
import img_sale from './media/SeasonSale.png';
import s from './style.module.sass';
import { motion } from 'framer-motion';

export default function SeasonSaleSection() {

  const textAnimation = {
    hidden: {
        x: -1000,
        opasity: 0,
    },
    visible: custom => ({
        x: 0,
        opasity: 1,
        transition: {delay: custom * 0.2, duration: 0.5},
    }),
};


  return (
    <motion.div 
      initial="hidden"
      whileInView="visible" 
      viewport={{ amount: 0.5, once: true }}
      className={s.sale}>
        <div className={s.block_text}>
            <motion.h3 custom={1} variants={textAnimation}>Sale</motion.h3>
            <motion.p custom={2} variants={textAnimation} className={s.text_new_season}>the new season</motion.p>
            <Link to='/stock' className={s.button_promotion}>
                <motion.button custom={3} variants={textAnimation} className={s.promotions}>All promotions</motion.button>    
            </Link>
        </div>
        <img src={img_sale} alt="img_sale" />
    </motion.div>
  )
}
