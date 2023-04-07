import React from 'react';
import s from './style.module.sass';
import dwarf from './media/dwarf.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DiscountSection() {

  const textAnimation = {
    hidden: {
        x: 1000,
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
      className={s.discount_block}>
        <img src={dwarf} alt="dwarf_img" />
        <form className={s.form_discount}>
            <motion.p custom={1} variants={textAnimation} className={s.discount_sum}>5% discount</motion.p>
            <motion.p custom={2} variants={textAnimation} className={s.discount_orders}>on first order</motion.p>
            <div className={s.inputs}>
              <motion.input custom={3} variants={textAnimation} className={s.phone} type="text" name='phone' placeholder='+49 '/>
              <Link className={s.get_discount} to="/discount_message">
                <motion.p custom={4} variants={textAnimation} className={s.btn_get_discount}>Get a discount</motion.p>
              </Link>
            </div>
        </form>
    </motion.div>
  )
}
